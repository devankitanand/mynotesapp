const mongoose = require('mongoose');

const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String,
        required : true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        required : true,
        ref: "User",
    }
},{
    timestamps:true,
});

const Note = mongoose.model("Notes" , notesSchema);
module.exports = Note;