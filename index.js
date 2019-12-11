//Require express
let express = require('express')

//Declare app variable
let app = express()

//Declare route
app.get('/', (req, res) => {
    res.send('<h1>STUB HOME PAGE</h1>')
})

//Listen on a port
app.listen(3000)