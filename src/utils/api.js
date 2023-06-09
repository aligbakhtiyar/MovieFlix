import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// const TMDB_TOKEN = import.meta.env.VITE_APP_IMDB_TOKEN;

const TMDB_TOKEN ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmIzZDQ1M2Y5NTMwN2ZkYzZkNjZiNDk0OTM2YjU5NiIsInN1YiI6IjY0N2UyZjAzY2NkZTA0MDEzNTViZmYwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.myEybXQkxMOrgHRzT7mtuvDrGhfomWcbwiS3B3elpHk'


const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};
