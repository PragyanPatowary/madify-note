const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    noteName: {
        type: String,
        required:true
    },
    isDone:{
        type:Boolean,
        required:true
    }
});

const NoteModel = mongoose.model('notes' , NoteSchema);
module.exports = NoteModel;