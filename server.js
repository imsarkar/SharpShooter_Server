/**
 * third party libraries
 */
const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// environment: development, staging, production
var filePath = path.join(__dirname, 'SS_PUBG_Data.bin');
const content = fs.readFileSync(filePath)
dotenv.config();
const environment = process.env.NODE_ENV;

/**
 * express application
 */
const app = express();
const server = http.createServer(app);

// allow cross origin requests
// configure to only allow requests = require(certain origins
app.use(cors());


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/client/login',(req,res)=>{
   console.log('het')
    res.send({"expire_at":1999971463149693066,"key":"imsarkaar","token":"LJ4YPSW1J8IH595DTWWLR3YLYM"})
})

app.post('/client/login',(req,res)=>{
    console.log('het')
     res.send({"expire_at":1999971463149693066,"key":"imsarkaar","token":"LJ4YPSW1J8IH595DTWWLR3YLYM"})
 })
 content
 app.get('/client/download/OBZG6ZTJNRSV6USPKRPTAMJQGQ',(req,res)=>{
    console.log('het')
     res.send(content)
 })
 app.post('/client/download/OBZG6ZTJNRSV6USPKRPTAMJQGQ',(req,res)=>{
    console.log('het')
     res.send(content)
 })

server.listen(process.env.PORT, () => {
  console.log(`server running in  mode & listening on port ${process.env.PORT}`);
 
});
