const http = require("http");

// http module : 
// It is an inbuilt module in JS which helps you to create the server. and receive the information from the front end application and send some response to the front end application.


//creating a server
http.createServer(function (request, response) {
    // response.write("Hello World");
    // response.write("<h1>Hello</h1>");

    let user = {name: "Deepak", age: "23"};
    response.write(JSON.stringify(user));


    //closing the server
    response.end();
}).listen(3000)
