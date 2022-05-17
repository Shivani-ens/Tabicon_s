
import { useEffect } from "react";
import config from "../config"



const Shopify = () => {
  const { apiKey, scopes, redirect_uri } = config;
  // const scopes = process.env.REACT_APP_SCOPES;
  // const apiKey = process.env.REACT_APP_API_KEY;
  // const redirect_uri = process.env.REACT_APP_REDIRECT_URI
  const oAuthUrl = `https://blue-heavenn.myshopify.com/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirect_uri}&state=sasassa321dsad `;
 debugger

  useEffect(() => {
    window.location.href = oAuthUrl;
  
  },);
  return (
    <p> Redirect </p>
  );
}
export default Shopify

