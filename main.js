const express = require('express')
const movieRout = require('./routes/movies.route.js')
const connectDB = require('./lib/db.js')

const app = express()
const PORT = 3000

//Data understanding middleware
app.use(express.json())

//connect DB
connectDB()

app.get('/' , (req , res) => {
    res.json({ message : "Hello World" })
})

//CRUD functionality of movies
//CLIENT -> MIDDLEWARE -> SERVER
app.use('/movies', movieRout)

app.listen(PORT , () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
})