const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    apiKey      : process.env.API_KEY,
    apiSecretKey: process.env.API_SECRET_KEY,
    scopes      : process.env.API_SCOPES,
    redirectUri : process.env.REDIRECT_URI,
};