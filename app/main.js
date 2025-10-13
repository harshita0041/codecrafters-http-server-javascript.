const net = require("net");

// You can use print statements as follows for debugging, they'll be visible when running tests.
console.log("Logs from your program will appear here!");

function getPath(request) {
  const path = request.split(" ")[1];
  return path;
}

// Uncomment this to pass the first stage
const server = net.createServer((socket) => {
   
  socket.on("data",(data)=>{
    const request =data.toString();
    console.log(request);

    const path =getPath(request);
    console.log(path);

    let response;
    if(method =="GET" && path ==="/"){
      response ="HTTP/1.1 200 OK\r\n\r\n";
    }else if(path.startsWith("/echo")){
      const body =path.slice(6);
      const headers =
      `Content-Type: text/plain\r\n` +
      `Content-Length: ${body.length}\r\n\r\n`;
       response =`HTTP/1.1 200 OK\r\n`+ headers + body;
    }else{
      response ="HTTP/1.1 404 Not Found\r\n\r\n";
    }

    socket.write(response);
  });

  socket.on("close",()=>{
    socket.end();
  });
  });

  server.listen(4221,"localhost");
