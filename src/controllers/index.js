import Directors from "./../models/directors.json" with { type: "json" };

function getAllDirectors(req, res) {
  console.log(req.isDirectorRequest);
  res.json({ results: Directors });
}

function getOneDirector(req, res) {}

function addDirector(req, res) {}

function deleteDirector(req, res) {}

function getAllMovies(req, res) {}

function getOneMovie(req, res) {}

function addMovie(req, res) {}

function deleteMovie(req, res) {}
export {
  getAllDirectors,
  getOneDirector,
  addDirector,
  deleteDirector,
  getAllMovies,
  getOneMovie,
  addMovie,
  deleteMovie,
};
