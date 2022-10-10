let express = require("express");
let bodyparser = require("body-parser");
let cors = require("cors");
let app = express();

global.__basedir = __dirname;

var corsOptions = {
    origin: "http://localhost:8081"
  };

app.use(cors());

const initRoutes = require("./routes");

app.use(bodyparser.json()); 
app.use(bodyparser.urlencoded({extended:false}));

initRoutes(app);

app.use("/login",require("./login/login"));
app.use("/home",require("./home/home"));
app.use("/logout",require("./logout/logout"));



app.listen(8080);
console.log("server listening the port no.8080");