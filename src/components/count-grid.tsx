import { Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";

const lato900 = Lato({
  variable: "--font-lato",
  weight: ["900"],
  subsets: ["latin"],
});

export default function CountGrid() {
  const data = [
    { title: 'Lorem ipsum dolor sit amet consectetur', count: '920+', bg: '#ffe2cd' },
    { src: '/images/count-grid/countgrid1.jpg' },
    { title: 'Lorem ipsum dolor sit amet consectetur', count: '10+', bg: '#ffe2cd' },
    { src: '/images/count-grid/countgrid2.jpg' },
    { title: 'Lorem ipsum dolor sit amet consectetur', count: '1203+', bg: '#f5f6fa' },
    { src: '/images/count-grid/countgrid3.jpg' },
  ]
  return (
    <Flex gap={4} flexWrap={'wrap'} justify={'center'} color={'black'}>
      {data.map((item, index) => (
        <Flex
          key={index}
          direction="column"
          justify="center"
          align="center"
          w={{ base: "130px", md: "115px", lg: "150px" }}
          h={{ base: "130px", md: "115px", lg: "150px" }}
          borderRadius={{ base: "20px", lg: "32px" }}
          bg={item.bg || 'transparent'}
          backgroundImage={item.src ? `url(${item.src})` : undefined}
          backgroundSize="cover"
          backgroundPosition="center"
          color={'black'}
          px={6}
        >
          {item.count &&
            <Text fontSize={{ base: '24px', lg: '26px' }} color={'#4c2300'} className={lato900.className}>{item.count}</Text>
          }
          {item.title &&
            <Text textAlign={'center'} color={'#4c2300'} fontSize={{ base: '12px', md: '10px', lg: '14px' }} lineHeight={1.2}>{item.title}</Text>
          }
        </Flex>
      ))}
    </Flex>
  )
}