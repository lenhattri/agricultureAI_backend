const jwt = require('jsonwebtoken');
const User = require('../models/user');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const googleAuth = async (req, res) => {
  
  const { user } = req.body;
  console.log(user)
  const { id, email, name: username } = user;

  // Kiểm tra xem người dùng đã tồn tại chưa
  let existingUser = await User.findOne({ email });
  let newUser = false;
  if (!existingUser) {
    // Tạo người dùng mới
    existingUser = new User({ googleId: id, email, username });
    await existingUser.save();
    newUser = true;
  }

  // Tạo JWT token
  const jwtToken = jwt.sign({ id: existingUser._id, email: existingUser.email, name: existingUser.username }, JWT_SECRET, { expiresIn: '30d' });
  res.json({ token: jwtToken, newUser, userId: existingUser._id });
};

module.exports = {
  googleAuth,
};
