const NoteModel = require("../Models/NoteModel");

const createNote = async (req, res) => {
    const data = req.body;
    try{
        const model = new NoteModel(data);
        await model.save();
        res.status(201).json({message:'Note is created' , success: true});
    }catch(err){
        res.status(500).json({message:'Failed to create the note' , success:false});
    }
}


module.exports = {
    createNote,
   
}