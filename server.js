/**
 * third party libraries
 */
const express = require('express');
const http = require('http');
const cors = require('cors');
const dotenv = require('dotenv');


// environment: development, staging, production
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
server.listen(process.env.PORT, () => {
  console.log(`server running in  mode & listening on port ${process.env.PORT}`);
 
});
