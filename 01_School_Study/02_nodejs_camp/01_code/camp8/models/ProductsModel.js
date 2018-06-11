var mongoose = require('mongoose'); //의존성으로 mongodb를 사용하기 때문에 자동으로 mongodb를 사용한다.
var Schema = mongoose.Schema;
var autoincrement = require('mongoose-auto-increment');

// 생성된 필드명을 정한다. 
var ProductsSchema = new Schema({
    name : { //제품명
        type : String,
        required: [true, '제목은 입력해주세요']
    }, 
    thumbnail : String, // 이미지 파일명 
    price: Number, //가격
    description: String,
    created_at : { // 작성일
        type: Date,
        default: Date.now()
    },
    username: String //작성자 추가
    // etc: String,
});

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

// 1씩 증가하는 primary Key를 만든다
// model : 생성할 document 이름 
// field : primary key, startAt: 1부터 시작
ProductsSchema.plugin(autoincrement.plugin, 
    {model:'products', field:'id', startAt: 1});
module.exports = mongoose.model('products', ProductsSchema) //collection, schema