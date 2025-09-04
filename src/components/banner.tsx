'use client';
import { useEffect, useRef } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import CustomButton from "./custom-button";
import { Lato } from "next/font/google";
import gsap from "gsap";

const lato400 = Lato({
  variable: "--font-lato",
  weight: ["400"],
  subsets: ["latin"],
});

interface BannerProps {
  image: string;
  title: string;
  btnLabel: string;
}

export default function Banner({ image, title, btnLabel }: BannerProps) {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Image scale animation
    tl.fromTo(
      bannerRef.current,
      { scale: 0.8 },
      {
        scale: 1,
        duration: 2,
        ease: "power3.out",
      }
    );

    // Text slide-in after image
    tl.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: -50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
      },
      "-=0.5" // starts slightly before image scale ends
    );

    // Button pulse animation
    tl.fromTo(
      buttonRef.current,
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        onComplete: () => {
          // Start pulsing effect
          gsap.to(buttonRef.current, {
            scale: 1.1,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
          });
        },
      }
    );
  }, []);

  return (
    <Box
      ref={bannerRef}
      position="relative"
      bgImage={`url('${image}')`}
      bgSize="cover"
      bgPos="center"
      borderTopRadius={32}
      w="100%"
      h={{ base: "400px", md: "500px" }}
      overflow="hidden"
      transformOrigin="center"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(33, 12, 0, 0.48)"
        zIndex={1}
      />

      {/* Content */}
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        position="relative"
        zIndex={2}
        h="100%"
        gap={8}
      >
        <Text
          ref={textRef}
          textAlign="center"
          fontSize={{ base: "28px", md: "42px", xl: "52px" }}
          color="white"
          w={{ base: "90%", md: "50%" }}
          className={lato400.className}
        >
          {title}
        </Text>

        <Box ref={buttonRef}>
          <CustomButton
            label={btnLabel}
            btnIcon={<FaSquareArrowUpRight size={24} />}
          />
        </Box>
      </Flex>
    </Box>
  );
}
