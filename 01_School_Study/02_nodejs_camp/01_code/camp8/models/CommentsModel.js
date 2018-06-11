var mongoose = require('mongoose'); //의존성으로 mongodb를 사용하기 때문에 자동으로 mongodb를 사용한다.
var Schema = mongoose.Schema;
var autoincrement = require('mongoose-auto-increment');


var CommentsSchema = new Schema({
    content : String,
    created_at : {
        type : Date,
        default : Date.now()
    },
    product_id : {
        type : Number,
        index: true
    },
    

});

CommentsSchema.plugin(autoincrement.plugin, 
    {model: "comments", field: "id", startAt: 1});

module.exports = mongoose.model("comments", CommentsSchema)