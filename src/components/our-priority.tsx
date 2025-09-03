import { Box, Flex, Text } from "@chakra-ui/react";
import { Lato } from "next/font/google";
import BannerText from "./banner-text";
import CustomButton from "./custom-button";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { cards } from "../../utils/all-data";

const lato400 = Lato({
  variable: "--font-lato",
  weight: ["400"],
  subsets: ["latin"],
});

export default function OurPriority() {

  return (
    <Box
      bg={'#f5f6fa'}
      h={'fit-content'}
      w={'100%'}
      p={{ base: 6, md: 12 }}
      px={{ base: 8, sm: 12, xl: 28 }}
      borderRadius={32}
      mt={{ base: 8, md: 20 }}
    >
      <BannerText
        heading="OUR PRIORITIES"
        title="Your business goals are our priority"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium cumque architecto perferendis soluta quasi excepturi fuga minus ad autem nemo totam eligendi quibusdam laborum sed, repudiandae similique adipisci culpa."
      />

      <Flex direction={{ base: 'column', md: 'row' }} align={'center'} justify={'center'} gap={8} py={10}>
        {cards.map((card, index) => (
          <Flex
            key={index}
            bgImage={`url(${card.src})`}
            bgSize={'cover'}
            bgPos={'center'}
            bgRepeat={'no-repeat'}
            h={{ base: "300px", lg: "370px" }}
            w={{ base: "100%", sm: "300px", lg: "370px" }}
            borderRadius={32}
            direction="column"
            justify="flex-end"
            align="center"
            position="relative"
            overflow="hidden"
          >
            {/* Black bottom-to-middle fade */}
            <Box
              position="absolute"
              bottom={0}
              left={0}
              right={0}
              height="70%"
              bgGradient="to-t"
              gradientFrom="black"
              gradientTo="transparent"
              zIndex={0}
            />

            <Text
              textAlign={'center'}
              py={12}
              fontSize={{ base: '16px', lg: '18px', xl: '20px' }}
              w={{ base: '50%', md: '90%', lg: '70%', xl: '50%' }}
              color={'white'}
              className={lato400.className}
              zIndex={1}
            >
              {card.text}
            </Text>
          </Flex>
        ))}
      </Flex>
      <Flex w={'100%'} align={'center'} justify={'center'}>
        <CustomButton label="Contact Us" btnIcon={<FaSquareArrowUpRight size={24} />} />
      </Flex>
    </Box>
  )
}