import { Swiper, SwiperProps, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { IData } from "@/types";
import { FC } from "react";
import MediaCard from "./media-card";
import { Autoplay } from "swiper/modules";

interface MediaCarouselProps {
  data: IData[];
  option?: SwiperProps;
}

const MediaCarousel: FC<MediaCarouselProps> = ({ data, option }) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={5}
      {...option}
    >
      {data.map((item) => (
        <SwiperSlide key={item.id}>
          <MediaCard data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MediaCarousel;
