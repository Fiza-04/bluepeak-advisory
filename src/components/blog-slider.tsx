import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BlogCard from "./blog-card";

interface BlogSliderProps {
  data: {
    date: string;
    author: string;
    title: string;
    description: string;
  }[];
}

export default function BlogSlider({ data }: BlogSliderProps) {
  return (
    <Swiper
      breakpoints={{
        0: { slidesPerView: 1 },
        540: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={8}
      slidesPerView={3}
      pagination={{
        clickable: true,
        renderBullet: function (index, className) {
          return '<span key={' + index + '} style="background-color: #e37500" class="' + className + '"></span>';
        },
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
        waitForTransition: true,
        pauseOnMouseEnter: true,
      }}
      style={{ width: '100%', paddingBottom: '50px' }}
    >
      {data.map((item: any, index: any) => (
        <SwiperSlide key={index}>
          <BlogCard
            date={item.date}
            author={item.author}
            title={item.title}
            description={item.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}