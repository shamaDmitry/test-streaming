import { FC } from "react";

interface GenreListProps {
  genre: string[];
}

const GenreList: FC<GenreListProps> = ({ genre }) => {
  return (
    <div className="flex gap-2 mx-2">
      {genre.map((genreItem) => {
        return <span key={genreItem}>{genreItem}</span>;
      })}
    </div>
  );
};

export default GenreList;
