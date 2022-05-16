
import { useEffect } from "react";
// import config from "../config"



const Shopify = () => {
  // const { apiKey, scopes, redirectUri } = config;
  const apiKey = process.env.REACT_APP_API_KEY;
  const scopes = process.env.REACT_APP_API_SCOPES;
  const redirectUri = process.env.REACT_APP_REDIRECT_URI;
  debugger
  const oAuthUrl = `https://blue-heavenn.myshopify.com/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirectUri=${redirectUri}&state=sasassa321dsad `;
 
  useEffect(() => {
    window.location.href = oAuthUrl;
  
  },);
  return (
    <p> Redirect </p>
  );
}
export default Shopify

