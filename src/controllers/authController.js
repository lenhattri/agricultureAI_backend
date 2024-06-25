const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET;

const googleAuth = async (req, res) => {
  const { user } = req.body;
  const { id, email, name } = user;

  // Kiểm tra xem người dùng đã tồn tại chưa
  let existingUser = await User.findOne({ email });
  let newUser = false;
  if (!existingUser) {
    // Tạo người dùng mới
    existingUser = new User({ googleId: id, email, name });
    await existingUser.save();
    newUser = true;
  }

  // Tạo JWT token
  const jwtToken = jwt.sign({ id: existingUser._id, email: existingUser.email, name: existingUser.name }, JWT_SECRET, { expiresIn: '1h' });
  res.json({ token: jwtToken, newUser });
};

module.exports = {
  googleAuth,
};
