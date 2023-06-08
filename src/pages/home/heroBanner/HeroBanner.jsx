import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import "./style.scss";

const HeroBanner = () => {
  const [background, setBackground] =useState("");
  const {query, setQuery} = useState("");
  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if(event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
    }
  }

  return (
    <div className="heroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title"></span>
          <span className="subtitle">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
            illo, quibusdam praesentium numquam voluptatem incidunt dolores
            aliquid porro quam repellat blanditiis aliquam nemo officia a
            doloremque. Ipsa nesciunt facilis iure.
          </span>
          <div className="searchInput">
            <input
              type="text"
              placeholder="Serach for movie"
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              />
              <button>Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
