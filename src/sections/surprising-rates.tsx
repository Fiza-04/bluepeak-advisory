import { Box, Flex, Text } from "@chakra-ui/react";
import SurprisingImage from "@/components/surprising-image";
import { Lato } from "next/font/google";

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function SurprisingRates() {

  const data = [
    { title: 'Business is the Best Plan', src: '/images/surprising-rates/surprisingrates1.jpg' },
    { title: 'How to improve Business', src: '/images/surprising-rates/surprisingrates2.jpg' },
    { title: 'Services We Provide', src: '/images/surprising-rates/surprisingrates3.jpg' }
  ]

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      w={'100%'}
      px={{ base: 4, sm: 10, md: 12, xl: 20 }}
      pb={{ base: 10, md: 10 }}
      pt={{ base: 0, lg: 10 }}
      gap={10}
      color={'black'}
    >
      <Flex
        justify={{ base: 'center', md: 'start' }}
        align={{ base: 'center', lg: 'start' }}
        w={{ base: '100%', lg: '50%' }}
        mb={{ md: 36, lg: 0 }}
      >
        <SurprisingImage />
      </Flex>
      <Box w={{ base: '100%', lg: '50%' }}>
        <Text
          className={lato700.className}
          fontSize={{ base: 32, lg: 42, xl: 50 }}
          lineHeight={1}
          pb={6}
        >
          Surprising Great Rates Service Providing
        </Text>
        <Text pb={6} fontSize={{ base: '16px', md: '14px', lg: '16px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat quasi cumque minus laudantium soluta, itaque, sunt alias enim neque qui vel impedit culpa illo earum, ipsum saepe eum quis.
        </Text>
        <Box>
          {data.map((item, index) => (
            <Flex key={index} gap={4} align={'center'} pb={4}>
              <Box
                bg="#ff8400"
                w={{ base: '8px', md: '12px' }}
                h={{ base: '8px', md: '12px' }}
                borderRadius={'full'}
              />
              <Text
                className={lato700.className}
                fontSize={{ base: '18px', md: '16px', lg: '18px' }}
              >
                {item.title}
              </Text>
            </Flex>
          ))}
        </Box>
        <Text pb={10} fontSize={{ base: '16px', md: '14px', lg: '16px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quaerat quasi cumque minus laudantium soluta, itaque, sunt alias enim nequ
        </Text>
        <Flex direction={{ base: 'column', md: 'row' }} justify={'space-between'} align={{ base: 'start', md: 'center' }}>
          <Flex gap={4}>
            <Box
              w={'70px'}
              h={'70px'}
              borderRadius={'full'}
              bgImage={`url('/images/daniel.jpg')`}
              bgSize={'cover'}
              bgPos={'top'}
              bgRepeat={'no-repeat'}
            />
            <Flex direction={'column'} justify={'center'}>
              <Text fontSize={{ base: '16px', lg: '20px' }} className={lato700.className}>Daniel LaRusso</Text>
              <Text fontSize={{ base: '12px', lg: '15px' }}>Managing Director</Text>
            </Flex>
          </Flex>
          <Box
            w={{ base: '200px', md: '150px', lg: '200px' }}
            h={'100px'}
            bgImage={`url('/images/signature.jpg')`}
            bgSize={'cover'}
            bgPos={'center'}
            bgRepeat={'no-repeat'}
          />
        </Flex>
      </Box>
    </Flex>
  )
}