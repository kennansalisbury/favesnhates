//Declare express router
let router = require('express').Router()

//Define the routes
router.get('/animals', (req, res) => {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['flamingo', 'penguin', 'lion']})
  });

router.get('/foods', (req, res) => {
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['pizza', 'tacos', 'french fries', 'sushi']})
})

// Make sure file is includable in other files
module.exports = router
