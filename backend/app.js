const express = require('express')
const app = express()
const path= require('path')
const dotenv = require('dotenv')

app.use(express.json())


//importing all routes
const products = require('./routes/product')
const auth = require('./routes/auth')
const order = require('./routes/order')

app.use('/api/v1/',products)
app.use('/api/v1/',auth)
app.use('/api/v1/',order)

if(process.env.NODE_ENV !== 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
   
    // app.get('*',(req,res)=>{
    //     res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'));
    // })
}


module.exports = app
