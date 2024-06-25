const authenticateToken = require('../utils/authenticateToken');
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')
const routes = (app) => {
    app.use('/api/v1/users',authenticateToken, userRoutes);
    app.use('/api/v1/auth',  authRoutes);
}

module.exports = routes