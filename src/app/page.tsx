import { VStack } from "@chakra-ui/react";
import Navbar from "@/components/navbar";
import Landing from "@/sections/Landing";
import OurFocus from "@/sections/our-focus";
import SurprisingRates from "@/sections/surprising-rates";

export default function Home() {
  return (
    <VStack bg="white" h={'fit-content'} px={{ base: 4, sm: 8, md: 12, xl: 28 }}>
      <Navbar />
      <Landing />
      <OurFocus />
      <SurprisingRates />
    </VStack>
  );
}
