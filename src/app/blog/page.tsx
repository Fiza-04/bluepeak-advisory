'use client'
import { useEffect } from "react";
import { Box, Flex, Input, InputGroup, Separator, Text } from "@chakra-ui/react";
import Banner from "@/components/banner";
import BlogCard from "@/components/blog-card";
import { BiLoader, BiSearch } from "react-icons/bi";
import { Lato } from "next/font/google";
import { IoIosArrowForward } from "react-icons/io";
import CustomButton from "@/components/custom-button";
import { blogData, blogtypes, recents } from "../../../utils/all-data";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function Blog() {
  useEffect(() => {
    const cards = gsap.utils.toArray(".blog-card") as HTMLElement[];

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: i * 0.2, // Stagger manually
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,           // ✅ Trigger each card individually
            start: "top 80%",        // ✅ Animation starts when card enters viewport
            toggleActions: "play none none none",
          },
        }
      );
    });

    gsap.fromTo(
      ".more-posts",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".more-posts",           // ✅ Trigger each card individually
          start: "top 80%",        // ✅ Animation starts when card enters viewport
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      ".load-more-button",
      { opacity: 0, scale: 0, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".load-more-button",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);



  return (
    <Box pb={10}>
      <Banner
        image={'/images/landing.jpg'}
        title="We Deliver The Results That Are Best For You"
        btnLabel="Read More"
      />
      <Flex direction={{ base: 'column', md: 'row' }} pt={10}>
        <Flex direction={'column'} w={{ base: '100%', md: '65%', lg: '75%' }} gap={{ base: 8, md: 12 }} align={'center'}>
          <Flex flexWrap={'wrap'} gap={6} justify={'center'}>
            {blogData.map((item, index) => (
              <BlogCard
                key={index}
                date={item.date}
                author={item.author}
                title={item.title}
                description={item.description}
              />
            ))}
          </Flex>
          <Box className="load-more-button">
            <CustomButton label="Load More" btnRadius={'full'} btnIcon={<BiLoader size={24} />} />
          </Box>
        </Flex>
        <Flex
          direction={'column'}
          w={{ base: '100%', md: '35%', lg: '25%' }}
          gap={8}
          p={4}
          mt={{ base: 10, md: 0 }}
          borderTopLeftRadius={5}
          className="more-posts"
        >
          <InputGroup endElement={
            <Flex
              justify={'center'}
              align={'center'}
              bg={'#e37500'}
              w={'40px'}
              h={'100%'}
              borderRadius="0 4px 4px 0"
            >
              <BiSearch size={24} color={'#fff'} />
            </Flex>
          }>
            <Input
              placeholder="Search"
              bg={'#fff5ee'}
              variant={'subtle'}
            />
          </InputGroup>

          <Flex color={'gray.500'} direction={'column'} gap={6}>
            {blogtypes.map((item, index) => (
              <Flex key={index} direction={'column'} gap={2}>
                <Text
                  fontSize={'20px'}
                  className={lato700.className}
                  color={'#ae5800'}
                >
                  {item.type}
                </Text>
                <Flex direction={'column'} gap={4}>
                  {item.data.map((data, index) => (
                    <Flex key={index} direction={'column'} gap={2}>
                      <Flex justify={'space-between'} pb={2}>
                        <Flex gap={1}>
                          <Box pt={1}><IoIosArrowForward size={16} color={'#ae5800'} /></Box>
                          <Text fontSize={'16px'}>{data.name}</Text>
                        </Flex>
                        <Flex
                          w={'25px'}
                          h={'25px'}
                          bg={'#e37500'}
                          color={'#fff'}
                          fontSize={'12px'}
                          justifyContent={'center'}
                          alignItems={'center'}
                          borderRadius={2}
                        >
                          {data.count}
                        </Flex>
                      </Flex>
                      <Separator />
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>

          <Flex direction={'column'} gap={4}>
            <Text
              fontSize={'20px'}
              className={lato700.className}
              color={'#ae5800'}
            >
              Recent Posts
            </Text>
            <Flex direction={'column'} gap={4}>
              {recents.map((item, index) => (
                <>
                  <Flex key={index} gap={2}>
                    <Box
                      w={'80px'}
                      h={'80px'}
                      bgImage={'url("/images/signature/signature2.jpg")'}
                      bgSize={'cover'}
                      bgPos={'center'}
                      bgRepeat={'no-repeat'}
                    />
                    <Box color={'gray.600'} w={'70%'}>
                      <Text fontSize={'12px'}>03 Sept 2025</Text>
                      <Text color={'#ae5800'} className={lato700.className}> Market Research</Text>
                      <Text fontSize={'12px'}>Lorem ipsum dolor sit amet consec tetur adipisicing elit dsdf sfsdf</Text>
                    </Box>
                  </Flex>
                  {index < recents.length - 1 && <Separator />}
                </>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}