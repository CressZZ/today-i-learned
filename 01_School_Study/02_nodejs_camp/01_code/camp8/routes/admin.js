var express = require('express')
var router = express.Router();
var ProductsModel = require('../models/ProductsModel')
var CommentsModel = require('../models/CommentsModel')
var CheckoutModel = require('../models/CheckoutModel');
var loginRequired = require('../libs/loginRequired')
var paginate = require('express-paginate')
var co = require('co');



// csrf 셋팅
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });

//이미지 저장되는 위치 설정
var path = require('path');
var uploadDir = path.join( __dirname , '../uploads' ); // 루트의 uploads위치에 저장한다.
var fs = require('fs');

//multer 셋팅
var multer  = require('multer');
var storage = multer.diskStorage({
    destination : function (req, file, callback) { //이미지가 저장되는 도착지 지정
        callback(null, uploadDir );
    },
    filename : function (req, file, callback) { // products-날짜.jpg(png) 저장 
        callback(null, 'products-' + Date.now() + '.'+ file.mimetype.split('/')[1] );
    }
});
var upload = multer({ storage: storage });



router.get('/', function(req, res){
    res.send('admin app11111')
})

router.get('/products', paginate.middleware(5, 50), async (req,res) => {

    const [ results, itemCount ] = await Promise.all([
        ProductsModel.find().sort('-created_at').limit(req.query.limit).skip(req.skip).exec(),
        ProductsModel.count({})
    ]);
    const pageCount = Math.ceil(itemCount / req.query.limit);
    
    const pages = paginate.getArrayPages(req)( 4 , pageCount, req.query.page);

    res.render('admin/products', { 
        products : results , 
        pages: pages,
        pageCount : pageCount,
    });

});

router.get('/products/write',loginRequired, csrfProtection, function(req,res){
    res.render( 'admin/form', {product:"", csrfToken : req.csrfToken()});
});

router.post('/products/write',loginRequired, upload.single('thumbnail'), csrfProtection, function(req,res){
    console.log(req.file)

    var product = new ProductsModel({
        name : req.body.name,
        thumbnail: (req.file) ? req.file.filename : '',
        price : req.body.price,
        description : req.body.description,
        username: req.user.username
    });

    var validationError = product.validateSync();
    console.log('validation!!!!!!!!!!!!!!!:',validationError)
    if(validationError){
        res.send(validationError);
    }else{
        product.save(function(err){
            res.redirect('/admin/products');
        });
    }



});
/* 
router.get('/products/detail/:id' , function(req, res){
    //url 에서 변수 값을 받아올떈 req.params.id 로 받아온다
    ProductsModel.findOne( { 'id' :  req.params.id } , function(err ,product){
        
        //제품정보를 받고 그안에서 댓글을 받아온다.
        CommentsModel.find({ product_id : req.params.id } , function(err, comments){
            res.render('admin/productsDetail', { product: product , comments : comments });
        });        
    });
});
 */

router.get('/products/detail/:id' , function(req, res){
    var getData =  async () => {

      
        return {
            product :  await ProductsModel.findOne( { 'id' :  req.params.id }).exec(),
            comments : await CommentsModel.find( { 'product_id' :  req.params.id }).exec()
        };
    };
    getData().then( function(result){
        res.render('admin/productsDetail', { product: result.product , comments : result.comments });

        // res.send(result);
    });
});

router.get('/products/edit/:id',  csrfProtection, function(req, res){
    // 기존에 폼에 value안에 값을 세팅하기 위해 만든다.
    ProductsModel.findOne({id:req.params.id}, function(err, product){
        res.render('admin/form', {product:product, csrfToken : req.csrfToken()})
    })
})

router.post('/products/edit/:id', upload.single('thumbnail'),csrfProtection, function(req, res){
    ProductsModel.findOne( {id : req.params.id} , function(err, product){
        if(req.file && product.thumbnail){  //요청중에 파일이 존재 할시 이전이미지 지운다.
            fs.unlinkSync( uploadDir + '/' + product.thumbnail );
        }

        var query = {
            name : req.body.name,
            thumbnail:(req.file) ? req.file.filename : product.thumbnail,
            price : req.body.price,
            description: req.body.description,
        };
        console.log(query)
        // First param of update function is condition, second params are values
        ProductsModel.update({id:req.params.id}, {$set : query}, function(err){
            res.redirect('/admin/products/detail/'+req.params.id); // redirect to detail page after edit
        })
    })
})

router.get('/products/delete/:id', function(req, res){
    ProductsModel.remove({id:req.params.id}, function(err){
        res.redirect('/admin/products')
    })
})


router.post('/products/ajax_comment/insert', function(req, res){
    var comment = new CommentsModel({
        content: req.body.content,
        product_id : parseInt(req.body.product_id),
        test:'dd',
    });
    comment.save(function(err, comment){
        console.log(err)
        res.json({
            id : comment.id,
            content : comment.content,
            message : "success"
        })
    })
 
})

router.post('/products/ajax_comment/delete', function(req, res){
    CommentsModel.remove({id:req.body.comment_id}, function(err){
        res.json({message:"success"});
    })
})

router.post('/products/ajax_summernote', loginRequired, upload.single('thumbnail'), function(req,res){
    res.send( '/uploads/' + req.file.filename);
});

router.get('/order', function(req,res){
    CheckoutModel.find( function(err, orderList){ //첫번째 인자는 err, 두번째는 받을 변수명
        res.render( 'admin/orderList' , 
            { orderList : orderList }
        );
    });
});
router.get('/order/edit/:id', function(req,res){
    CheckoutModel.findOne( { id : req.params.id } , function(err, order){
        res.render( 'admin/orderForm' , 
            { order : order }
        );
    });
});
module.exports = router;