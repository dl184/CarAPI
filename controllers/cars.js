const express = require('express');
const carRouter = new express.Router();

let car1 = {make: "Lamborghini", model: "Gelado", type: "Manual"};
let car2 = {make: "Ferrari", model: "Enzo", type: "Automatic"}
let car3 = {make: "Bugatti", model: "Veyron", type: "Manual"}
let car4 = {make: "McLaren", model: "720s", type: "Manual"}
let car5 = {make: "Noble ", model: "M600", type: "Automatic"}
let cars = [car1, car2, car3, car4, car5];

// INDEX
carRouter.get('/', function(req, res){
  res.json(cars);
});

//SHOW
carRouter.get('/:id', function(req, res){
  let index = req.params.id;
  res.json({data:cars[index]});
});

// CREATE
carRouter.post('/', function(req, res){
  cars.push(req.body.car);
  res.json(cars);
});

// UPDATE
carRouter.put('/:id', function(req, res){
  let index = req.params.id;
  cars[index] = req.body.car;
  res.json({data: cars});
});

// DELETE
carRouter.delete('/:id', function(req, res){
  let index = req.params.id;
  cars.splice(index, 1);
  res.json(cars);
})

module.exports = carRouter;
