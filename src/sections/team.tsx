
'use client'
import { useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import BannerText from "../components/banner-text";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TeamCard from '../components/team-card';
import { teams } from '../../utils/all-data';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Team() {
  const swiperRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      swiperRef.current,
      { opacity: 0, x: -150 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: swiperRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <Flex
      w={'100%'}
      py={10}
      px={{ base: 4, md: 12, xl: 28 }}
      direction={'column'}
      gap={6}
      mt={{ base: 8, lg: 12 }}
    >
      <BannerText
        heading="OUR TEAM"
        title="We're ready to share our advice."
        description="We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the people and that platforms where interests converge."
      />
      <Swiper
        ref={swiperRef}
        breakpoints={{
          0: { slidesPerView: 1 },
          540: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{
          clickable: true,
          renderBullet: function (index, className) {
            return '<span ' + index + ' style="background-color: #e37500" class="' + className + '"></span>';
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
        {teams.map((item, index) => (
          <SwiperSlide key={index}>
            <TeamCard
              image={item.image}
              name={item.name}
              position={item.position}
            />
          </SwiperSlide>
        ))}
      </Swiper>

    </Flex>
  )
}