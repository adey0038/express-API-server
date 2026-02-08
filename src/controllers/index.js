import Directors from "./../models/directors.json" with { type: "json" };

//Directors
function getAllDirectors(req, res) {
  res.json({
    message: "All directors retrieved",
    directors: Directors,
  });
}

function getOneDirector(req, res) {}

function addDirector(req, res) {}

function putDirector(req, res) {}

function patchDirector(req, res) {}

function deleteDirector(req, res) {}

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
