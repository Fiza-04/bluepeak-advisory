import { Flex } from "@chakra-ui/react";
import Banner from "../../components/banner";
import Team from "@/sections/team";
import Blog from "@/sections/blog";
import ContactForm from "@/sections/contact-form";

export default function Contact() {
  return (
    <Flex direction={'column'} w={'100%'}>
      <Banner
        image={'/images/contactbanner.jpg'}
        title="We Deliver The Results That Are Best For You"
        btnLabel="Read More"
      />
      <Team />
      <ContactForm />
      <Blog />
    </Flex>
  )
}