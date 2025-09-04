'use client'
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BlogCard from "./blog-card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface BlogSliderProps {
  data: {
    date: string;
    author: string;
    title: string;
    description: string;
  }[];
}

export default function BlogSlider({ data }: BlogSliderProps) {
  const swiperBlogRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      swiperBlogRef.current,
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: swiperBlogRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);
  return (
    <Swiper
      ref={swiperBlogRef}
      className="blog-slider"
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
      {data.map((item: {
        date: string,
        author: string,
        title: string,
        description: string
      }, index: number) => (
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