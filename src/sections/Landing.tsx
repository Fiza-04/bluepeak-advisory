import { Box, Flex, Separator, Text } from "@chakra-ui/react"
import { Lato } from "next/font/google";
import CustomButton from "../components/custom-button";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { TbSettingsDollar } from "react-icons/tb";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { PiFolderOpenLight } from "react-icons/pi";
import Banner from "../components/banner";
import CardRow from "@/components/card-row";

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
          <Flex direction={{ base: 'column', md: 'row' }} gap={6} key={index}>
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