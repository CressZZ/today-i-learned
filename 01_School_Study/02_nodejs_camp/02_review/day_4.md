# 4회차
## 뷰엔진 설치, path 모듈 설치
- ejs 설치
- install path module
```
npm install --save ejs path
```
- `__dirname` : 현재 파일의 위치를 반환해 준다. 

## ejs 기초 강의 

## 공통파일 작성 
- common file 셋팅!
- footer.ejs 와 header.ejs를 만든다.

## visual studio Emmet 확장
-  vscode 설정에서 아래 설정 추가 
-  `"emmet.includeLanguages": {"ejs": "html"}`

## 제품 등록페이지 작성
```js
// admin.js

// get방식으로 주소 접근
router.get('/products/write', function(req,res){
    res.render( 'admin/form', {product:""});
});

// 제품 등록 버튼 눌렀을 때, form의 action에 따라 form data가 post형식으로 전달 됨 
router.post('/products/write', function(req,res){
    // ProductsModel = require('../models/ProductsModel)
    // ProductsModel is object created by mongoos.js
    var product = new ProductsModel({
        // form data submitted ejs file
        name : req.body.name,
        price : req.body.price,
        description : req.body.description,
    });
    // .save() is method of mongoos object 
    // It could have call back function to end express js 
    product.save(function(err){
        res.redirect('/admin/products');
    });
});

```

```js
// form.ejs

<% include ../header.ejs %>
    <form action="" method="post">
        <table class="table table-bordered">
            <tr>
                <th>제품명</th>
                <td><input type="text" name="name" class="form-control" value ="<%=product.name%>"/></td>
            </tr>
            <tr>
                <th>가격</th>
                <td><input type="text" name="price" class="form-control" value ="<%=product.price%>"/></td>
            </tr>
            <tr>
                <th>설명</th>
                <td><input type="text" name="description" class="form-control" value ="<%=product.description%>"/></td>
            </tr>
        </table>
        <button class="btn btn-primary">작성하기</button>
    </form>

<% include ../footer.ejs %>
```


## 제품 리스트 페이지 작성
```js
// admin.js

// get방식으로 주소 접근
router.get('/products', function(req, res){
    // res.send('admin products');
    ProductsModel.find(function(err, products){
        res.render( 'admin/products' , {products: products} );
    });
})

```

## Monoose virtual 변수 추가
- object create 의 get과 set과 비슷함
```js
// ProductsModel.js

// object create 의 get과 set과 비슷함
// set은 변수의 값을 바꾸거나 셋팅하면 호출
// get은 detDate 변수를 호출하는 순간 날짜 월일이 찍힌다. 
ProductsSchema.virtual('getDate').get(function(){
    var date = new Date(this.created_at);
    return{
        year : date.getFullYear(),
        month : date.getMonth(),
        day : date.getDate() 
    }
})
```

## 제품 상세 페이지 작성
```js
// admin.js

router.get('/products/detail/:id', function(req, res){
    ProductsModel.findOne( {'id' : req.params.id}, function(err, product){
        res.render('admin/productsDetail', {product: product});
    });
});
```
## 제품 수정 페이지 작성
```js
// admin.js

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

    // mongoos object method `update()`
    // First param of update function is condition, second params are values
    ProductsModel.update({id:req.params.id}, {$set : query}, function(err){
        res.redirect('/admin/products/detail/'+req.params.id); // redirect to detail page after edit
    })
})

```

## 제품 삭제 페이지 작성
```js
// admin.js

router.get('/products/delete/:id', function(req, res){
    ProductsModel.remove({id:req.params.id}, function(err){
        res.redirect('/admin/products')
    })
})

```

## 오늘의 요약! 주요 Mongoos.js API를 기억 합시다!
```js
//전체데이터 조회
ProductsModel.find( 조회조건 , function( err, products ) )

//데이터 저장
var product = new ProductsModel({ 데이터 셋팅 })
product.save()

//한줄 불러올때
ProductsModel.findOne( { 조회조건 }, functon( err, product ) )

//수정할때
ProductsModel.update( { 조회조건 } , {  바꿀변수들 } , function(err) )


//삭제할때
ProductsModel.remove( { 조회조건 }, function(err) )

```

## 숙제 
- 아래 페이지 만들어 오기 
```js
//모델작성
models/ContactsModel.js

//라우팅
routes/contacts.js

//뷰폴더
views/contacts/list.ejs
views/contacts/form.ejs

//URL
/contacts  글리스트
/contacts/write 글작성
/contacts/detail/:id  상세글보기
/contacts/edit/:id 글수정하기
/contacts/delete/:id 글삭제하기
```