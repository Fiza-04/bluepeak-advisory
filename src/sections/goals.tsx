import { Box } from "@chakra-ui/react"
import BannerText from "../components/banner-text"
import JustifyText from "../components/justify-text"
import { BsFillPeopleFill } from "react-icons/bs"
import { GiTechnoHeart } from "react-icons/gi"
import { MdCyclone } from "react-icons/md"
import { IoIosArrowDropdownCircle } from "react-icons/io"

export default function Goals() {
  const data = [
    { icon: <BsFillPeopleFill size={24} />, text: "We prioritize building long-term relationships with our clients and always put their needs first." },
    { icon: <GiTechnoHeart size={24} />, text: "Every client is unique, and we take the time to understand their specific needs and goals." },
    { icon: <MdCyclone size={28} />, text: "We leverage cutting-edge technology to provide efficient and effective solutions." },
  ]

  return (
    <Box py={20} px={{ base: 8, sm: 12, xl: 28 }} mt={{ base: 0, xl: 10 }}>
      <BannerText
        heading="JUSTIFY TEXT"
        title="Your business goals are our priority"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium cumque architecto perferendis soluta quasi excepturi fuga minus ad autem nemo totam eligendi quibusdam laborum sed, repudiandae similique adipisci culpa."
      />
      <JustifyText
        data={data}
        image="/images/image1.jpg"
        btnText={"Read More"}
        btnIcon={<IoIosArrowDropdownCircle size={28} />}
      />
    </Box>
  )
}