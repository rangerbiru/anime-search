/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Sidebar = ({ topAnime }) => {
  return (
    <aside className="w-1/4 max-lg:w-full">
      <nav className="flex flex-col gap-5">
        <h3 className="text-2xl font-semibold">Top Anime List</h3>
        {topAnime.map((anime) => (
          <a
            href={anime.url}
            target="_blank"
            rel="noreferrer"
            key={anime.mal_id}
            className="py-3 px-5 bg-gray-200 rounded-full transition duration-300 hover:bg-gray-600 hover:text-white"
          >
            {anime.title}
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
