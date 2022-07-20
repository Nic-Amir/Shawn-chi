import React from "react";
import Service from "../utils/Service";
import Tile from "./Tile";

function List() {
  const [heroes, setHeroes] = React.useState([]);

  const getAllHeroes = () => {
    Service.getAllHero().then((response) => {
      setHeroes(response);
    });
  };

  React.useEffect(() => {
    getAllHeroes();
  }, []);

  return (
    <div className="px-5 my-10 grid sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9">
      {heroes.map((hero) => {
        return <Tile hero={hero} key={hero.id} />;
      })}
    </div>
  );
}
export default List;
