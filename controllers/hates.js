//Declare express router
let router = require('express').Router()

//Define the routes
router.get('/animals', (req, res) => {
    res.render('hates/animals', {title: 'Don\'t like \'em', animals: ['snakes', 'spiders', 'rats']})
})

router.get('/foods', (req, res) => {
    res.render('hates/foods', {title: 'Don\'t like \'em', foods: ['asparagus', 'beets']})
})

// Make sure file is includable in other files
module.exports = router