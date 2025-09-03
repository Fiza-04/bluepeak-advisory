import { Menu, Portal } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

export default function NavMenu() {
  return (
    <Menu.Root>
      <Menu.Trigger>
        <RxHamburgerMenu size={32} />
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="home">Home</Menu.Item>
            <Menu.Item value="about">About</Menu.Item>
            <Menu.Item value="services">Services</Menu.Item>
            <Menu.Item value="portfolio">Portfolio</Menu.Item>
            <Menu.Item value="blog">Blog</Menu.Item>
            <Menu.Item value="contact">Contact</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  )
}
