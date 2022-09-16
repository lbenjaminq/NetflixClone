const API_KEY = "28aa3c7130bb9e9c02d5fcc14f7bd997"


const requests = {
  fetchTrending: `trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `discorver/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discorver/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discorver/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discorver/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discorver/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discorver/movie?api_key=${API_KEY}&with_genres=99`,
}