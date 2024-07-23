import { FC } from "react";
import { IData } from "../types";
import GenreList from "./genre-list";
import CastList from "./cast-list";
import useModalStore from "@/store";

interface HeroProps {
  data: IData;
}

const Hero: FC<HeroProps> = ({ data }) => {
  const {
    title,
    synopsis,
    release_year,
    genre,
    duration_minutes,
    director,
    cast,
    poster,
  } = data;

  const setIsOpen = useModalStore((state) => state.setIsOpen);
  const updateModalData = useModalStore((state) => state.updateModalData);

  return (
    <section className="flex items-center p-6 sm:p-12 relative min-h-[555px] mb-12 before:absolute before:inset-0 before:bg-gradient-to-r before:from-black/80 before:to-transparent before:z-10">
      <img
        className="absolute left-0 top-0 h-full w-full object-cover "
        src={poster}
        alt={title}
      />
      <div className="relative z-20">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-2 drop-shadow-lg">
          {title}
        </h1>

        <div className="inline-flex items-center gap-2 text-sm text-white shadow-secondary bg-dark/50 font-bold mb-4 p-2 rounded-lg">
          <GenreList genre={genre} />|<span>{release_year}</span>|
          <span>{duration_minutes} min.</span>
        </div>

        <p className="text-2xl mb-4 max-w-screen-md leading-relaxed drop-shadow-lg">
          {synopsis}
        </p>

        <div className="flex items-center gap-2 mb-4 text-lg">
          <span className="font-bold">Director:</span>
          <span>{director}</span>
        </div>

        <CastList cast={cast} className="mb-12" />

        <button
          onClick={() => {
            updateModalData(data);
            setIsOpen(true);
          }}
          className="hover:shadow-red-500 shadow-lg transition-all w-full max-w-xs bg-red-500/10 border-2 rounded-full font-bold py-4 px-6 text-xl uppercase text-red-500 border-red-500"
        >
          watch now
        </button>
      </div>
    </section>
  );
};

export default Hero;
