import { Router } from "express";
import {
  getAllMovies,
  getOneMovie,
  addMovie,
  putMovie,
  patchMovie,
  deleteMovie,
} from "./../controllers/index.js";

const moviesRouter = Router({ mergeParams: true });

moviesRouter.get("/", getAllMovies);
moviesRouter.get("/:mid", getOneMovie);
moviesRouter.post("/", addMovie);
moviesRouter.put("/:mid", putMovie);
moviesRouter.patch("/:mid", patchMovie);
moviesRouter.delete("/:mid", deleteMovie);

export default moviesRouter;
