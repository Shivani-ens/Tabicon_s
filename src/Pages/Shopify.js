// import env from 'dotenv'
import { useEffect } from "react";
import config from '../config'


const Shopify = () => {
  let { apiKey, scopes, redirectUri } = config;
  // const apiKey = process.env.API_KEY;
  // const scopes = process.env.API_SCOPES;
  // const redirectUri = process.env.REDIRECT_URI;
  let oAuthUrl = `https://blue-heavenn.myshopify.com/admin/oauth/authorize?apiKey=${apiKey}&scope=${scopes}&redirectUri=${redirectUri}&state=sasassa321dsad`;

  useEffect(() => {
    window.location.href = oAuthUrl;
  }, )

};
export default Shopify