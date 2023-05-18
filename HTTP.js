const http = require("http");

// Creates a server instance
const server = http.createServer((req, res) => {
  // Sets the status code to 200
  res.statusCode = 200;

  // For this line in particular, the "text/plain can be edited based on whatever you wish the date to be. it specifies the type of content that is being sent in the response body. In this example, text/plain sends it as plain text. So for example For JSON data, you can use 'application/json' as the content type. Or similarly, for JavaScript files, you can use 'application/javascript' "
  res.setHeader("Content-Type", "text/plain");

  // Sends the response body
  res.end("Hello, World!");
});

// Defines the port number
const port = 3000;

// Starts the server and listens for incoming connections. The empty parenthesis can be used to add aditional functionaity to the code. As an example, you can put error within the parenthesis to add a callback error if anything goes wrong.
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
