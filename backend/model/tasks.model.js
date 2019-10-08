var mongoose = require('mongoose') ;


var taskSchema = new mongoose.Schema({
    name : String,
    email : String ,
    level : String ,

});

var task = mongoose.model('tasks', taskSchema);

module.exports = task ;