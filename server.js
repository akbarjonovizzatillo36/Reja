const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://Alex:onajonim21$@cluster0.mljjnjd.mongodb.net/Reja?=Cluster0";


mongodb.connect(connectionString, {
    useNewUrlParser: true,
     useUnifiedTopology: true,
    },
   (err,client) => {
       if(err) console.log("ERROR on connection MongoDB");
       else {
          console.log("MongoDB connection succeed");
          module.exports = client;

          const app = require("./app");
          const server = http.createServer(app);
          let PORT = 3000;
          server.listen(PORT, function () {
          console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`

          );
        });

       }
    }
);

const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
  if(err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data)
  }
});


