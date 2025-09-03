import { Box, Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import NavMenu from "./nav-menu";
import Link from "next/link";
import { links } from "../../utils/all-data";

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
      p={{ base: 4, md: 6 }}
      mt={2}
    >
      <Flex w={{ base: '100%', lg: '20%' }} justify={{ base: 'space-between', lg: 'start' }} align="center" gap={2}>
        <Box
          w={'40px'}
          h={'40px'}
          bgImage={`url('/images/logo.png')`}
          bgSize={'cover'}
          bgPos={'center'}
          bgRepeat={'no-repeat'}
        />
        <Text
          display={{ base: 'none', xl: 'block' }}
          fontSize={'30px'}
          color={'#ff8400'}
          className={lato700.className}
        >
          Consultancy
        </Text>
        <Box display={{ base: 'block', lg: 'none' }} cursor={'pointer'}>
          <NavMenu />
        </Box>
      </Flex>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        gap={{ lg: 6, xl: 8 }}
        color={'#632f00'}
        fontSize={{ lg: '16px', xl: '18px' }}
        className={lato400.className}
      >
        {links.map((link, index) => (
          <Link key={index} href={link.href}>
            <Text>{link.name}</Text>
          </Link>
        ))}
      </Flex>
      <Flex
        display={{ base: 'none', lg: 'flex' }}
        gap={{ lg: 6, xl: 8 }}
        color={'#ae5800'}
        className={lato400.className}
        fontSize={{ lg: '12px', xl: '14px' }}
        pt={1}
      >
        <Text>+44 2023489324</Text>
        <Text>Mon - Fri (8am - 6pm)</Text>
      </Flex>
    </Flex>
  )
}