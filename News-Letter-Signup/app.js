//jshint esversion: 6

const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const https = require("https");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/signup.html");
});

app.post('/', function (req, res) {
  // res.send('Hello World');
  const First_Name = req.body.firstName;
  const Last_Name = req.body.lastName;
  const Email_Address = req.body.emailAddress;

  const data = {
    members: [
      {
        email_address: Email_Address,
        status: "subscribed",
        merge_fields: {
          FNAME: First_Name,
          LNAME: Last_Name,
        }
      }
    ]
  }

  const jsonData = JSON.stringify(data);

  const url = "https://us5.api.mailchimp.com/3.0/lists/241c730189"

  const options = {
    method: "POST",
    auth: "jayitis:af006c575d1413d79ac94da1edd8494b1-us5"
  }
  
  const request = https.request(url, options, function(response){
    
    if(response.statusCode === 200){
        res.sendFile(__dirname + "/sucess.html");
    
    } else{
      res.sendFile(__dirname + "/failure.html");
    }
    
    response.on("data", function(data){
      console.log(JSON.parse(data));
    })
  })

  request.write(jsonData);
  request.end();
});

app.post("/failure", function(req,res){
  res.redirect("/");
})

app.listen(22, function () {
    console.log("GO TO 3000");  
});

//Port for heroku
//process.env.PORT || 3000

//API Key
//f006c575d1413d79ac94da1edd8494b1-us5

//List ID
//241c730189
