const mongoose = require ('mongoose');

const User = new mongoose.Schema ({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true } 
},
  { collection: 'UserInfo' }
)

const model = mongoose.model('UserInfo', User);

module.exports = model;



