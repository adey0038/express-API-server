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
    message: "Director added",
    director: d,
  });
}

function putDirector(req, res) {
  let index = Directors.findIndex((d) => d.id === req.params.id);
  if (index < 0) {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }
  const newDirector = {
    id: Directors[index].id,
    name: req.body.name ?? "",
    movies: req.body.movies ?? [],
  };
  Directors[index] = newDirector;
  res.json({ message: "Replaced director", director: Directors[index] });
}

function patchDirector(req, res) {
  let index = Directors.findIndex((d) => d.id === req.params.id);

  if (index < 0) {
    res.status(404).json({
      message: `Director with id ${req.params.id} not found`,
    });
  }

  // prevent ID from being overwritten
  const { id: _id, ...updates } = req.body;

  Directors[index] = {
    ...Directors[index],
    ...updates,
  };
  res.json({
    message: "Director updated",
    director: Directors[index],
  });
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
function getAllMovies(req, res) {
  let dir = Directors.find((d) => d.id === req.params.id);
  if (dir) {
    res.json({
      message: "All movies retrieved",
      movies: dir.movies,
    });
  } else {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }
}

function getOneMovie(req, res) {
  let dir = Directors.find((d) => d.id === req.params.id);
  if (dir) {
    let movie = dir.movies.find((m) => m.id === req.params.mid);

    if (movie) {
      res.json({
        message: "Matching movie found",
        movie,
      });
    } else {
      res.status(404).json({
        message: `Movie with id ${req.params.mid} not found`,
      });
    }
  } else {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }
}

function addMovie(req, res) {
  let dir = Directors.find((d) => d.id === req.params.id);
  if (!dir) {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }

  let m = {
    id: crypto.randomUUID(),
    title: req.body.title,
  };
  dir.movies.push(m);
  res.status(201).json({
    message: "Movie added",
    movie: m,
  });
}

function putMovie(req, res) {
  let directorIndex = Directors.findIndex((d) => d.id === req.params.id);

  if (directorIndex < 0) {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }

  const movieIndex = Directors[directorIndex].movies.findIndex(
    (m) => m.id === req.params.mid,
  );
  if (movieIndex < 0) {
    res.status(404).json({
      message: `Movie with id ${req.params.mid} not found for director ${req.params.id}`,
    });
  }

  const newMovie = {
    id: Directors[directorIndex].movies[movieIndex].id,
    title: req.body.title ?? "",
  };

  Directors[directorIndex].movies[movieIndex] = newMovie;
  res.json({
    message: "Replaced movie",
    movie: newMovie,
  });
}

function patchMovie(req, res) {
  const directorIndex = Directors.findIndex((d) => d.id === req.params.id);

  if (directorIndex < 0) {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }

  const movies = Directors[directorIndex].movies;
  const movieIndex = movies.findIndex((m) => m.id === req.params.mid);

  if (movieIndex < 0) {
    res
      .status(404)
      .json({ message: `Movie with id ${req.params.mid} not found` });
  }

  const { id: _id, ...updates } = req.body;
  movies[movieIndex] = {
    ...movies[movieIndex],
    ...updates,
  };
  res.json({
    message: "Movie updated",
    movie: movies[movieIndex],
  });
}

function deleteMovie(req, res) {
  let dir = Directors.find((d) => d.id === req.params.id);

  if (dir) {
    let index = dir.movies.findIndex((m) => m.id === req.params.mid);
    if (index !== -1) {
      dir.movies.splice(index, 1);
      res.json({ message: "Movie deleted" });
    } else {
      res
        .status(404)
        .json({ message: `Movie with id ${req.params.mid} not found` });
    }
  } else {
    res
      .status(404)
      .json({ message: `Director with id ${req.params.id} not found` });
  }
}

const directorController = {
  getAllDirectors,
  getOneDirector,
  addDirector,
  putDirector,
  patchDirector,
  deleteDirector,
};

const movieController = {
  getAllMovies,
  getOneMovie,
  addMovie,
  putMovie,
  patchMovie,
  deleteMovie,
};

export { directorController, movieController };
