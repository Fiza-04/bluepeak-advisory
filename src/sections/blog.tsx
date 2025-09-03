'use client'
import { Flex } from "@chakra-ui/react";
import BannerText from "../components/banner-text";
import BlogSlider from '../components/blog-slider';
import { blogData } from "../../utils/all-data";

export default function Blog() {

  return (
    <Flex
      w={'100%'}
      py={{ base: 10, md: 0, lg: 10, xl: 10 }}
      px={{ base: 4, md: 12, xl: 28 }}
      pb={{ md: 16, lg: 12 }}
      direction={'column'}
      gap={6}
    >
      <BannerText
        heading="OUR BLOGS"
        title="We're ready to share our experience."
        description="We develop the relationships that underpin the next phase in your organisation’s growth. We do this by discerning the people and that platforms where interests converge."
      />
      <BlogSlider data={blogData} />
    </Flex>
  )
}