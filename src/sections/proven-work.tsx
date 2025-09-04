'use client'
import { useEffect } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import ProcessTimeline from "../components/process-timeline";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function ProvenWork() {

  useEffect(() => {
    gsap.fromTo(
      '.process-timeline-text',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".process-timeline-text",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

  }, []);
  return (
    <Flex direction={'column'} h={'fit-content'} w={'100%'} align={'center'} my={{ base: 20, lg: 32 }}>
      <Text
        fontSize={'14px'}
        color={'#e37500'}
        className={'lato700.className ' + lato700.className}
        pb={4}
        letterSpacing={1}
        textAlign={'center'}
      >
        OUR WORK PROCESS
      </Text>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        className={lato700.className}
        fontSize={{ base: 32, lg: 42, xl: 52 }}
        lineHeight={1}
        pb={10}
        textAlign={{ base: 'center', md: 'start' }}
        px={{ sm: 8, md: 0 }}
        color={'black'}
        gap={2}
      >
        <Text className="process-timeline-text">Our Proven</Text> <Text color={'#e37500'}>Work Process</Text>
      </Flex>
      <ProcessTimeline />
    </Flex>
  )
}