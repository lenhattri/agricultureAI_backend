const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./src/config/db');
const routes = require('./src/routes/index')
const morgan = require('morgan')

const app = express();

// Connect to MongoDB
connectDB();
//request log
morgan(':method :url :status :res[content-length] - :response-time ms')
// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
routes(app)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
