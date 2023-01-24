import { useParams } from 'react-router-dom';
import { getMovieActors } from 'api/Api';
import MovieActors from 'components/MovieActors';
import useMovieSearchHook from 'api/ApiHook';
import Container from 'components/Container';

const MoviesDetails = () => {
  const { id } = useParams();

  const Actors = useMovieSearchHook(getMovieActors, id);
  const { movieArr, error, isLoading } = Actors;
  return (
    <Container isLoading={isLoading} error={error} movieArr={movieArr}>
      {movieArr.length !== 0 && <MovieActors movies={movieArr} />}
    </Container>
  );
};

export default MoviesDetails;