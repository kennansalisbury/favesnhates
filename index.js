//Require any needed modules
let express = require('express')
let layouts = require('express-ejs-layouts')

//Declare app variable
let app = express()

//Setting and middleware
app.set('view engine', 'ejs')
app.use(layouts)
app.use('/', express.static('static'))

//Declare route
app.get('/', (req, res) => {
    res.render('home')
})

//Include controllers (aka routers)
app.use('/faves', require('./controllers/faves'))
app.use('/hates', require('./controllers/hates'))

//Listen on a port
app.listen(3000)