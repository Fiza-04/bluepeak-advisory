import { Flex } from "@chakra-ui/react";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Lato } from "next/font/google";

const lato400 = Lato({
  variable: "--font-lato",
  weight: ["400"],
  subsets: ["latin"],
});

export default function CustomButton({ label }: { label: string }) {
  return (
      <Flex
        bg={'#e37500'}
        color={'white'}
        w={'170px'}
        h={'45px'}
        gap={2}
        borderRadius={8}
        justify={'center'}
        align={'center'}
        fontSize={'16px'}
        className={lato400.className}
      >
        {label}
        <FaSquareArrowUpRight size={24} />
      </Flex>
  )
}