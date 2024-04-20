const Note = require("../models/notesModel");

const getNotes = async(req,res)=>{
    
    const notes = await Note.find({user: req.user._id});
    res.json(notes);
};
const createNote = async(req,res)=>{
    const {title , content} = req.body;
    if(!title || !content){
        res.status(400);
        throw new Error("Please fill all fields")
    }else{
        const note = new Note({ user: req.user._id, title,content});
        const createdNote = await note.save();
        res.status(201).json(createdNote);
        
    }
};

const getnotesbyid = async(req,res)=>{
        try {
            const note = await Note.findById(req.params.id);
            if(note){
                res.json(note);
            }else{
                res.status(404).json({message: "not found"})
            }
        } catch (error) {
            console.log(error);
        }
}

const updatenotes = async(req,res) =>{
    const {title , content} = req.body;
        const note = await Note.findById(req.params.id)
        
        if(note){
            if(note.user.toString() !== req.user._id.toString()){
                res.status(401).json({message : "Restricted Action"});
            }
            note.title = title;
            note.content = content;
            const updatednote = await note.save();
            res.json(updatednote);
        }else{
           res.status(404); 
        }
}

const deletenote = async(req,res)=>{
    const note = await Note.findById(req.params.id);
    if(note){
        if(note.user.toString() !== req.user._id.toString()){
           return res.status(401).json({message : "Restricted Action"});
        }
        // console.log(note);
        await note.deleteOne();
        // res.json(note)
        res.status(200);
    }else{
       res.status(404); 
    }
}

module.exports = {getNotes , createNote , getnotesbyid , updatenotes,deletenote};