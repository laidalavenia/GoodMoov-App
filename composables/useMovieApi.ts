import type { MovieDetail, MoviesResponse, GenresResponse, Credits } from "~/types";

export const useMovieApi = () => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.tmdbBaseUrl;
  const accessToken = config.public.tmdbAccessToken;

  const fetchWithAuth = async <T>(endpoint: string): Promise<T> => {
    const response = await $fetch<T>(`${baseUrl}${endpoint}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  return {
    getGenres: () => fetchWithAuth<GenresResponse>("/genre/movie/list"),
    getPopularMovies: (page = 1) => fetchWithAuth<MoviesResponse>(`/movie/popular?page=${page}`),
    getTopRatedMovies: (page = 1) => fetchWithAuth<MoviesResponse>(`/movie/top_rated?page=${page}`),
    getNowPlayingMovies: (page = 1) => fetchWithAuth<MoviesResponse>(`/movie/now_playing?page=${page}`),
    getUpcomingMovies: (page = 1) => fetchWithAuth<MoviesResponse>(`/movie/upcoming?page=${page}`),
    getMoviesByGenre: (genreId: number, page = 1) =>
      fetchWithAuth<MoviesResponse>(`/discover/movie?with_genres=${genreId}&page=${page}&sort_by=popularity.desc`),
    getMovieDetails: (movieId: number) => fetchWithAuth<MovieDetail>(`/movie/${movieId}`),
    getMovieCredits: (movieId: number) => fetchWithAuth<Credits>(`/movie/${movieId}/credits`),
    getSimilarMovies: (movieId: number) => fetchWithAuth<MoviesResponse>(`/movie/${movieId}/similar`),
    searchMovies: (query: string, page = 1) =>
      fetchWithAuth<MoviesResponse>(`/search/movie?query=${encodeURIComponent(query)}&page=${page}`),
  };
};

export const getImageUrl = (path: string | null, size: "w200" | "w300" | "w500" | "original" = "w500") => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.tmdbImageBaseUrl;
  if (!path) return "/placeholder-movie.jpg";
  return `${baseUrl}/${size}${path}`;
};