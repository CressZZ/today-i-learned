var mongoose = require('mongoose'); //의존성으로 mongodb를 사용하기 때문에 자동으로 mongodb를 사용한다.
var Schema = mongoose.Schema;
var autoincrement = require('mongoose-auto-increment');

// 생성된 필드명을 정한다. 
var ProductsSchema = new Schema({
    name: String, //제품명
    price: Number, //가격
    description: String,
    created_at : { // 작성일
        type: Date,
        default: Date.now()
    }

});

// 1씩 증가하는 primary Key를 만든다
// model : 생성할 document 이름 
// field : primary key, startAt: 1부터 시작
ProductsSchema.plugin(autoincrement.plugin, 
    {model:'products', field:'id', startAt: 1});
module.exports = mongoose.model('products', ProductsSchema)