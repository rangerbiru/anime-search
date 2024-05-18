import React from "react";
import AnimeCards from "./AnimeCards";

const MainContent = (props) => {
  return (
    <main className="w-full flex flex-col gap-5 max-lg:mt-10">
      <form onSubmit={props.handleSearch}>
        <input
          type="search"
          placeholder="Silahkan Cari Anime Disini..."
          required
          className="py-2 px-5 bg-gray-100 rounded-full float-right"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />
      </form>

      <div className="flex flex-wrap gap-5 justify-center">
        {props.animeList.map((anime) => (
          <AnimeCards anime={anime} key={anime.mal_id} />
          //   <div className="w-36" key={anime.mal_id}>
          //     <img
          //       src={anime.images.jpg.image_url}
          //       alt="foto"
          //       className="h-48 object-cover pb-3"
          //     />
          //     {anime.title}
          //   </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;
