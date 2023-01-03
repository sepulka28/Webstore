const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/user.model')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://HestiaDB:HestiaDataBase@cluster0.bayltcb.mongodb.net/?retryWrites=true&w=majority');

app.listen(5000, () => {
  console.log("Server is running on port 5000")
})

app.post('/register', async (req, res) => {
  console.log(req.body);

  try {
    await User.create({
      name: req.body.name, 
      email: req.body.email,
      password: req.body.password
    })
  res.json({ status: "ok" })
  
} catch (err) {
  res.json({ status: "error", error: "Duplicate email" })
}})

app.post('/login', async (req, res) => {

    const user = await User.findOne({ 
      email: req.body.email, 
      password: req.body.password
    })

    if (user) {
      const token = jwt.sign({
        name: user.name,
        email: user.email
      }, 
      'xD456yhj'
      )

      return res.json({ status: "ok", user: token })

    } else {
      return res.json({ status: "error", user: false })
    }})

  




