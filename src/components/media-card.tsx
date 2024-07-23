import { FC } from "react";
import { IData } from "../types";
import GenreList from "./genre-list";
import useModalStore from "@/store";

interface MediaCardProps {
  data: IData;
  onClick?: () => void;
}

const MediaCard: FC<MediaCardProps> = ({ data }) => {
  const { title, synopsis, release_year, thumbnail_vertical, genre, rating } =
    data;

  const setIsOpen = useModalStore((state) => state.setIsOpen);
  const updateModalData = useModalStore((state) => state.updateModalData);

  return (
    <div
      onClick={() => {
        updateModalData(data);
        setIsOpen(true);
      }}
      className="bg-primary rounded-lg overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
    >
      <div className="relative">
        <img
          src={thumbnail_vertical}
          alt={title}
          className="w-full h-auto object-cover"
        />
        <div className="left-0 top-0 absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>

        <p className="text-sm text-secondary line-clamp-2">{synopsis}</p>

        <div className="mt-4 flex items-center text-sm text-secondary">
          <span>{release_year}</span>

          <GenreList genre={genre} />

          <span>{rating}*</span>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
