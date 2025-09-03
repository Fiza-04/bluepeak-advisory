import { VStack } from "@chakra-ui/react";
import Landing from "@/sections/Landing";
import OurFocus from "@/sections/our-focus";
import SurprisingRates from "@/sections/surprising-rates";
import OurPriority from "@/components/our-priority";
import Goals from "@/sections/goals";
import GoalsAgain from "@/sections/goalsagain";
import ProvenWork from "@/sections/proven-work";
import Blog from "@/sections/blog";

export default function Home() {
  return (
    <VStack>
      <Landing />
      <OurPriority />
      <Goals />
      <OurFocus />
      <Blog />
      <GoalsAgain />
      <ProvenWork />
      <SurprisingRates />
    </VStack>
  );
}
