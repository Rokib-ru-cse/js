// const 

// module.exports.gettodoscontroller  = (req,res)=>{
    
// }

// const TODO = require('../model/todos');

// module.exports.todosgetcontroller = async (req,res)=>{
    

//     try{
//         const alltodos = await TODO.find();
//         res.send(alltodos);
//     }catch(err){
//         console.log(err)
//     }

// }
// module.exports.todospostcontroller = async (req,res)=>{
//     const newtodos = new TODO(req.body);
//     await newtodos.save();
//     res.send(newtodos);
// }







const TODO = require('../model/todos');

module.exports.gettodoscontroller = async (req,res)=>{
    try{
        const alltodos = await TODO.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).send(alltodos);
    }catch(err){
        res.send(err);
    }
}

module.exports.gettodocontroller = async (req,res)=>{
    try{
        const id = req.params.id;
        const todo = await TODO.findById(id);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(todo);
    }catch(err){
        res.send(err);
    }
}

module.exports.createtodocontroller = async (req,res)=>{
    try{
        const todo = new TODO(req.body);
        await todo.save();
        // res.header("Access-Control-Allow-Origin", "*");
        res.send(todo);
         
    }catch(err){
        res.send(err);
    }
}

module.exports.updatetodocontroller = async (req,res)=>{
    try{
        const id = req.params.id;
        let todo = TODO.findById(id);
        await todo.updateOne(req.body);
        res.header("Access-Control-Allow-Origin", "*");
        res.send(todo);
    }catch(err){
        res.send(err);
    }
}

module.exports.deletetodocontroller = async (req,res)=>{
    try{
        const id = req.params.id;
        const todo = await TODO.findById(id);
        todo.delete();
        res.header("Access-Control-Allow-Origin", "*");
        res.send('task deleted successfully')
    }catch(err){
        res.send(err);
    }
}


