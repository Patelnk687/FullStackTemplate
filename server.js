const express =require('express')
const app= express()
const cors = require('cors')
const MongoClient =require('mongodb').MongoClient

require('dotenv').config()


let db,
    dbConnectionString = process.env.DB_STRING,
    dbName='ntalk',                                          //change name here
    collection


MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to Database')
        db = client.db(dbName)
        collection = db.collection('chat')                  //change name here
    })

app.set('view engine','ejs')                                //helps create HTML
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())



    //PORT = 8000
app.listen(process.env.PORT || PORT, () =>{
    console.log(`Server is running on port`)
}) 