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
directorsRouter.put("/:mid", putDirector);
directorsRouter.patch("/:mid", patchDirector);
directorsRouter.delete("/:id", deleteDirector);

export default directorsRouter;
