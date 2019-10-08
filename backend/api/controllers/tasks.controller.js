
var Task = require('./../../model/tasks.model');
module.exports.index = async function (req, res) {
    //response.send("tasks list");
    const tasks = await Task.find({});
    res.json(tasks);
}

module.exports.create = async function (req , res){
    const task = await Task.create(req.body);
    res.json(task);  
}

module.exports.get = async function ( req , res) {
    const _id = req.params.id ;
    const task = await Task.findById({_id});
    res.json(task);
}

module.exports.delete = async function(req, res){
    //gửi yêu cầu lấy id .
    const _id = req.params.id;
    const task = await Task.remove({_id});
    //trả kq về
    res.json(task);
}
module.exports.update = async function(req  ,res) {
    const _id = req.params.id ;
    const task = await Task.findOneAndUpdate({_id}, req.body);
    res.json(task);
}


