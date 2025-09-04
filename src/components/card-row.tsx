import { Flex, Text } from "@chakra-ui/react";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import CustomButton from "./custom-button";
import { Lato } from "next/font/google";

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

interface CardRowProps {
  title: string;
  text: string;
  icon: React.ReactNode;
}



export default function CardRow({ title, text, icon }: CardRowProps) {

  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={4}>
      <Flex direction={'column'} gap={4} >
        <Flex
          bg={'#e37500'}
          color={'white'}
          w={'58px'}
          h={'58px'}
          borderRadius={'full'}
          justify={'center'}
          align={'center'}
        >
          {icon}
        </Flex>

        <Text
          fontSize={{ base: '18px', xl: '20px' }}
          className={lato700.className}
          color={'#e37500'}
        >
          {title}
        </Text>
        <Text
          fontSize={{ base: '14px', md: '16px' }}
          color={'gray.600'}
          className={lato400.className}
          w={{ lg: '90%' }}
        >
          {text}
        </Text>
        <CustomButton label="Read More" btnIcon={<FaSquareArrowUpRight size={24} />} />
      </Flex>
    </Flex>   
  )
}