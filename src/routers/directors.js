import { Router } from "express";
import {
  getAllDirectors,
  getOneDirector,
  addDirector,
  putDirector,
  patchDirector,
  deleteDirector,
} from "./../controllers/index.js";

const directorsRouter = Router();

directorsRouter.get("/", getAllDirectors);
directorsRouter.get("/:id", getOneDirector);
directorsRouter.post("/", addDirector);
directorsRouter.put("/:id", putDirector);
directorsRouter.patch("/:id", patchDirector);
directorsRouter.delete("/:id", deleteDirector);

export default directorsRouter;
