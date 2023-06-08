import { useState, useEffect } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";


// import all pages & components

import Home from './pages/home/Home'


function App() {
    const dispatch = useDispatch()
    const {url}= useSelector((state) =>state.home);
    console.log(url)
    

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchDataFromApi("/movie/now_playing").then((res) => {
      console.log(res);
      dispatch(getApiConfiguration(res));
    });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
