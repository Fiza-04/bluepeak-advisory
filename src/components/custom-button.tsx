import { Flex } from "@chakra-ui/react";
import { Lato } from "next/font/google";

const lato400 = Lato({
  variable: "--font-lato",
  weight: ["400"],
  subsets: ["latin"],
});

interface CustomButtonProps {
  label?: string;
  btnIcon?: React.ReactNode;
  btnRadius?: string;
  iconSide?: 'left' | 'right';
  w?: string;
  h?: string;
  bg?: string;
}

export default function CustomButton({
  label = 'Read More',
  btnIcon,
  btnRadius = '8px',
  iconSide = 'right',
  w,
  h,
  bg }: CustomButtonProps) {
  return (
    <Flex
      bg={bg || '#e37500'}
      color={'white'}
      w={w || { base: '150px', lg: '170px' }}
      h={h || { base: '40px', lg: '45px' }}
      gap={2}
      borderRadius={{ base: btnRadius === 'full' ? 'full' : '6px', lg: btnRadius }}
      justify={'center'}
      align={'center'}
      fontSize={'16px'}
      className={lato400.className}
    >
      {iconSide === 'left' && btnIcon}
      {label}
      {iconSide === 'right' && btnIcon}
    </Flex>
  )
}