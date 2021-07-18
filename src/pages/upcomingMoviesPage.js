import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import {getUpcomingMovies} from "../api/tmdb-api";
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';

const UpcomingMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const watchList = movies.filter(m => m.toWatch)
  localStorage.setItem('watchList', JSON.stringify(watchList))
  const addToWatchList = (movieId) => true 
  console.log(watchList)

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <PlaylistAdd movie={movie} />
      }}
    />
);
};

export default UpcomingMoviesPage;