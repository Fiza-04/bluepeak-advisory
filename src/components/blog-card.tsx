import { Box, Flex, Text } from "@chakra-ui/react";
import { BiCalendar, BiUser } from "react-icons/bi";
import CustomButton from "./custom-button";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Lato } from "next/font/google";

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

interface BlogCardProps {
  date: string;
  author: string;
  title: string;
  description: string;
}

export default function BlogCard({
  date,
  author,
  title,
  description
}: BlogCardProps) {

  return (
    <Box
      className="blog-card"
      w={{ base: '100%', sm: '300px', xl: '300px' }}
      h={'fit-content'}
      bg={'#fff5ee'}
      borderRadius={10}
      p={4}
    >
      <Box
        bgImage={'url("/images/signature/signature2.jpg")'}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        h={'150px'}
        w={'100%'}
        borderTopRadius={6}
        mb={3}
      />
      <Flex color={'gray.500'} gap={4}>
        <Flex gap={1}>
          <Box pt={1}>
            <BiCalendar />
          </Box>
          <Text fontSize={{ base: '13px', xl: '14px' }}>{date}</Text>
        </Flex>
        <Flex gap={2}>
          <Box pt={1}>
            <BiUser />
          </Box>
          <Text fontSize={{ base: '13px', xl: '14px' }}>By {author}</Text>
        </Flex>
      </Flex>
      <Box mx={1} my={0}>
        <Text
          color={'#09090b'}
          fontSize={{ base: '18px', lg: '18px', xl: '22px' }}
          className={lato700.className}
          pb={2}
          pt={{ base: 2, lg: 4 }}
        >
          {title}
        </Text>
        <Text lineClamp={2} fontSize={{ base: '12px', lg: '14px' }} color={'gray.500'}>
          {description}
        </Text>
        <Box pt={8}>
          <CustomButton label="Read More" btnIcon={<FaSquareArrowUpRight size={24} />} bg={'#ae5800'} />
        </Box>
      </Box>
    </Box>
  )
}
