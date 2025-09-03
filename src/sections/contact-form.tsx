import { Box, Flex, Text, Input, Textarea } from "@chakra-ui/react";
import BannerText from "../components/banner-text";
import { FaLocationDot, FaSquareArrowUpRight } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Lato } from "next/font/google";
import CustomButton from "../components/custom-button";

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

export default function ContactForm() {
  const data = [
    { icon: <FaLocationDot size={28} />, title: "Head Office Address", text: "123 Main Street, City, Country" },
    { icon: <FaPhoneAlt size={28} />, title: "Call Us for Advice", text: "+123 456 789" },
    { icon: <FiMail size={28} />, title: "Mail Us for Information", text: "info@bluepeakadvisory.com" },
  ]
  return (
    <Flex
      py={10}
      px={{ base: 4, md: 12, xl: 28 }}
      direction={'column'}
      gap={6}
      bg={'#fff5ee'}
      w={'100%'}
      h={{ base: 'auto', xl: '600px' }}
      borderRadius={32}
      mb={{ base: 8, lg: 20 }}
    >
      <BannerText
        heading="CONTACT US"
        title="We're ready to share our experience."
        description="We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the people and that platforms where interests converge."
      />
      <Flex justify={{ base: 'center', md: 'space-between' }} mt={{ md: 6 }} direction={{ base: 'column', md: 'row' }}>
        <Flex direction={'column'} w={{ base: '100%', md: '50%' }}>
          {data.map((item, index) => (
            <Flex key={index} gap={3} pb={8} w={'100%'}>
              <Flex w={'55px'} h={'55px'} borderRadius={'5px'} bg={'#ae5800'} justify={'center'} align={'center'}>
                {item.icon}
              </Flex>
              <Box>
                <Text color={'#ae5800'} fontSize={{ base: '18px', lg: '22px' }} className={lato700.className}>{item.title}</Text>
                <Text color={'gray.600'} fontSize={'16px'} className={lato400.className}>{item.text}</Text>
              </Box>
            </Flex>
          ))}

        </Flex>
        <Flex direction={'column'} color={'#ae5800'} w={{ base: '100%', md: '50%' }} gap={4} mt={{ base: 4, md: 0 }}>
          <Input
            variant="subtle"
            bg={'#ffc49a'}
            h={'50px'}
            color={'#020000'}
            placeholder="Full Name*"
            fontSize={'18px'}
            _placeholder={{ color: '#ae5800', fontSize: '16px' }}
            _focus={{ borderColor: '#ae5800', backgroundColor: '#fff' }} />
          <Flex gap={2}>
            <Input
              variant="subtle"
              bg={'#ffc49a'}
              h={'50px'}
              color={'#020000'}
              placeholder="Email*"
              fontSize={'18px'}
              _placeholder={{ color: '#ae5800', fontSize: '16px' }}
              _focus={{ borderColor: '#ae5800', backgroundColor: '#fff' }} />
            <Input
              variant="subtle"
              bg={'#ffc49a'}
              h={'50px'}
              color={'#020000'}
              placeholder="Phone Number"
              fontSize={'18px'}
              _placeholder={{ color: '#ae5800', fontSize: '16px' }}
              _focus={{ borderColor: '#ae5800', backgroundColor: '#fff' }}
            />
          </Flex>
          <Textarea
            variant="subtle"
            bg={'#ffc49a'}
            rows={4}
            color={'#020000'}
            placeholder="Message*"
            mb={2}
            fontSize={'18px'}
            _placeholder={{ color: '#ae5800', fontSize: '16px' }}
            _focus={{ borderColor: '#ae5800', backgroundColor: '#fff' }} />
          <CustomButton label="Send Message" btnIcon={<FaSquareArrowUpRight size={24} />} bg={'#ae5800'} />

        </Flex>
      </Flex>
    </Flex >
  )
}