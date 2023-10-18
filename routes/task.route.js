const express=require("express")
const {gettasks,addtask,updatetask,deletetask}=require('../controllers/task')


const taskRouter=express.Router()

taskRouter.route('/gettasks').get(gettasks)
taskRouter.route('/addtask').post(addtask)
taskRouter.route('/updatetask/:todoid').patch(updatetask)
taskRouter.route('/deletetask/:todoid').delete(deletetask)

module.exports={taskRouter}
