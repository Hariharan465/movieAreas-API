const { Schema, model, default: mongoose } = require("mongoose");

//write the schema
const movieSchema = new Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    description : {
        type : String,
        required : true,
    }
})

//create your model
const Movie = mongoose.model("Movie" , movieSchema)
module.exports = Movie