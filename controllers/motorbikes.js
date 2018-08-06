const express = require('express');
const motorbikeRouter = new express.Router();

let motorbike1 = {make: "Triumph Bonneville", country: "UK", type: "Manual"};
let motorbike2 = {make: "Harley-Davidson Street", country: "UK", type: "Automatic"}
let motorbike3 = {make: "Kawasaki Ninja", country: "UK", type: "Manual"}
let motorbike4 = {make: "Hayabusa Turbo", country: "USA", type: "Manual"}
let motorbike5 = {make: "BMW K 1600 ", country: "Germany", type: "Automatic"}
let motorbikes = [motorbike1, motorbike2, motorbike3, motorbike4, motorbike5];




//INDEX
motorbikeRouter.get('/', function(req, res){
  res.json(motorbikes);
});

//SHOW
motorbikeRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data:motorbikes[index]});
});

// CREATE
motorbikeRouter.post('/', function(req, res){
  motorbikes.push(req.body.motorbike);
  res.json(motorbikes);
});

// UPDATE
motorbikeRouter.put('/:id', function(req, res){
  let index = req.params.id;
  motorbikes[index] = req.body.motorbike;
  res.json({data: motorbikes});
});

// DELETE
motorbikeRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  motorbikes.splice(index, 1);
  res.json(motorbikes);
});

module.exports = motorbikeRouter;
