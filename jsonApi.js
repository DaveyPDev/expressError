const express = require('express');

const app = express();

// To parse http request body on each request:
app.use(express.json()); //For JSON
// app.use(express.urlencoded({ extended: true })); //For Form Data


const candies = [
    {name: 'snickers', qty: 43, price: 1.50},
    {name: 'kit-kat', qty: 25, price: 0.99}
]

app.get('/candies', (req, res)  => 
{
    return res.json(candies)
})

app.post('/candies', (req, res) => 
{   
    if(req.body.name.toLowerCase() === 'circus peanuts')
    {
        res.status(403).json({ msg: 'No nuts for you'})
    }
    candies.push(req.body) 
    res.status(201).json(candies)
})



app.listen(3000, () => {
    console.log('Server running on port 3000')
})