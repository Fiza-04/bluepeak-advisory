import { Flex, Box, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import CustomButton from "./custom-button";

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

interface TeamCardProps {
  image: string;
  name: string;
  position: string;
}

export default function TeamCard({ image, name, position }: TeamCardProps) {
  return (
    <Flex
      direction={'column'}
      gap={2}
      align={'center'}
    >
      <Box
        bgImage={`url('${image}')`}
        bgSize="cover"
        bgPos="center"
        borderRadius="full"
        w={{ base: "200px", md: "170px", lg: "200px" }}
        h={{ base: "200px", md: "170px", lg: "200px" }}
        overflow="hidden"
      />
      <Text
        fontSize={'18px'}
        color={'#e37500'}
        className={lato700.className}
      >
        {name}
      </Text>
      <Text
        fontSize={'14px'}
        color={'gray.600'}
        className={lato400.className}
      >
        {position}
      </Text>
      <CustomButton label="Details" btnRadius="full" w="110px" h="40px" />
    </Flex>
  )
}