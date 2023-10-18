const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
const {taskRouter}=require('./routes/task.route')
const port=6060

const app=express()
app.use(cors())
app.use(express.json())
app.use('/task',taskRouter)


app.listen(port,()=>{
    mongoose.connect('mongodb+srv://manojmogal:manojmogal@cluster0.fsaeccn.mongodb.net/?retryWrites=true&w=majority')
    .then(()=>{
        console.log('Connected to database successfully')
    })
    .catch((err)=>{
        console.log('Database connection error')
    })
    console.log(`Server running on port ${port}`)
})