import { Box, Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import ProcessTimeline from "../components/process-timeline";

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function ProvenWork() {
  return (
    <Flex direction={'column'} h={'fit-content'} w={'100%'} align={'center'} my={{ base: 20, lg: 32 }}>
      <Text
        fontSize={'14px'}
        color={'#e37500'}
        className={lato700.className}
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
        <Text>Our Proven</Text> <Text color={'#e37500'}>Work Process</Text>
      </Flex>
      <ProcessTimeline />
    </Flex>
  )
}