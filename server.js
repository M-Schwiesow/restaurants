const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const PORT = 8000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, './public/dist')));

mongoose.connect('mongodb://localhost/products');
const Schema = mongoose.Schema;

const RestaurantSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Restaurant name is required.'], minlength: [3, 'Restaurant name must be three characters or longer.']},
  cuisine: {type: String, required: [true, "Please enter the restaurant's cuisine."], minlength: [3, 'Cuisine must be three characters or longer.']},
  reviews: [{type: Schema.Types.ObjectId, ref: 'Review'}]
}, {timestamps: true});
//use the createdAt property to time the disable button!

const ReviewSchema = new mongoose.Schema({
  name: {type: String, required: [true, 'Reviewer name is required.'], minlength: [3, 'Reviewer name must be at least three characters.']},
  stars: {type: Number, required: [true, 'Review must include a rating.'], min: [1, 'Review must be between 1 and 5 stars.'], max: [5, 'Review must be between 1 and 5 stars.']},
  content: {type: String, required: [true, 'Review must include a comment.'], minlength: [3, 'Review must be at least three characters.']},
  _restaurant: {type: Schema.Types.ObjectId, ref: 'Restaurant'} //one to many relationship with restaurants
}, {timestamps: true});

mongoose.model('Restaurant', RestaurantSchema);
const Restaurant = mongoose.model('Restaurant');

mongoose.model('Review', ReviewSchema);
const Review = mongoose.model('Review');

//get all
app.get('/eat', (req,res)=>{
  Restaurant.find({}, (err, rests)=>{
    if(err){
      res.send(err);
    } else {
      res.json(rests);
    }
  })
})
//get one
app.get('/eat/:id', (req,res)=>{
  Restaurant.findOne({_id:req.params.id}).populate({path:'reviews', options:{sort:{stars:-1}}}).exec((err,rest)=>{
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(rest);
    }
  })
})
//create Rest
app.post('/eat', (req,res)=>{
  Restaurant.create(req.body, (err, rest)=>{
    if(err){
      let errors=[];
      for(let index in err.errors){
        errors.push(err.errors[index].message);
      }
      console.log("errors from create", errors);
      res.json({message: 'error', errors: errors});
    } else {
      res.send(true);
    }
  })
})
//edit Rest by id
app.put('/eat/:id', (req,res)=>{

  const opts = { runValidators: true};

  Restaurant.findByIdAndUpdate(req.params.id, req.body, opts, (err, response)=>{
    if(err){
      let errors=[];
      for(let index in err.errors){
        errors.push(err.errors[index].message);
      }
      console.log(errors);
      res.json({message: 'error', errors: errors});
    } else {
      res.send(true);
    }
  })
})

//create review by Rest id
app.post('/eat/review/:id', (req,res)=>{
  Restaurant.findOne({_id:req.params.id}, (err, rest)=>{
    if(err){
      console.log("Error on create review, findOne", err);
      res.send(err);
    } else {
      let review = new Review(req.body);
      review._restaurant = rest._id;
      review.save((err, review)=>{
        if(err){
          let errors=[];
          for(let index in err.errors){
            errors.push(err.errors[index].message);
          }
          console.log("errors from create", errors);
          res.json({message: 'error', errors: errors});
        } else {
          rest.reviews.push(review);
          rest.save((err)=>{
            if(err){
              res.send(err);
            } else {
              res.send(true);
            }
          }) //rest.save
        }
      }) //review.save
    }
  }) //restaurant.findOne
})


//delete Rest by id
app.delete('/eat/:id', (req,res)=>{
  Restaurant.deleteOne({_id:req.params.id}, (err)=>{
    if(err){
      res.send(err);
    } else {
      res.send(true);
    }
  })
})


app.all('*', (req,res,next)=>{
  res.sendFile(path.resolve('./public/dist/index.html'));
})
app.listen(PORT, () => {
  console.log(`Server ready to rock on port ${PORT}.`);
})
