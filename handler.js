const AWS = require("aws-sdk");
const ses = new AWS.SES({ region: "us-west-2" });

module.exports.sendEmail = async (event) => {
  const queryParams = event.queryStringParameters || {};
  // select from the query parameters
  let { email, message, subject } = queryParams;

  message = message || "This is a message generated automaticaly from a Lambda function.";
  subject = subject || "Hello from Lambda";


  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Email is required"
      })
    };
  }

  // inside the `exports.handler.sendEmail` function, before the `return` statement
  const params = {
    Destination: {
      ToAddresses: ["aquino.axel@gmail.com"], // This should be your email address
    },
    Message: {
      Body: {
        Text: {
          Data: "This is a message generated automatically from a Lambda function.",
        },
      },
      Subject: {
        Data: "Hello from Lambda",
      },
    },
    Source: "aquino.axel@gmail.com", // This is the email listed in sender. Set it to your email for this practice
  };
  await ses.sendEmail(params).promise();
  // in the object that is `return`ed, replace the `body.message` property with `Email sent to ${params.Destination.ToAddresses}`

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Email sent to ${email} with subject ${subject} and a message ${message}`,
      input: event,
    }, null, 2),
  };

  return response;
};
