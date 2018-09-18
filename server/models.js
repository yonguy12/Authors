
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/authors',{useNewUrlParser:true},(err)=>console.log(err?err:"db gucci"));

const AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3
        
    },
    quote: {
        type: String,
        minlength: 3
    }


},{timestamps:true})



module.exports = mongoose.model('Author', AuthorSchema);