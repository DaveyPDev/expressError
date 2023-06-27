
const express = require('express')

const app = express() 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))




app.get('/', (req,res) => 
{
    res.send('homepage')

})

app.get('/dogs', (req, res) =>
 {
    console.log('You asked for the /DOGS')
    res.send('<h1> i is dawg woof</h1>')

 })

app.get('/dogs', (req, res) =>
 {
    console.log('You asked for the /DOGS')
    res.send('meows')

 })
 
 app.get('/chickens', (req,res) => 
 {
    res.send('boooock (get request)')
 })

app.post('/chickens', function createChicken(req,res)
{   
   
    res.send('you created a new chicken (not really)(post request)')
})




const greetings = {
    en: "hello",
    fr: 'bonjour',
    ic: 'halló',
    ja: 'konnichiwa'
  }

app.get("/greet/:language", (req, res) => 
{
    const lang = req.params.language
    const greeting = greetings[lang]
    if (!greeting) return res.send('invalid language')
    return res.send(greeting.toUpperCase())
})

app.get('/search', (req, res) => 
{
     const {term = 'piggies', sort = 'top'} = (req.query) 
     return res.send(`search page: term is: ${term}, sort is: ${sort}`)
})

app.get('/show-me-headers', (req,res) => 
{
    console.log(req.rawheaders)
    console.log(req.headers)
    res.send(req.headers)
})

app.get('/show-language', (req,res) =>
{
    const lang = req.headers['accept-language']
    res.send(`your language preference is: ${lang}`)
})

app.post('/register', (req,res) => 
{
    // console.log(req.body)
    res.send(req.body)
})


app.listen(3000, () => {
    console.log('Server running on port 3000')
})