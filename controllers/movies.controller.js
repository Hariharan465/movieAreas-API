const Movie = require('../models/movies.model.js')

//Creating a movie
// /movies
const MovieCreate =  async (req , res) => {
    const newMovie = new Movie({
        title : req.body.title,
        description : req.body.description
    })
    try {
        const movie = await newMovie.save()
        res.status(201).json(movie)
    } catch (error) {
        res.status(400).json({error : error.message})
    }
}


//Reading all movies
const MovieIndex = async (req , res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}


///Reading a single movie
// /movies/:id
const MovieDetail = async (req , res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        if (!movie) {
            return res.status(404).json({message : "Movie not found"})
        }else{
            return res.status(200).json(movie)
        }
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

//Updating a movie
const MovieUpdate = async (req , res) => {

    try {
       const updatedMovie = await Movie.findOneAndUpdate({_id : req.params.id} , {
            title : req.body.title,
            description : req.body.description
        }, {
            new : true
        } 
    )
        return res.status(200).json(updatedMovie)
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

//Deleting a movie
const MovieDelete = async (req , res) => {
    const movieId = req.params.id

    try {
        await Movie.deleteOne({_id : movieId})
        res.json({message : "Movie Deleted!"})
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}

exports.MovieIndex = MovieIndex
exports.MovieDetail = MovieDetail
exports.MovieCreate = MovieCreate
exports.MovieUpdate = MovieUpdate
exports.MovieDelete = MovieDelete