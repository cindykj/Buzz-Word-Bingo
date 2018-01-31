// import { error } from 'util';

const express = require ('express');
const app = express();
const router = express.Router();
const bodyParser = require ('body-parser');
const buzzWords = require ('./routes/buzzwords');
const PORT = process.env.PORT || 8080;

app.use(express.static('public')); //file dir

app.use(bodyParser.urlencoded({ extended: true })); //returns middleware that only parses urlencoded bodies and looks at reqs where content-type header matches type option

// Render index.html page
app.get(`/`, (req, res) => {
  res.sendFile(`index.html`);
});

// Retrieve all buzzwords
app.use(`/buzzwords`, buzzWords);

//






app.use((err, req, res, next) => {
  res.status(500).send(`Error: ${err.message}`)
});

app.listen(PORT, () => {
  // if (err) throw err;
  console.log(`Server listening on port ${PORT}`)
});