const express = require('express');
const router = new express.Router();

router.use('/cars', require('./cars'));
router.use('/motorbikes', require('./motorbikes'));

router.get('/', function(req, res){
  res.json({date: "Welcome!"})
});

router.get('/about', function(req, res){
  res.json({data: "About page"})
})

module.exports = router;
