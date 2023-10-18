const {Todomodel}=require('../model/task.model')




exports.gettasks=async(req,res)=>{
    const query=req.query
    try{
        if(query.todo){
            const data=await Todomodel.find({todo:{$regex:`${query.todo}`}})
            res.status(200).json({'msg':'Search tasks','todos':data})
        }else{
            const data=await Todomodel.find()
            res.status(200).json({'msg':'All tasks','todos':data})
        }
    }catch(err){
        console.log(err)
        res.status(400).json({'msg':'Error! tasks not found'})
    }
    
}

exports.addtask=async(req,res)=>{
    const data=req.body
    try{
        const todo=new Todomodel(data)
        await todo.save()
        res.status(200).json({'msg':'Task added successfully to database'})
    }catch(err){
        res.status(400).json({'msg':'Error while adding task'})
    }
}

exports.updatetask=async(req,res)=>{
    const data=req.body
    const id=req.params.todoid
    try{
        await Todomodel.findByIdAndUpdate({_id:id},data)
        res.status(200).json({'msg':'Task updated'})
    }catch(err){
        res.status(400).json({'msg':'Error to update task'})
    }
}

exports.deletetask=async(req,res)=>{
    const id=req.params.todoid
    try{
        await Todomodel.findByIdAndDelete({_id:id})
        res.status(200).json({'msg':'Task deleted successfully'})
    }catch(err){
        res.status(400).json({'msg':'Error to delete task'})
    }
}

