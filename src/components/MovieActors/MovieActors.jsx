import {
    CastList,
    CastItem,
    CastItemImg,
    CastNameList,
    CastNameItem,
  } from './MovieActors.styled';
  
  const MovieActors = ({ movies }) => {
    return (
      <CastList>
        {movies.map(({ original_name, profile_path, character, id }) => (
          <CastItem key={id}>
            <CastItemImg
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={original_name}
            />{' '}
            <CastNameList>
              <CastNameItem>{original_name}</CastNameItem>
              <li>Character - {character}</li>
            </CastNameList>
          </CastItem>
        ))}
      </CastList>
    );
  };
  export default MovieActors;