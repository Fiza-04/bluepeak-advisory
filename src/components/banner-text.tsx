
'use client'
import { useEffect, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

interface BannerTextProps {
  title: string;
  description: string;
  heading: string;
}

export default function BannerText({ title, description, heading }: BannerTextProps) {
  const headingTextRef = useRef(null);
  const textRef = useRef(null);


  useEffect(() => {
    // Animate heading (fade in from left)
    gsap.fromTo(
      headingTextRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingTextRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate text (fade in from right)
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <Box>
      <Text
        ref={headingTextRef}
        fontSize={'14px'}
        color={'#e37500'}
        className={lato700.className}
        pb={4}
        letterSpacing={1}
        textAlign={{ base: 'center', md: 'start' }}
      >
        {heading}
      </Text>

      <Flex
        ref={textRef}
        direction={{ base: 'column', md: 'row' }}
        justify={{ base: 'center', md: 'space-between' }}
        pb={{ '2xl': 5 }}
        color={'black'}
        align={{ base: 'center', md: 'start' }}
      >
        <Text
          w={{ base: '100%', sm: '70%', md: '40%', lg: '45%' }}
          className={lato700.className}
          fontSize={{ base: 32, lg: 42, xl: 52 }}
          lineHeight={1}
          pb={{ base: 4, md: 0 }}
          textAlign={{ base: 'center', md: 'start' }}
        >
          {title}
        </Text>
        <Text
          w={{ base: '100%', sm: '90%', md: '50%', xl: '45%' }}
          fontSize={{ md: '14px', lg: '16px' }}
          textAlign={{ base: 'justify', md: 'start' }}
        >
          {description}
        </Text>
      </Flex>
    </Box>
  )
}