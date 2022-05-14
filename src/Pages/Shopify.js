// import env from 'dotenv'
import { useEffect } from "react";



const Shopify = () => {
  // let { apiKey, scopes, redirectUri } = config;
  const apiKey = process.env.REACT_APP_SHOPIFY_API_KEY;
  const scopes = process.env.REACT_APP_SHOPIFY_API_SCOPES;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  
  let oAuthUrl = `https://blue-heavenn.myshopify.com/admin/oauth/authorize?apiKey=${apiKey}&scope=${scopes}&redirectUri=${redirectUri}&state=sasassa321dsad`;

  useEffect(() => {
    window.location.href = oAuthUrl;
  }, )

};
export default Shopify