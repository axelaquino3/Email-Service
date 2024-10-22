const serverless = require("serverless-http");
const express = require("express");
const app = express();


exports.sendEmail = async (event) => {
  console.log('Received event:', event);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',   

    }),
  };

  return response;
}


