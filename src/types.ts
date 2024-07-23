export interface IData {
  id: number;
  title: string;
  release_year: number;
  genre: string[];
  director: string;
  cast: ICast[];
  rating: number;
  duration_minutes: number;
  synopsis: string;
  thumbnail_horizontal: string;
  thumbnail_vertical: string;
  poster: string;
  videoId: string;
}

export interface ICast {
  name: string;
  role: string;
}

export interface IMeta {
  release_year: number;
  genre: string[];
  director: string;
  cast: ICast[];
  rating: number;
  duration_minutes: number;
  thumbnail_horizontal?: string;
  thumbnail_vertical?: string;
}
