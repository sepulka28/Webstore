const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const User = require('./models/user.model');
const bcrypt = require('bcrypt');


app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://HestiaDB:HestiaDataBase@cluster0.bayltcb.mongodb.net/?retryWrites=true&w=majority');

app.listen(5000, () => {
  console.log("Server is running on port 5000")
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
		res.json({ status: 'ok' })
	} catch (err) {
		res.json({ status: 'error', error: 'Duplicate email' })
	}
})


app.post('/api/login', async (req, res) => {
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
		return { status: 'error', error: 'Invalid login' }
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

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
		return res.json({ status: 'error', user: false })
	}
})
    


  




