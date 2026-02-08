import { Router } from "express";
import {
  getAllDirectors,
  getOneDirector,
  addDirector,
  deleteDirector,
} from "./../controllers/index.js";

const directorsRouter = Router();

directorsRouter.get("/api/directors", getAllDirectors);
directorsRouter.get("/api/directors/:id", getOneDirector);
directorsRouter.post("/api/directors", addDirector);
directorsRouter.delete("/api/director/:id", deleteDirector);

export default directorsRouter;
