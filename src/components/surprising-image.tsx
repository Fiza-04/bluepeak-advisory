import { Box, Text } from "@chakra-ui/react";
import { FaRegFileAlt } from "react-icons/fa";

export default function SurprisingImage() {
  return (
    <Box position="relative" w="300px" h="300px">
      {/* Main circular image */}
      <Box
        borderRadius="full"
        overflow="hidden"
        w={{ base: "95%", sm: "100%", lg: "390px", xl: "450px" }}
        h={{ base: "250px", sm: "300px", lg: "400px" }}
        position="relative"
        bgImage={`url('/images/signature/signature1.jpg')`}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
      />

      {/* Years Experience Card */}
      <Box
        position="absolute"
        bottom={{ base: "40px", lg: "-80px" }}
        left="-20px"
        bg="white"
        p={{ base: 2, lg: 6 }}
        borderRadius={10}
        boxShadow="xs"
        display="flex"
        alignItems="center"
        gap={2}
      >
        {/* Icon */}
        <Box
          boxSize={6}
          bg="#ffecde"
          color="#ff8400"
          display="flex"
          alignItems="center"
          justifyContent="center"
          borderRadius="md"
        >
          <FaRegFileAlt size={32} />
        </Box>

        {/* Text */}
        <Box pl={2} lineHeight={{ base: "20px", lg: "27px" }}>
          <Text fontWeight="bold" fontSize={{ base: "20px", lg: "32px" }} color={'#632f00'}>10+</Text>
          <Text fontSize={{ base: "10px", lg: "14px" }} color="gray.600">Year&apos;s Experience</Text>
        </Box>
      </Box>

      {/* Small overlapping image */}
      <Box
        position="absolute"
        bottom={{ base: "20px", sm: "0px", lg: "-130px", xl: "-150px" }}
        right={{ base: "-10px", sm: "-20px", lg: "-110px", xl: "-170px" }}
        borderRadius="full"
        overflow="hidden"
        border={{ base: "4px solid white", lg: "8px solid white" }}
        w={{ base: "120px", lg: '170px', xl: "200px" }}
        h={{ base: "120px", lg: '170px', xl: "200px" }}
        bgImage={`url('/images/signature/signature2.jpg')`}
        bgSize={'cover'}
        bgPos={'center'}
        bgRepeat={'no-repeat'}
      />
    </Box >
  )
}
