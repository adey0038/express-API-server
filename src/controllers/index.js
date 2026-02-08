import Directors from "./../models/directors.json" with { type: "json" };

//Directors
function getAllDirectors(req, res) {
  res.json({
    message: "All directors retrieved",
    directors: Directors,
  });
}

function getOneDirector(req, res) {
  let director = Directors.find((d) => d.id === req.params.id);
  if (director) {
    res.json({
      message: "Found matching director",
      director,
    });
  } else {
    res.status(404).json({
      message: `Director with id ${req.params.id} not found`,
    });
  }
}

function addDirector(req, res) {
  let d = {
    id: crypto.randomUUID(),
    name: req.body.name,
    movies: [],
  };
  Directors.push(d);
  res.status(201).json({
    message: "Added one director",
    director: d,
  });
}

function putDirector(req, res) {
  let director = Directors.find((d) => d.id === req.params.id);
  if (director) {
    director.name = req.body.name;
    res.json({ message: "Replaced director", director });
  } else {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }
}

function patchDirector(req, res) {
  let dir = Directors.find((d) => d.id === req.params.id);
  if (dir) {
    if (req.params.id) {
      dir.name = req.body.name;
    }
    res.json({ message: "Directors updated", dir });
  } else {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }
}

function deleteDirector(req, res) {
  let index = Directors.findIndex((d) => d.id === req.params.id);
  if (index !== -1) {
    Directors.splice(index, 1);
    res.json({ message: "Director deleted" });
  } else {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }
}

//Movies

function getAllMovies(req, res) {}

function getOneMovie(req, res) {}

function addMovie(req, res) {}

function deleteMovie(req, res) {}

function putMovie(req, res) {}

function patchMovie(req, res) {}

export {
  getAllDirectors,
  getOneDirector,
  addDirector,
  putDirector,
  patchDirector,
  deleteDirector,
  getAllMovies,
  getOneMovie,
  addMovie,
  putMovie,
  patchMovie,
  deleteMovie,
};
