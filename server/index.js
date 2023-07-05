const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/user.model');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


app.use(express.json());
app.use(cors());

// read_my_mongo_password_from_file
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'password.txt');
const uri = fs.readFileSync(filePath, 'utf8');


mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });


app.listen(8000, () => {
  console.log("Server is running on port 8000")
})


app.post('/api/register', async (req, res) => {
	console.log(req.body)
	try {
		const newPassword = await bcrypt.hash(req.body.password, 10)
		await User.create({
			name: req.body.name,
			email: req.body.email,
			password: newPassword,
		})
		res.json({ status: 200 })

	} catch (err) {

		const userExists = await User.findOne({ email: req.body.email })
    if (userExists) return res.status(400).json({ error: "Email already exists" });

	}
})

app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})
	
	if (!user) {
		return res.status(400).json({ status: 'error', error: 'Invalid login' })
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	console.log(isPasswordValid)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'xD456yhj'
		)
		return res.json({ status: 'ok', user: token })
	} else {
		return res.status(400).json({ status: 'error', user: false })
	}
})

// app.post('/api/cart', async (req, res) => {
//   const { productId, userId } = req.body;

//   const cartProduct = new CartProduct({
//     product: productId,
//     user: userId
//   });

//   try {
//     const savedProduct = await cartProduct.save();
//     res.json(savedProduct);
//   } catch (err) {
//     console.error(err);
//     res.status(400).send('Error saving cart product');
//   }
// });

// app.post('/api/liked', async (req, res) => {
//   const { productId, userId } = req.body;
  
//   const likedProduct = new LikedProduct({
//     product: productId,
//     user: userId
//   });

//   try {
//     const savedProduct = await likedProduct.save();
//     res.json(savedProduct);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Error saving liked product');
//   }
// });

    


  




