import { Box, Flex, Text } from "@chakra-ui/react";
import CustomButton from "./custom-button";
import { Lato } from "next/font/google";

interface JustifyTextProps {
  data: { icon: React.ReactNode; text: string, title?: string }[];
  image: string;
  button?: boolean;
  btnText?: string;
  btnIcon?: React.ReactNode;
  btnRadius?: string;
  overlay?: boolean;
  overlayTitle?: string;
  overlayCount?: string;
  overlayText?: string;
  mainBg?: boolean;
}

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function JustifyText({
  data,
  image,
  button = true,
  btnText,
  btnIcon,
  btnRadius = 'full',
  overlay = false,
  overlayTitle,
  overlayCount,
  overlayText,
  mainBg = false }: JustifyTextProps) {
  return (
    <>
      <Flex
        position="relative"
        w="100%"
        h={{ base: "250px", sm: "300px", xl: "400px" }}
        my={6}
        borderRadius={32}
        bgImage={`url(${image})`}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat"
        direction="column"
        justify="flex-end"
        align="center"
        overflow="hidden"
      >
        {/* Overlay Layer */}
        {overlay && (
          <Box
            position="absolute"
            top={0}
            left={0}
            w="100%"
            h="100%"
            bg="rgba(0, 0, 0, 0.51)"
            zIndex={0}
          />
        )}

        {/* Content */}
        <Flex
          direction={{ base: 'column', md: 'row' }}
          w={'100%'}
          mb={4}
          zIndex={1}
          justify={overlayTitle ? { base: 'center', md: 'space-between' } : 'center'}
          align={'center'}
        >
          {button && (
            <CustomButton
              label={btnText}
              btnIcon={btnIcon}
              btnRadius={btnRadius}
              iconSide="left"
            />
          )}

          {overlayTitle && (
            <Text
              fontSize={{ base: 24, md: '36px', lg: '40px' }}
              color={'white'}
              className={lato700.className}
              zIndex={1}
              w={{ base: '70%', md: '60%', xl: '40%' }}
              pl={{ md: 10 }}
              pb={{ md: 10 }}
              textAlign={{ base: "center", md: 'start' }}
            >
              {overlayTitle}
            </Text>
          )}

          {overlayCount && overlayText && (
            <Flex
              direction={'column'}
              align={{ base: 'center', md: 'flex-end' }}
              w={{ base: '100%', md: '50%' }}
              pr={{ md: 10 }}
              pb={{ base: 2, md: 10 }}
              justify={'center'}
            >
              <Text
                fontSize={{ base: 32, md: '50px', lg: '65px' }}
                color={'#ffd8bc'}
                className={lato700.className}
                zIndex={1}
              >
                {overlayCount}
              </Text>
              <Text
                fontSize={{ base: 12, md: '16px' }}
                color={'white'}
                zIndex={1}
              >
                {overlayText}
              </Text>
            </Flex>
          )}
        </Flex>
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} color="black" gap={{ base: 6, lg: 10 }} mt={{ lg: 8 }}>
        {data.map((item, index) => (
          <Box
            key={index}
            w={{ base: '100%', md: '50%' }}
            bg={mainBg ? 'white' : 'transparent'}
            p={mainBg ? 6 : 0}
            borderRadius={mainBg ? 20 : 0}
          >
            <Flex
              direction={mainBg ? 'column' : { base: 'row', md: 'column' }}
              align={mainBg ? { base: 'center', md: 'start' } : 'start'}
              gap={{ base: 4, md: 2 }}>
              <Flex
                w={'45px'}
                h={'45px'}
                bg={'#e37500'}
                color={'white'}
                borderRadius={'full'}
                align={'center'}
                justify={'center'}
              >
                {item.icon}
              </Flex>
              {item.title && (
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  fontWeight={'600'}
                  w={{ base: '80%', md: '100%' }}
                  textAlign={mainBg ? { base: 'center', md: 'start' } : 'start'}
                >
                  {item.title}
                </Text>
              )}
              <Text
                fontSize={item.title ? '16px' : { base: '16px', lg: '18px' }}
                fontWeight={item.title ? '400' : '600'}
                w={{ base: '80%', md: '100%' }}
                textAlign={mainBg ? { base: 'center', md: 'start' } : 'start'}
              >
                {item.text}
              </Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </>
  )
}