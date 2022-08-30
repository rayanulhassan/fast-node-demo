const express = require('express');
const app = express();
app.use(express.json()) // adding a middleware to parse body of json type incoming from client requests

let array = [];

app.get('/getcall',(req,res) => {
    res.send('Hello from the server');
});
app.post('/add',(req,res) => {
    let name = req.body.name;
    array.push(name);
    res.send(array);
});

// app.put();
// app.delete();

app.listen(3000,() => {
    console.log('Server running in port 3000...');
});