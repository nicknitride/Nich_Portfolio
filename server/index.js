/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const mysql = require("mysql");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3003;

const db = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"nickwuzhere",
        database:"portfolio_nick",
        timezone: 'utc'
    }
)
app.use(cors());
app.use(express.json());

// Get Home Articles
app.get("/home/articles",(req,res)=>{
    const getArticlesSQL = `
    SELECT * FROM home_content LIMIT 3;
    `
    db.query(getArticlesSQL, (err, result)=>{
        if(err){
            console.log(err);
        }
        else
        console.log("Returned home articles",result);
        res.send(result);
    })  
}
)



app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})