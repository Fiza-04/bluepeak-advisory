'use client';
import { useEffect } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import CustomButton from "@/components/custom-button";
import CountGrid from "@/components/count-grid";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function OurFocus() {

  useEffect(() => {

    gsap.fromTo(
      '.our-focus-left',
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".our-focus-left",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate text (fade in from right)
    gsap.fromTo(
      '.our-focus-right',
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".our-focus-right",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      w={'100%'}
      my={{ base: 0, md: 6, lg: 20 }}
      px={{ base: 4, sm: 6, md: 8, lg: 12, xl: 28 }}
      pb={{ base: 10, xl: 20 }}
      gap={10}
    >
      <Box color={'black'} w={{ base: '100%', md: '45%' }} className="our-focus-left">
        <Text
          fontSize={'14px'}
          color={'#e37500'}
          className={lato700.className}
          pb={4}
          letterSpacing={1}
          textAlign={{ base: 'center', md: 'start' }}
        >
          OUR FOCUS
        </Text>
        <Text
          className={lato700.className}
          fontSize={{ base: 32, lg: 42, xl: 52 }}
          lineHeight={1}
          pb={10}
          textAlign={{ base: 'center', md: 'start' }}
          px={{ sm: 8, md: 0 }}
        >
          Keeping you informed on tax laws and financial trends
        </Text>
        <Flex w={'100%'} align={'center'} justify={{ base: 'center', md: 'start' }}>
          <CustomButton label="Read More" btnIcon={<FaSquareArrowUpRight size={24} />} />
        </Flex>
      </Box>
      <Box w={{ base: '100%', md: '550px', lg: '650px' }} className="our-focus-right">
        <CountGrid />
      </Box>
    </Flex>
  )
}