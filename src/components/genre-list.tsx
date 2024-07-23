import { FC } from "react";

interface GenreListProps {
  genre: string[];
}

const GenreList: FC<GenreListProps> = ({ genre }) => {
  return <div className="flex gap-2 mx-2">{genre.join(", ")}</div>;
};

export default GenreList;
