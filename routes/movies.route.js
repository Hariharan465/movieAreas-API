const express = require('express')
const { MovieIndex, MovieCreate, MovieUpdate, MovieDelete , MovieDetail } = require('../controllers/movies.controller.js')

const router = express.Router()


//R - For Reading 
router.get('/', MovieIndex )

router.get('/:id' , MovieDetail )

//C - For Creating movies
router.post('/' , MovieCreate )

//U - For Updating movies
router.put('/:id' , MovieUpdate )

//D - For Deleting movies
router.delete('/:id' , MovieDelete)

exports = router
module.exports = router