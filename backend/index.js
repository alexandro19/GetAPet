const express = require('express')
const cors    = require('cors')

const app = express()

//Config JSON response
app.use(express.json())

//Solve CORS
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

//public folder for images
app.use(express.static('public'))

//Routes
const UserRoutes = require('./routes/UserRoutes')

app.use('/users', UserRoutes)

app.listen(5000, () => {
  console.log('Servidor rodando na porta 5000')  

})



