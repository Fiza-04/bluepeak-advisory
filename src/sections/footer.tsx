import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import { Lato } from "next/font/google";
import CustomButton from "../components/custom-button";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { links } from "../../utils/all-data";
import Link from "next/link";

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function Footer() {

  return (
    <>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        as="footer"
        bg="#0f0400"
        w="100%"
        h={{ base: "auto", md: "400px" }}
        px={{ base: 6, sm: 12, md: 6, lg: 12, xl: 20 }}
        py={{ base: 8, md: 12 }}
        gap={{ base: 10, md: 28 }}
        borderRadius={32}
        justify={'space-between'}
        align={{ base: 'center', md: 'start' }}
      >
        <Flex direction={'column'} w={{ base: '100%', md: '40%' }} align={{ base: 'center', md: 'start' }}>
          <Flex align="center" gap={2}>
            <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
            <Text
              fontSize={{ base: '32px', lg: '40px' }}
              color={'#ff8400'}
              className={lato700.className}
            >
              Consultancy
            </Text>
          </Flex>
          <Text
            textAlign={{ base: 'center', md: 'start' }}
            fontSize={{ base: '16px', md: '14px', lg: '16px' }}
            fontWeight={'300'}
            color={'#fff'}
            my={6}
          >
            We work with a passion of taking challenges and creating new ones in advertising sector. We work with a passion of taking challenges and creating new ones in advertising sector.
          </Text>
          <CustomButton label="Contact Us" btnIcon={<FaSquareArrowUpRight size={24} />} />
        </Flex>
        <Flex
          direction={{ base: 'column', sm: 'row' }}
          justify={{ sm: 'center', md: 'space-between' }}
          w={{ base: '100%', md: '60%' }}
          gap={{ base: 10, sm: '20%', md: '10%', xl: 0 }}
        >
          <Flex direction={'column'} align={{ base: 'center', md: 'start' }} >
            <Text fontSize={{ base: '22px', md: '18px', lg: '22px' }} className={lato700.className} color={'#ffd8bc'} pb={2}>
              Quick Links
            </Text>
            <Box>
              {links.map((link, index) => (
                <Flex key={index} gap={2} pb={2}>
                  <Box pt={1}><MdKeyboardDoubleArrowRight size={20} /></Box>
                  <Link href={link.href}>
                    <Text fontSize={{ base: '16px', md: '14px', lg: '16px' }} fontWeight={'300'} color={'#fff'}>
                      {link.name}
                    </Text>
                  </Link>
                </Flex>
              ))}
            </Box>
          </Flex>
          <Flex direction={'column'} align={{ base: 'center', sm: 'start' }}>
            <Text fontSize={{ base: '22px', md: '18px', lg: '22px' }} className={lato700.className} color={'#ffd8bc'} pb={3}>
              Contact Us
            </Text>
            <Text fontSize={{ base: '16px', md: '14px', lg: '16px' }} fontWeight={'300'} letterSpacing={0.7} color={'#fff'} pb={6}>
              Suite 3, 2nd Floor
              <br /> 45 Queen Street
              <br /> London EC4R 1AP
              <br /> United Kingdom
            </Text>
            <Flex gap={2} mb={4}>
              <Box pt={1}><FaPhone size={18} /></Box>
              <Text fontSize={{ base: '16px', md: '14px', lg: '18px' }} color={'#fff'}>
                +44 2023489324
              </Text>
            </Flex>
            <Flex gap={2}>
              <Box pt={1}><BsClock size={20} /></Box>
              <Text fontSize={{ base: '16px', md: '14px', lg: '18px' }} color={'#fff'}>
                Mon - Fri 8:00 AM - 6:00 PM
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex >
      <Text fontSize={'16px'} color={'gray.500'} my={2} textAlign={'center'}>© created by Fiza 2025 Bluepeak Advisory.</Text>
    </>
  )
}