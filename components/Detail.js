import React from "react";
import Service from "../utils/Service";
import Image from "next/image";
import DetailTile from "./DetailTile";

function Detail({ value }) {
  const [hero, setHero] = React.useState([]);

  const getAHero = (e) => {
    Service.getHeroById(e)
      .then((response) => {
        setHero(response);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  React.useEffect(() => {
    getAHero(value);
  }, []);

  console.log(hero);

  if (!hero) {
    return <div>Loading</div>;
  }

  return <div className="text-white"></div>;
}

export default Detail;
