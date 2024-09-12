const express = require('express');
const app = express();

// Route for the root URL ("/")
app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
});

// Route for "/hello"
app.get('/hello', (req, res) => {
    res.send('Hello');
});

app.listen(8000, () => {
    console.log('Server started at port 8000');
});
app.get('/alluser/:name'),(req,res)=>{
    try{
        let name=req.params.name
        res.send(name)

    }
    catch(err){
        res.send('ERR')
    }
})
//make user authentification
//HW: user ka naam,email address,password is correct or not(search about password hash)
