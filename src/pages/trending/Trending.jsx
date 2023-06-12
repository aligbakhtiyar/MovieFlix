import React, { useState } from "react";
import ContentWrapper from "../../components/contentWrapper/contentWrapper";
import SwitchTabs from "../../components/swtichTabs/SwitchTabs";
import Carousel from "../../components/carousel/carousel";


import useFetch from "../../hooks/useFetch";

const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");

  const { data, loading } = useFetch(`/trending/all/${endpoint}`);

  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">
          <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </span>
      </ContentWrapper>
      <Carousel data ={data?.results} loading={loading}/>
    </div>
  );
};

export default Trending;
