import React from "react";
import Service from "../utils/Service";

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
    <div className="text-white grid">
      <div className="uppercase flex justify-center py-3 text-lg">
        <h1>{hero.name}</h1>
      </div>
      <div className="capitalize flex justify-center py-3 text-sm">
        <h2>{hero?.appearance?.race}</h2>
      </div>
      <div className="grid grid-cols-3 py-2">
        <div className="flex justify-evenly ">
          <ol className="flex flex-col justify-evenly items-center p-4 transform skew-y-6 hover:scale-110 hover:skew-y-0 transition duration-200  ">
            <li className="text-lg">{hero?.biography?.fullName}</li>
            <li>Gender: {hero?.appearance?.gender}</li>

            <li>Height: {hero?.appearance?.height[1]}</li>
            <li>Weight: {hero?.appearance?.weight[1]}</li>
            <li></li>
            <li>Publisher: {hero?.biography?.publisher}</li>
          </ol>
        </div>
        <div className="flex justify-center ">
          <img className="object-fill" src={hero?.images?.md} />
        </div>
        <div className="flex justify-evenly ">
          <ol className="flex flex-col justify-evenly items-center p-4 transform -skew-y-6 hover:scale-110 hover:skew-y-0 transition duration-200  ">
            <li>Intelligence: {hero?.powerstats?.intelligence}</li>
            <li>Strength: {hero?.powerstats?.strength}</li>
            <li>Speed: {hero?.powerstats?.speed}</li>
            <li>Durability: {hero?.powerstats?.durability}</li>
            <li>Power:{hero?.powerstats?.power}</li>
            <li>Combat: {hero?.powerstats?.combat}</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Detail;
