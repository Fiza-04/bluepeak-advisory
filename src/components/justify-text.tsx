import { Box, Flex, Text } from "@chakra-ui/react";
import BannerText from "./banner-text";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsFillPeopleFill } from "react-icons/bs";
import { GiTechnoHeart } from "react-icons/gi";
import { MdCyclone } from "react-icons/md";

export default function JustifyText() {
  const data = [
    { icon: <BsFillPeopleFill size={24} />, text: "We prioritize building long-term relationships with our clients and always put their needs first." },
    { icon: <GiTechnoHeart size={24} />, text: "Every client is unique, and we take the time to understand their specific needs and goals." },
    { icon: <MdCyclone size={28} />, text: "We leverage cutting-edge technology to provide efficient and effective solutions." },
  ]
  return (
    <Box py={20} px={{ base: 8, sm: 12, xl: 28 }}>
      <BannerText
        heading="JUSTIFY TEXT"
        title="Your business goals are our priority"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium cumque architecto perferendis soluta quasi excepturi fuga minus ad autem nemo totam eligendi quibusdam laborum sed, repudiandae similique adipisci culpa."
      />
      <Flex
        w={'100%'}
        h={{ base: '250px', sm: '300px' }}
        my={6}
        borderRadius={32}
        bgImage={"url('/images/image1.jpg')"}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
        direction="column"
        justify={'flex-end'}
        align={'center'}
      >
        <Flex
          justify={'center'}
          align={'center'}
          bg={'#e37500'}
          w={{ base: '150px', md: '170px' }}
          h={'45px'}
          borderRadius={'full'}
          mb={4}
          fontSize={'18px'}
          gap={2}
        >
          <IoIosArrowDropdownCircle size={28} />
          <Text fontSize={{ base: '15px', md: '16px' }}>Read More</Text>
        </Flex>
      </Flex>
      <Flex direction={{ base: 'column', md: 'row' }} color="black" gap={{ base: 6, lg: 10 }}>
        {data.map((item, index) => (
          <Box key={index}>
            <Flex direction={{ base: 'row', md: 'column' }} gap={{ base: 4, md: 2 }}>
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
              <Text fontSize={{ base: '16px', lg: '18px' }} fontWeight={'600'} w={{ base: '80%', md: '100%' }}>{item.text}</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Box>
  )
}