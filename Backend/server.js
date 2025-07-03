/**
 * Sets up an Express server to handle API requests.
 * Loads environment variables from a .env file using dotenv.
 * Connects to a database using the db_connect module.
 * Defines routes for handling authentication requests.
 * @requires dotenv
 * @requires express
 * @requires ./src/config/db_connect
 * @requires ./src/routes/authRoute
 * @returns None
 */

require("dotenv").config();
const express = require("express");
require("./src/config/db_connect");
const cors = require("cors");

const authMiddleware = require("./src/middlewares/authMiddleware");

/**
 * Creates an Express application instance and sets the port based on the environment variable.
 * @returns {Express.Application} The Express application instance.
 */
const app = express();
const PORT = process.env.PORT;

/**
 * Mounts middleware to parse incoming request bodies before your handlers, available under the req.body property.
 * @param {Function} express.urlencoded - Middleware to parse URL-encoded data with the qs library.
 * @param {Object} { extended: true } - Options object that is passed to the urlencoded function.
 * @param {Function} express.json - Middleware to parse JSON payloads.
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

/**
 * Defines a route for the root URL that sends a response with an HTML heading.
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns None
 */

app.get("/", (req, res) => {
  res.send("<h1>Ready to Serve🚀</h1>");
});

/**
 * Mounts the authentication routes on the '/api/auth' path.
 * @param {string} '/api/auth' - The base path for the authentication routes.
 * @param {Object} require('./src/routes/authRoute') - The authentication route handler.
 * @returns None
 */

app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/organizers', require('./routes/organizerRoutes'));
app.use('/api/vendors', require('./routes/vendorRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/categories', require('./routes/categoryRoutes'));
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/reviews', require('./routes/reviewRoutes'));
app.use('/api/upload', require('./routes/uploadRoutes'));

/**
 * Start the server and listen on the specified port.
 * @param {number} PORT - The port number on which the server will listen.
 * @returns None
 */

app.listen(PORT, () => {
  console.log(`CUSTOMER-SERVER is listening at port ${PORT}`);
});
 