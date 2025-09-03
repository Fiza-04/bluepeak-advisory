import { Box, Flex, Text } from "@chakra-ui/react";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import CustomButton from "./custom-button";
import { Lato } from "next/font/google";

const lato400 = Lato({
  variable: "--font-lato",
  weight: ["400"],
  subsets: ["latin"],
});

interface BannerProps {
  image: string;
  title: string;
  btnLabel: string;
}

export default function Banner({ image, title, btnLabel }: BannerProps) {
  return (
    <Box
      position="relative"
      bgImage={`url('${image}')`}
      bgSize="cover"
      bgPos="center"
      borderTopRadius={32}
      w="100%"
      h={{ base: "400px", md: "500px" }}
      overflow="hidden"
    >
      {/* Overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        w="100%"
        h="100%"
        bg="rgba(33, 12, 0, 0.48)"
        zIndex={1}
      />

      {/* Content */}
      <Flex
        direction={'column'}
        justify={'center'}
        align={'center'}
        position="relative"
        zIndex={2}
        h="100%"
        gap={8}
      >
        <Text
          textAlign="center"
          fontSize={{ base: "28px", md: "42px", xl: "52px" }}
          color="white"
          w={{ base: "90%", md: "50%" }}
          className={lato400.className}
        >
          {title}
        </Text>
        <CustomButton label={btnLabel} btnIcon={<FaSquareArrowUpRight size={24} />} />
      </Flex>
    </Box>
  )
}