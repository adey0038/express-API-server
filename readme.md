# Directors and Movies API

This is a simple Express API to manage movie directors and their movies. It uses a static JSON model and follows best practices with separate controllers and routers.

---

## API Base URL

All endpoints are prefixes with `/api`.
http://localhost:3000/api

---

## Directors Endpoints

### Get all directors

**GET** `/directors`

**Example:**

```bash
http://localhost:3000/api/directors
```

### Get a single director

**GET** `/directors/:id`

### Add a director

**POST** `/directors`

### Replace a director

**PUT** `/directors/:id`

### Update a director

**PATCH** `/directors/:id`

### Delete a director

**DELETE** `/directors/:id`

---

## Movies Endpoints

### Get all movies from one director

**GET** `/directors/:id/movies`

**Example:**

```bash
http://localhost:3000/api/directors/:id/movies
```

### Get a single movie from one director

**GET** `/directors/:id/movies/:mid`

### Add a movie to a specific director

**POST** `/directors/:id/movies`

### Replace a movie

**PUT** `/directors/:id/movies/:mid`

### Update a movie

**PATCH** `/directors/:id/movies/:mid`

### Delete a movie

**DELETE** `/directors/:id/movies/:mid`
