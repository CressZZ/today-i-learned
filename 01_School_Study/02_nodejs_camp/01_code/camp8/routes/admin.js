var express = require('express')
var router = express.Router();
var ProductsModel = require('../models/ProductsModel')



router.get('/', function(req, res){
    res.send('admin app11111')
})

router.get('/products', function(req, res){
    // res.send('admin products');
    ProductsModel.find(function(err, products){
        res.render( 'admin/products' , {products: products} );
    });
})

router.get('/products/write', function(req,res){
    res.render( 'admin/form', {product:""});
});

router.post('/products/write', function(req,res){
    var product = new ProductsModel({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
    });
    product.save(function(err){
        res.redirect('/admin/products');
    });
});

router.get('/products/detail/:id', function(req, res){
    ProductsModel.findOne( {'id' : req.params.id}, function(err, product){
        res.render('admin/productsDetail', {product: product});
    });
});

router.get('/products/edit/:id', function(req, res){
    // 기존에 폼에 value안에 값을 세팅하기 위해 만든다.
    ProductsModel.findOne({id:req.params.id}, function(err, product){
        res.render('admin/form', {product:product})
    })
})

router.post('/products/edit/:id', function(req, res){
    var query = {
        name : req.body.name,
        price : req.body.price,
        description: req.body.description,
    };

    // First param of update function is condition, second params are values
    ProductsModel.update({id:req.params.id}, {$set : query}, function(err){
        res.redirect('/admin/products/detail/'+req.params.id); // redirect to detail page after edit
    })
})

router.get('/products/delete/:id', function(req, res){
    ProductsModel.remove({id:req.params.id}, function(err){
        res.redirect('/admin/products')
    })
})
module.exports = router;