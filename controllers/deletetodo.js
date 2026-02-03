const todo = require("../models/todo");

exports.deletetodo = async (req, res) => {
    try {
        const {id} = req.params;
        await todo.findByIdAndDelete(id);

        res.json({
            success: true,
            message: "Todo deleted successfully"
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            meassage: "internal server error",
            error: err.message
        })
    }
}