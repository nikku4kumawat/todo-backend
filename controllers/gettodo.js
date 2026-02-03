const todo = require("../models/todo");

exports.gettodos = async (req, res) => {
    try{
        const todos = await todo.find();

        res.status(200).json({
                success: true,
                data: todos,
                message: "todos fetched successfully"
    });
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: err.message
        });
    }
};

exports.gettodobyid = async (req, res) => {
    try{
        const id = req.params.id;
        const todoData = await todo.findById({_id: id});

        if(!todoData){
            return res.status(404).json({
                success: false,
                message: "todo not found"
            });
        }
        res.status(200).json({
            success: true,
            data: todoData,
            message: "todo fetched successfully",
        });
    }catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            message: "internal server error",
            error: err.message
        });
    }
}