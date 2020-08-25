const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require('crypto');
let Comment = require('./modals/comments');

const app = express();
app.use(bodyParser.json());

app.get('/posts/comments', (req, res) => {
	Comment.find()
		.then(comment => res.json(comment))
		.catch(err => res.status(400).json('Error: ' + err));
});

app.get('/posts/:id/comments', (req, res) => {
	Comment.findById(req.params.id || [])
		.then(comment => res.json(comment))
		.catch(err => res.status(400).json('Error: ' + err));
});

app.post("/posts/:id/comments", (req, res) => {
    const { content } = req.body;

    const newComment = new Comment({
        content,
    });
    

    newComment.save()
    .then(() => res.json(newComment))
    .catch((err) => res.status(400).json("Error: " + err));
    
  });

const PORT = 4000;

mongoose
  .connect(
    `mongodb+srv://seher:seher123@cluster0.si6tr.gcp.mongodb.net/miniblog?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    app.listen(PORT || 4000);
    console.log(`MongoDB has been connected and listening to Port ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
