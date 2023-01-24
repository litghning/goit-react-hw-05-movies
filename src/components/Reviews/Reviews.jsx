import { useParams } from 'react-router-dom';
import { getMoviesReviews } from 'api/Api';
import Container from 'components/Container';
import MovieReview from 'components/MovieReviews';
import useMovieSearchHook from 'api/ApiHook';
import { NoReview } from '../MovieReviews/MovieReviews.styled';

const MoviesDetails = () => {
  const { id } = useParams();

  const Actors = useMovieSearchHook(getMoviesReviews, id);
  const { movieArr, error, isLoading } = Actors;
  return (
    <Container isLoading={isLoading} error={error} movieArr={movieArr}>
      {!isLoading && movieArr.length !== 0 ? (
        <MovieReview movies={movieArr} />
      ) : (
        <NoReview> There are no reviews for this film.</NoReview>
      )}
    </Container>
  );
};

export default MoviesDetails;