const express = require('express');
// const ExpressError = require('./expressError')

const app = express();

function attemptToSaveToDB() {
  throw "Connection Error!"
}

const USERS = [
  { username: "StacysMom", city: "Reno" },
  { username: "Rosalia", city: "R" },
]

app.get("/users/:username", function (req, res, next) {
  try {
    const user = USERS.find(u => u.username === req.params.username);
    if (!user) throw new ExpressError("invalid username", 404)
    return res.send({ user })
  } catch (e) {
    next(e)
  }
})
// app.get("/users/:username", function (req, res, next) {
//     const user = USERS.find(u => u.username === req.params.username);
//     if (!user) return res.status(404).send('Not Found')
//       return res.send({ user }) 
// })

// app.get("/secret", (req, res, next) => {
//   try {
//     if (req.query.password != 'popcorn') {
//       throw new ExpressError("invalid password", 403)
//     }
//     return res.send("CONGRATS YOU KNOW THE PASSWORD");
//   } catch (e) {
//     next(e)
//   }
// })
app.get("/secret", (req, res, next) => {
  if (req.query.password != 'popcorn') {
    return res.status(403).send('invalid password')
  }
  return res.send("CONGRATS YOU KNOW THE PASSWORD");
})

app.get('/savetodb', (req, res, next) => {
  try {
    attemptToSaveToDB()
    return res.send("SAVED TO DB!")
  } catch (e) {
    return next(new ExpressError("Database Error"))
  }
})
// app.get('/savetodb', (req, res, next) => {
//   attemptToSaveToDB()
//   return res.send("SAVED TO DB!")
// })




app.listen(3000, () => {
  console.log("Server running on port 3000")
});