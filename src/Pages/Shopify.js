import { useEffect } from "react";


const Shopify = () => {

  let scopes = 'read_orders,write_orders';
  let apiKey = process.env.React_App_SHOPIFY_API_KEY;
  // let apiSecretKey = 'process.env.React_App_SHOPIFY_API_SECRET_KEY';
  let redirect_uri = 'https://tabicon.netlify.app/shopify/callback'
  let oAuthUrl = `https://blue-heavenn.myshopify.com/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirect_uri}&state=sasassa321dsad`;

  useEffect((e) => {
    e.preventDefault();
    window.location.href = oAuthUrl;

  }, )

};
export default Shopify;