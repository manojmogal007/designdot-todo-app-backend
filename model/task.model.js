const mongoose=require("mongoose")


const todoschema=mongoose.Schema({
    todo:String,
    isCompleted:Boolean
},{
    versionKey:false
})

const Todomodel=mongoose.model("task",todoschema)

module.exports={
    Todomodel
}