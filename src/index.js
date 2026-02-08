import express from "express";
import cors from "cors";
import directorsRouter from "./routers/directors.js";
import moviesRouter from "./routers/movies.js";

app.use(express.json()); //to parse our JSON body for POST requests
app.use(cors()); //add CORS headers on all routes
