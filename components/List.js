import React from "react";
import Service from "../utils/Service";
import Tile from "./Tile";

function List() {
  const [heroes, setHeroes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filteredHeroes, setFilteredHeroes] = React.useState([]);

  const getAllHeroes = () => {
    Service.getAllHero()
      .then((response) => {
        setHeroes(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(() => {
    setLoading(true);
    getAllHeroes();
  }, []);

  React.useEffect(() => {
    setFilteredHeroes(
      heroes.filter((hero) =>
        hero.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, heroes]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="py-5 flex flex-col items-center ">
      <input
        className="p-2 bg-transparent rounded-md border-solid border-gray-100 text-white"
        type="text"
        placeholder="Search Your Hero"
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="px-5 my-10 grid sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-9">
        {filteredHeroes.map((hero) => {
          return <Tile hero={hero} key={hero.id} />;
        })}
      </div>
    </div>
  );
}

export default List;
