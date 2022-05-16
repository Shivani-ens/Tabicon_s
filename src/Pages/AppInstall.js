import React, { useEffect } from "react";


const AppInstall = () => {
  // let shop = {shop}
  const scopes = 'read_orders,write_orders';
  const apiKey = 'b30f10c71e61650acf31a21c34420549';
  const redirect_uri = 'https://tabicon.netlify.app/shopify/callback'
  const oAuthUrl = `https://blue-heavenn.myshopify.com/admin/oauth/authorize?client_id=${apiKey}&scope=${scopes}&redirect_uri=${redirect_uri}&state=sasassa321dsad `;
  console.log(apiKey,scopes,redirect_uri,oAuthUrl);
  debugger
  useEffect(() => {
    window.location.href = oAuthUrl;
  
  },)
  return (
    <p> Redirect </p>
  );
};

export default AppInstall;



