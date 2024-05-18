import { useEffect, useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

function App() {
  const [animeList, setAnimeList] = useState([]);
  const [topAnime, setTopAnime] = useState([]);

  // fitur pencarian pada react dengan enter button
  const [search, setSearch] = useState("");

  const getTopAnime = async () => {
    const temp = await fetch(`${process.env.REACT_APP_URL}/top/anime`).then(
      (res) => res.json()
    );

    // get top 5 anime
    setTopAnime(temp.data.slice(0, 5));
  };

  const fetchAnime = async (querySearch) => {
    const temp = await fetch(
      `${process.env.REACT_APP_URL}/anime?q=${querySearch}&limit=10&type=movie`
    ).then((res) => res.json());

    console.log(temp.data);

    setAnimeList(temp.data);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    fetchAnime(search);
  };

  useEffect(() => {
    getTopAnime();
  }, []);

  return (
    <div>
      <Header />
      <div className="px-12 flex">
        <Sidebar topAnime={topAnime} />
        <MainContent
          handleSearch={handleSearch}
          search={search}
          setSearch={setSearch}
          animeList={animeList}
        />
      </div>
    </div>
  );
}

export default App;
