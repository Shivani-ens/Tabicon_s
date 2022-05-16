// import dotenv from "dotenv"
// dotenv.config()
const index=()=>{};
export default index ({
    apiKey     : process.env.REACT_APP_API_KEY,
    secretKey : process.env.REACT_APP_API_SECRET_KEY,
    scopes    : process.env.REACT_APP_API_SCOPES,
    redirectUri : process.env.REACT_APP_REDIRECT_URI,
});
