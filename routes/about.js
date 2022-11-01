const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

// define the sbout page route
router.get('/', (req, res) => {
    res.send(`<div><h1>About page</h1><h2>This page is about</h2></div>`)
});

router.get('/me', (req, res) => {
    res.send([
        {
            id: "me",
            name: "Tasnim",
            message: "Hello",
        },
        {
            id: "not-me",
            name: "Intruder",
            message: "Bye",
        }
    ]);
})

module.exports = router;