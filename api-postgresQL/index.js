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
        database: 'studentApi',
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

//Get All Students
app.get('/students', async (request, response) => {
    try {
        const students = await pool.query("SELECT * FROM public.student ORDER BY id ASC")
        response.json(students.rows)
    } catch (error) {
        console.log(error)
    }
})

//Get Single User by Name
app.get('/student/:name', async(request, response) => {
   try {
    const name = request.params.name
    const students = await pool.query("SELECT * FROM public.student WHERE name = 'Shigaraki' ")
    response.json(students.rows)
   } catch (error) {
    console.log(error)
   }

})

//Add New Row
app.post('/student', async(request, response) => {
    try {
        const student = request.body
        const students = await pool.query("INSERT INTO public.student (id, name) VALUES (106, 'Asta')")
        response.send(`${students.name} has been added!`)
    } catch (error) {
        console.log(error)
    }
})

//Delete Row
app.delete('/student/:id', async(request, response) => {
    try {
        const id = request.params.id
        const students = await pool.query("DELETE FROM student WHERE id = 106")
        response.send(`${id} successfully removed from DB!`)
        } catch (error) {
        console.log(error)
        }
})

//#endregion

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})