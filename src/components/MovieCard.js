import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    padding: "1rem 2rem",
    borderRadius: 10,
    marginBottom: "2rem",
  },
  cardTitle: {
    color: "#000",
  },
  small: {
    fontSize: ".8rem",
    marginBottom: ".8rem",
  },
  cardImage: {
    display: "block",
    marginBottom: "2rem",
    maringTop: "1rem",
  },
}));

export default function MovieCard({ movie }) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card} key={movie.id}>
        <CardContent>
          <img
            className={classes.cardImage}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + "poster"}
          />
          <div className={classes.cardContent}>
            <Typography
              variant="h4"
              className={classes.cardTitle}
              color="textSecondary"
              gutterBottom
            >
              {movie.title}
            </Typography>
            <Typography className={classes.small}>
              Release Date: {movie.release_date}
            </Typography>
            <Typography className={classes.small}>
              Rating: {movie.vote_average}
            </Typography>
            <Typography className={classes.cardDescription}>
              {movie.overview}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
