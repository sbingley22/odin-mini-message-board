var express = require('express');
const { render } = require('../app');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

// GET new message form
router.get('/new', (req, res, next) => {
  res.render("form", { title: 'New Message'})
})

router.post('/new', (req, res, next) => {
  messages.push({text: req.body.message, user: req.body.author, added: new Date()})
  res.redirect('/')
})

module.exports = router;
