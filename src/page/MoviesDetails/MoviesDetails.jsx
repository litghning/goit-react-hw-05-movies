import { useParams, useLocation } from 'react-router-dom';
import { getMoviesDetails } from 'api/Api';
import Container from 'components/Container';
import MovieDetail from 'components/MovieDetails';
import useMovieSearchHook from 'api/ApiHook';

const MoviesDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const trandingMovies = useMovieSearchHook(getMoviesDetails, id);
  const { movieArr, error, isLoading } = trandingMovies;

  return (
    <main>
      <Container isLoading={isLoading} error={error} movieArr={movieArr}>
        {movieArr.length !== 0 && (
          <MovieDetail movies={movieArr} backLinkHref={backLinkHref} />
        )}
      </Container>
    </main>
  );
};

export default MoviesDetails;