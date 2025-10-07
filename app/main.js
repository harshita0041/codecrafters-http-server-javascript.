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

    let response;;
    if(path==="/"){
      response ="HTTP/1.1 200 OK\r\n\r\n";
    }else{
      response="HTTP/1.1 404 Not Found\r\n\r\n";
    }
    socket.write(response);
    })
 });

server.listen(4221, "localhost");
