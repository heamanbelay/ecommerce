const express = require("express");
const app = require("./app");
const PORT = 4000
const dotenv= require("dotenv");
// require("dotenv").config();

//const mongoose = require('mongoose')
const connectDatabase = require ("./db/Database.js");

//config

dotenv.config({
    path:"backend/config/.env"
})
 
//connect database

connectDatabase();

//create server
const server = app.listen(PORT,() =>{
    console.log(`Server is working on http://localhost:${PORT}`)
});
// Unhandled promise rejection if i did not write the mongo url directly, this code will be used
process.on("unhandledRejection", (err) =>{
    console.log(`Shutting down server for ${err.message}`);
    console.log(`Shutting down the server due to Unhandled promise rejection`);
    server.close(() =>{
        process.exit(1);
    })
})
// Handling uncaught Exception
process.on("uncaughtException",(err) =>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server for Handling uncaught Exception`);
})