import { FC } from "react";
import { ICast } from "../types";
import { cn } from "@/lib/utils";

interface CastListProps {
  cast: ICast[];
  className?: string;
}

const CastList: FC<CastListProps> = ({ cast, className }) => {
  return (
    <div
      className={cn({
        "text-lg mb-4": true,
        [`${className}`]: className,
      })}
    >
      {cast.map((castItem) => {
        return (
          <div key={castItem.name} className="flex gap-2">
            <span className="font-bold">{castItem.name}:</span>
            <span>{castItem.role}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CastList;
