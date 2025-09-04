import { Box } from "@chakra-ui/react";
import BannerText from "../components/banner-text";
import JustifyText from "../components/justify-text";
import { BsFillPeopleFill } from "react-icons/bs"
import { GiTechnoHeart } from "react-icons/gi"
import { MdCyclone } from "react-icons/md"

export default function GoalsAgain() {

  const data = [
    { icon: <BsFillPeopleFill size={24} />, title: 'Priorities sads', text: "We prioritize building long-term relationships with our clients and always put their needs first." },
    { icon: <GiTechnoHeart size={24} />, title: 'Unique client', text: "Every client is unique, and we take the time to understand their specific needs and goals." },
    { icon: <MdCyclone size={28} />, title: 'Cutting-edge', text: "We leverage cutting-edge technology to provide efficient and effective solutions." },
  ]
  return (
    <Box
      bg={'#f5f6fa'}
      borderRadius={32}
      py={20}
      px={{ base: 8, sm: 12, xl: 28 }}
    >
      <BannerText
        heading="JUSTIFY TEXT"
        title="Your business goals are our priority"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est laudantium cumque architecto perferendis soluta quasi excepturi fuga minus ad autem nemo totam eligendi quibusdam laborum sed, repudiandae similique adipisci culpa."
      />
      <JustifyText
        data={data}
        image="/images/goals.jpg"
        button={false}
        overlay={true}
        overlayTitle="Your business goals are our priority"
        overlayCount="20+"
        overlayText="Lorem ipsum dolor"
        mainBg={true}
      />
    </Box>
  )
}