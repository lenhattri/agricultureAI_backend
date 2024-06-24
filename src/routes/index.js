const authenticateToken = require('../utils/authenticateToken');
const userRoutes = require('./userRoutes')

const routes = (app) => {
    app.use('/api/v1/users', authenticateToken, userRoutes);
}

module.exports = routes