const userRoutes = require('./userRoutes')

const routes = (app) => {
    app.use('/api/v1/users', userRoutes);
}

module.exports = routes