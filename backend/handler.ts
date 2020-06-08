import { APIGatewayProxyHandler } from "aws-lambda";
import "source-map-support/register";
import Stripe from "stripe";

const headers = {
  "Access-Control-Allow-Origin": "*",
};

const success = (body: any) => {
  return {
    statusCode: 200,
    headers: headers,
    body: JSON.stringify(body),
  };
};

const invalidRequest = () => {
  return {
    statusCode: 400,
    headers: headers,
    body: JSON.stringify({ errors: "Invalid Request" }),
  };
};

const internalServerError = (error: any) => {
  return {
    statusCode: 500,
    headers: headers,
    body: JSON.stringify({ errors: "Internal Server Error" }),
  };
};

export const hello: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message:
          "Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!",
        input: event,
      },
      null,
      2
    ),
  };
};

export const createSubscription: APIGatewayProxyHandler = async (
  event,
  _context
) => {
  if (!event.body) {
    return invalidRequest();
  }
  const body = JSON.parse(event.body);

  const token = body.token;
  const email = body.email;

  const stripe = new Stripe("YOUR-SECRET-KEY");

  const c = await stripe.customers.create({
    source: token,
    email: email,
  });

  console.info("c", c);

  const subscription = await stripe.subscriptions.create({
    customer: c.id,
    items: [{ price: "YOUR-PRICE-ID" }],
  });

  console.info("subscription", subscription);

  return success("OK");
};
