import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Typography } from "@material-ui/core";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "grid",
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr auto",
      gridGap: "1rem",
      alignItems: "center",
    },
  },
  searchField: {
    marginBottom: "1rem",
    [theme.breakpoints.up("md")]: {
      marginBottom: 0,
    },
  },
  button: {
    height: "100%",
  },
  cardList: {
    marginTop: "4rem",
  },
}));

export default function SearchMovies() {
  const classes = useStyles();

  //states - input query, movies
  const [query, setQuery] = useState("");
  //create the state for movies, and update the state appropriate
  const [movies, setMovies] = useState([]);

  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=be2dc2a9158f693fd1b81d66bd3c7d54&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <form className={classes.form} onSubmit={searchMovies}>
        <TextField
          label="Movie Name"
          htmlFor="query"
          name="query"
          id="outlined-basic"
          placeholder="i.e. Jurassic Park"
          variant="outlined"
          className={classes.searchField}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button
          className={classes.button}
          type="submit"
          variant="contained"
          color="primary"
        >
          Search
        </Button>
      </form>
      <div className={classes.cardList}>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} />
          ))}
      </div>
    </div>
  );
}
