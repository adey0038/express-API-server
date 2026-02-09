import { Router } from "express";
import { directorController } from "./../controllers/index.js";
import { validateDirector, isAuth } from "./../services/index.js";

const directorsRouter = Router();

directorsRouter.get("/", directorController.getAllDirectors);
directorsRouter.get("/:id", directorController.getOneDirector);
directorsRouter.post(
  "/",
  isAuth,
  validateDirector,
  directorController.addDirector,
);
directorsRouter.put(
  "/:id",
  isAuth,
  validateDirector,
  directorController.putDirector,
);
directorsRouter.patch(
  "/:id",
  isAuth,
  validateDirector,
  directorController.patchDirector,
);
directorsRouter.delete("/:id", directorController.deleteDirector);

export default directorsRouter;
