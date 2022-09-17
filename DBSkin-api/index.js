//import module/libraries
const express = require('express')
const parser = require('body-parser')
const Pool = require('pg').Pool

//initialize 
const app = express()
app.use(express.json())
const port = 3000
const pool = new Pool(
    { 
        user: 'postgres',
        host: 'localhost',
        database: 'dSkin',
        password: '1234',
        port: 5432
    }
)

//#region api section

//Home
app.get('/',(request, response) => {
    response.json(
        { 
        info : 'Hello I am a Backend Developer Now!'
    }
    )
})

//Get All Skin
app.get('/skins', async (request, response) => {
    try {
        const students = await pool.query("SELECT * FROM public.skin ORDER BY id ASC")
        response.json(students.rows)
    } catch (error) {
        console.log(error)
    }
})

//Get All Devices
app.get('/devices', async (request, response) => {
    try {
        const devices = await pool.query("SELECT * FROM public.device ORDER BY id ASC")
        response.json(devices.rows)
    } catch (error) {
        console.log(error)
    }
})

//Get All Skins and Devices
app.get('/skin', async (request, response) => {
    try {
        const students = await pool.query("SELECT * FROM public.skin ORDER BY id ASC")
        response.json(students.rows)
    } catch (error) {
        console.log(error)
    }
})

//#endregion

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})