const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const colors = require('colors')
const db = require('./config/db')

//* Setup
app.use(express.json({extended:true}))
db()
app.listen(PORT, () => console.log(`Server running on port ${PORT}!`.white.bgBlue.bold))

//* Home endpoint
app.get('/', (req, res) => res.send('UNDER Compete Server'))

