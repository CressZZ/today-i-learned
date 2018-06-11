var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');


var ContactsSchema = new Schema({
    title: {
        type : String,
        required: [true, '제목은 필수 입니다. ']
    },
    username : {
        type : String,
        required: [true, '아이디는 필수입니다.']
    },
    content: String,
    created_at : { // 작성일
        type: Date,
        default: Date.now()
    },
    // etc: String,
});

// object create 의 get과 set과 비슷함
// set은 변수의 값을 바꾸거나 셋팅하면 호출
// get은 detDate 변수를 호출하는 순간 날짜 월일이 찍힌다. 
ContactsSchema.virtual('getDate').get(function(){
    var date = new Date(this.created_at);
    return{
        year : date.getFullYear(),
        month : date.getMonth(),
        day : date.getDate() 
    }
})

ContactsSchema.plugin( autoIncrement.plugin , { model : "contacts", field : "id" , startAt : 1 } );
module.exports = mongoose.model('contacts' , ContactsSchema);