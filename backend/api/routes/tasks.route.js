var express = require('express');

var taskController = require('../controllers/tasks.controller');

var router = express.Router();

//list user  
router.get('/',taskController.index);
// create
router.post('/',taskController.create);
// get id
router.get('/:id', taskController.get);
//delete
router.delete('/:id', taskController.delete);
//update
router.put('/:id', taskController.update);


module.exports = router;