import { useState, useEffect } from "react";

const useMovieSearchHook = (apiFunction, id) => {
    const [movieArr, setMovieArr] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      async function fetchToSearch() {
        try {
          setIsLoading(true);
          const res = await apiFunction(id);
          setMovieArr(res);
        } catch (error) {
          setError(error.message);
        } finally {
          setIsLoading(false);
        }
      }
      fetchToSearch();
    }, [apiFunction, id]);
    return { movieArr, error, isLoading };
  };
  
  export default useMovieSearchHook;