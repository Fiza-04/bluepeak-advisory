import { Box, Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import CustomButton from "@/components/custom-button";
import CountGrid from "@/components/count-grid";

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function OurFocus() {
  return (
    <Flex direction={{ base: 'column', md: 'row' }} w={'100%'} px={{ base: 4, sm: 6, md: 8, lg: 12, xl: 28 }} pb={20} gap={10}>
      <Box color={'black'} w={{ base: '100%', md: '45%' }}>
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
          <CustomButton label="Read More" />
        </Flex>
      </Box>
      <Box w={{ base: '100%', md: '550px', lg: '650px' }}>
        <CountGrid />
      </Box>
    </Flex>
  )
}