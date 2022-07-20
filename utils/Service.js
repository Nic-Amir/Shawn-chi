import axios from "axios";

const SUPERHERO_API =
  "https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/";

class Service {
  getAllHero() {
    return axios
      .get(`${SUPERHERO_API}/all.json`)
      .then((response) => response.data);
  }

  getHeroById(heroId) {
    return axios
      .get(`${SUPERHERO_API}/id/${heroId}.json`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => response.data);
  }

  getHeroByName(heroName) {
    return axios
      .get(`${SUPERHERO_API}/${heroName}`)
      .then((response) => response.data);
  }
}

export default new Service();
