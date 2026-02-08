import express from "express";
import cors from "cors";
import directorsRouter from "./routers/directors.js";
import moviesRouter from "./routers/movies.js";

const app = express();
app.use(express.json()); //to parse our JSON body for POST requests
app.use(cors()); //add CORS headers on all routes

app.use("/api/directors", directorsRouter);
//handles router from directors api

app.use("/api/directors/:id/movies", moviesRouter);
//handles router from movies api

app.use("/api", (req, res) => {
  res.send("Server is active and running");
});

app.use((req, res) => {
  res.status(404).send("No Server!!!");
});

//http://localhost:3000/
const PORT = process.env.PORT ?? 4000;
app.listen(PORT, (err) => {
  if (err) {
    console.log("No server to run on!!!");
    return;
  }
  console.log(`Server listening on port ${PORT}`);
});
