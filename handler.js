const serverless = require("serverless-http");
const express = require("express");
const app = express();


module.exports.sendEmail = async (event) => {
  console.log('Received event:', event);

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',   

    }),
  };

  return response;
}


app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});





exports.handler = serverless(app);
