import React from "react";
import Service from "../utils/Service";
import Image from "next/image";

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
    console.log(value);
    getAHero(value);
  }, []);

  if (!hero) {
    return <div>Loading</div>;
  }

  return (
    <div className="text-white">
      <img src={hero?.images?.md} />
      <h1>{hero?.images?.md}</h1>
    </div>
  );
}

export default Detail;
