const express = require('express') 
const bodyParser = require('body-parser'); 

const app = express(); 
const port = 3000;

//Store Books
let books = [];


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
const book = req.body;

books.push(book); 
res.send('Book is added to the database');
});

app.listen(port, () =>  
	     console.log(`Hello world app listening on port ${port}!`)
	 );
     

//Getting All The Books

app.get('/books', (req, res) => { res.json(books); });

//Retriving Books by ID

app.get('/book/:id', (req, res) => { 
    
    // Reading idfrom the URL  
    const id = req.params.id;
    
    res.json(books[id]) 
});

//Deleting
app.delete('/book/:id', (req, res) => { 
    // Reading id from the URL  
    const id = req.params.id; 
    // Remove item from the books array 
    books = books.filter(i => { 
    if (i.id !== id) { 
        return  true; 
    } 
        return  false; 
    }); 
    res.send('Book is deleted'); 
});