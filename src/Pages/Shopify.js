import { useEffect } from "react";


const Shopify = () => {

  let scopes = 'read_orders,write_orders';
  let apiKey = 'b30f10c71e61650acf31a21c34420549';
  // let apiSecretKey = 'b8426d9b6134be55c49cc055ecaad5b3';
  let redirect_uri = 'https://tabicon.netlify.app/shopify/callback'
  let oAuthUrl = `https://blue-heavenn.myshopify.com/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirect_uri}&state=sasassa321dsad`;

  useEffect(() => {
    window.location.href = oAuthUrl;

  }, )

};
export default Shopify;