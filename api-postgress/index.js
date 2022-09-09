const express = require('express')  
const bodyParser = require('body-parser')  
const app = express()  
const port =  5432 
app.use(bodyParser.json()) 
app.use( bodyParser.urlencoded({ extended:  true,  })  )

const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SchoolDB',
    password: '1234',
    port: 5432,
})

app.get('/',  (request, response)  =>  { 
    response.json(
	    { info:  'Node.js, Express, and Postgres API'  }
    )  
})

app.listen(port,  ()  =>  { 
    console.log(`App running on port ${port}.`)  
})