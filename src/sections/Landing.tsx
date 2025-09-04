'use client';
import { useEffect } from "react";
import { Flex, Separator } from "@chakra-ui/react"
import { Lato } from "next/font/google";
import { TbSettingsDollar } from "react-icons/tb";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiFolderOpenLight } from "react-icons/pi";
import Banner from "../components/banner";
import CardRow from "@/components/card-row";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const lato400 = Lato({
  variable: "--font-lato",
  weight: ["400"],
  subsets: ["latin"],
});

const lato700 = Lato({
  variable: "--font-lato",
  weight: ["700"],
  subsets: ["latin"],
});

export default function Landing() {

  useEffect(() => {
    const landingCards = gsap.utils.toArray(".landing-card") as HTMLElement[];

    landingCards.forEach((item, i) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 90 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: i * 0.2, // stagger by index
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const cards = [
    {
      title: 'Business Planning',
      text: 'We develop the relationships that under the next phase in your organisation.',
      icon: <TbSettingsDollar size={45} />
    },
    {
      title: 'Book Keeping and accounting',
      text: 'We develop the relationships that under the next phase in your organisation.',
      icon: <PiFolderOpenLight size={45} />
    },
    {
      title: 'Business Advisory Services',
      text: 'We develop the relationships that under the next phase in your organisation.',
      icon: <MdOutlineAdminPanelSettings size={45} />
    }
  ]

  return (
    <>
      <Banner
        image={'/images/signature/signature1.jpg'}
        title="We Deliver The Results That Are Best For You"
        btnLabel="Contact Us"
      />
      <Flex
        direction={{ base: 'column', md: 'row' }}
        px={{ base: 4 }}
        color={'black'}
        gap={{ base: 10, md: 8 }}
        my={8}
      >
        {cards.map((card, index) => (
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} key={index} className="landing-card">
            <CardRow key={index} title={card.title} text={card.text} icon={card.icon} />
            {
              index < cards.length - 1 &&
              <Separator
                orientation={{ base: 'horizontal', md: 'vertical' }}
                variant={'dashed'}
              />
            }
          </Flex>
        ))}
      </Flex>
    </>
  )
}