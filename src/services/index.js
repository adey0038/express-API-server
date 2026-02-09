// Validate Director
function validateDirector(req, res, next) {
  const { name, movies } = req.body;

  if (!name || typeof name !== "string") {
    res.status(488).json({ message: "Invalid director. Name is required" });
  }
  if (movies && !Array.isArray(movies)) {
    res
      .status(488)
      .json({ message: "Invalid director. Movies must be an array" });
  } else {
    req.isValidated = true;
    next();
  }
}

// Validate Movie
function validateMovie(req, res, next) {
  const { title } = req.body;

  if (!title || typeof title !== "string") {
    res.status(488).json({ message: "Invalid movie. Title is required" });
  } else {
    req.isValidated = true;
    next();
  }
}

function isAuth(req, res, next) {
  const header = req.header("X-token");
  if (!header) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    next();
  }
}

export { validateDirector, validateMovie, isAuth };
