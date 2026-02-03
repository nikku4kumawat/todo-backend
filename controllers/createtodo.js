//import todo model
const todo = require('../models/todo');

exports.createtodo = async(req,res) => {
    try{
        const {title, description} = req.body;

        const response = await todo.create({title, description});

        res.status(200).json(
            {
                success: true,
                data: response,
                message: "entry created successfully"

        });

    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500)
        .json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}


