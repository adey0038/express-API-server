import { Router } from "express";
import {
  getAllMovies,
  getOneMovie,
  addMovie,
  deleteMovie,
} from "./../controllers/index.js";

const moviesRouter = Router({ mergeParams: true });

moviesRouter.get("/api/directors/:id/movies", getAllMovies);
moviesRouter.get("/api/directors/:id/movies/:mid", getOneMovie);
moviesRouter.post("/api/directors/:id/movies", addMovie);
moviesRouter.delete("/api/directors/:id/movies/:mid", deleteMovie);

export default moviesRouter;
