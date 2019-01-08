const cookieParser = require("cookie-parser");

require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");

const db = require("./db");

const server = createServer();
//TODO use express middleware to handle cookes (JWT) and to populate current user
//anything between request and response
//authenticate, translate,

server.express.use(cookieParser());

//decode jwt so we can get the user Id on each request
server.express.unsubscribe((req, res, next) => {
  console.log("Heyyyyyyyyyyyyy");
  res.send("test");
});

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
