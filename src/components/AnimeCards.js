import React from "react";

const AnimeCards = ({ anime }) => {
  return (
    <article>
      <a href={anime.trailer.embed_url} target="_blank" rel="noreferrer">
        <figure className="w-48 max-lg:w-full max-lg:shadow-md max-lg:p-4">
          <img
            src={anime.images.jpg.image_url}
            alt="foto"
            className="h-96 max-lg:w-full object-cover pb-3"
          />
          <h3 className="font-semibold">{anime.title}</h3>
        </figure>
      </a>
    </article>
  );
};

export default AnimeCards;
