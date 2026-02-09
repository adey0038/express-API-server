import { Router } from "express";
import { movieController } from "./../controllers/index.js";
import { validateMovie, isAuth } from "./../services/index.js";

const moviesRouter = Router({ mergeParams: true });

moviesRouter.get("/", movieController.getAllMovies);
moviesRouter.get("/:mid", movieController.getOneMovie);
moviesRouter.post("/", isAuth, validateMovie, movieController.addMovie);
moviesRouter.put("/:mid", isAuth, validateMovie, movieController.putMovie);
moviesRouter.patch("/:mid", isAuth, validateMovie, movieController.patchMovie);
moviesRouter.delete("/:mid", movieController.deleteMovie);

export default moviesRouter;
