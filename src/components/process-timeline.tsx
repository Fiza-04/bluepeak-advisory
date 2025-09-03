import { Box, Flex, Text } from "@chakra-ui/react";
import { BiFile } from "react-icons/bi";
import { TbBulbFilled, TbStack2Filled } from "react-icons/tb";
import { FaFaceSmileBeam } from "react-icons/fa6";

export default function ProcessTimeline() {
  const data = [
    {
      step: '01',
      icon: <BiFile size={40} />,
      title: 'Consultation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      step: '02',
      icon: <TbBulbFilled size={40} />,
      title: 'Strategy',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      step: '03',
      icon: <TbStack2Filled size={40} />,
      title: 'Implementation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      step: '04',
      icon: <FaFaceSmileBeam size={35} />,
      title: 'Final Result',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
  ]
  return (
    <Flex direction={{ base: 'column', md: 'row' }} gap={{ base: 4, md: 0, lg: 4 }} w={'fit-content'} justify={'center'}>
      {data.map((item, index) => (
        <Flex
          direction={{ base: 'column', md: 'row' }}
          gap={{ base: 4, md: 2, lg: 4 }}
          w={'100%'}
          justify={'center'}
          align={{ base: 'center', md: 'start' }}
          key={index}
        >
          <Flex
            direction="column"
            align="center"
            gap={4}
            position="relative"
            w="150px"
          >
            {/* Main Icon with Badge */}
            <Box position="relative">
              <Flex
                w={{ base: '85px', md: '70px', lg: '85px' }}
                h={{ base: '85px', md: '70px', lg: '85px' }}
                bg="#e37500"
                borderRadius="full"
                align="center"
                justify="center"
                color="white"
              >
                {item.icon}
              </Flex>

              {/* Number Badge */}
              <Flex
                w="40px"
                h="40px"
                bg="#361700"
                border="3px solid white"
                borderRadius="full"
                align="center"
                justify="center"
                position="absolute"
                top="25px"
                right="-18px"
              >
                <Text fontSize="16px" fontWeight="bold" color="white">
                  {item.step}
                </Text>
              </Flex>
            </Box>

            {/* Text below icon */}
            <Box textAlign="center" w={'200px'}>
              <Text fontWeight="bold" fontSize={{ base: '20px', md: '16px', lg: '20px' }} color={'#e37500'} mb={1}>
                {item.title}
              </Text>
              <Text fontSize={{ base: '16px', md: '12px', lg: '16px' }} color="gray.500">
                {item.description}
              </Text>
            </Box>
          </Flex>
          {index !== data.length - 1 && <Box bg={'#632f00'} w={{ base: '2px', md: '40px', lg: '70px', xl: '100px' }} h={{ base: '100px', md: '2px' }} mt={{ base: 0, md: 9 }} />}
        </Flex>
      ))}
    </Flex>
  );
}
