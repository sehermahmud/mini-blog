const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
let Post = require("./models/post");

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', (req, res) => {
	Post.find()
		.then(post => res.json(post))
		.catch(err => res.status(400).json('Error: ' + err));
});

app.post("/posts", (req, res) => {
  const { title } = req.body;

  const newPost = new Post({
    title,
  });

  newPost
    .save()
    .then(() => res.json(newPost))
    .catch((err) => res.status(400).json("Error: " + err));
});

const PORT = 5000;

mongoose
  .connect(
    `mongodb+srv://seher:seher123@cluster0.si6tr.gcp.mongodb.net/miniblog?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
  )
  .then(() => {
    app.listen(PORT || 5000);
    console.log(`MongoDB has been connected and listening to Port ${PORT}`);
  })
  .catch((err) => {
    console.log(err);
  });
