import { Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato400 = Lato({
  variable: "--font-lato",
  weight: ["400"],
  subsets: ["latin"],
});

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <Flex
      color="black"
      justify="space-between"
      align="center"
      w={'100%'}
      p={6}
      mt={2}
    >
      <Flex w={'20%'} align="center" gap={2}>
        <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
        <Text fontSize={'30px'} color={'#ff8400'} className={lato700.className}>Consultancy</Text>
      </Flex>
      <Flex gap={8} color={'#632f00'} fontSize={'18px'} className={lato400.className}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Services</Text>
        <Text>Portfolio</Text>
        <Text>Blog</Text>
        <Text>Contact</Text>
      </Flex>
      <Flex gap={8} color={'#ae5800'} className={lato400.className} fontSize={'14px'} pt={1}>
        <Text>+44 2023489324</Text>
        <Text>Mon - Fri (8am - 6pm)</Text>
      </Flex>
    </Flex>
  )
}