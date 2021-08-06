process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
const axios = require("axios");

const cookie =
  "express:sess=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJall4TURNME1tTXpNak5qTW1SaE1EQXhaamhsTmpsaVpTSXNJbVZ0WVdsc0lqb2lkR1Z6ZERGQVoyMWhhV3d1WTI5dElpd2lhV0YwSWpveE5qSTNOakV3TVRFeGZRLlZ2T01VM2NHbHA0NWRJN2pIM293aW4zZ1JtTHBvZGp5UnlzRjZCaDJ5bXMifQ==";

const doRequest = async () => {
  const { data } = await axios.post(
    `https://ticketing.dev/api/tickets`,
    { title: "ticket", price: 5 },
    {
      headers: { cookie },
    }
  );

  await axios.put(
    `https://ticketing.dev/api/tickets/${data.id}`,
    { title: "ticket", price: 10 },
    {
      headers: { cookie },
    }
  );

  axios.put(
    `https://ticketing.dev/api/tickets/${data.id}`,
    { title: "ticket", price: 15 },
    {
      headers: { cookie },
    }
  );

  console.log("Request complete");
};

(async () => {
  for (let i = 0; i < 400; i++) {
    doRequest();
  }
})();
