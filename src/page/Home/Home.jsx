import {findTrandingMovies} from 'api/Api';
import useMovieSearchHook from 'api/ApiHook';
import Container from 'components/Container';
import MovieGallery from 'components/MovieGallery';
import { TrendingTitle } from './Home.styled';

const Home = () => {
    const trandingMovies = useMovieSearchHook(findTrandingMovies);
    const { movieArr, error, isLoading } = trandingMovies;
  return (
    <main>
      <Container isLoading={isLoading} error={error} movieArr={movieArr}>
        <TrendingTitle>Trending today</TrendingTitle>
        {movieArr.length !== 0 && <MovieGallery movies={movieArr} />}
      </Container>
    </main>
  );
};
export default Home;