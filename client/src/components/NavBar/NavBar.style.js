import { Link } from "react-router-dom";
import { ReactComponent as vendingMachineSVG } from "../../assets/vending-machine-brand.svg";
import tw from "tailwind-styled-components";

export const Nav = tw.nav`
flex
items-center
justify-between
flex-wrap
p-6 
shadow-md
`;

export const VendingMachineIcon = tw(vendingMachineSVG)`
w-12
h-12
inline-block
`;

export const LeftDiv = tw.div``;

export const RightDiv = tw.div``;

export const HeaderSpan = tw.span`
font-semibold
text-xl 
hover:text-[#04395E]
cursor-pointer
hover:transition duration-100
`;

export const StyledLinkButton = tw(Link)`
inline-block 
text-sm 
px-4 
py-2 
leading-none 
border rounded 
bg-black
text-white 
border-black
 hover:to-black 
 hover:text-black
 hover:bg-white 
 hover:transition duration-90
 hover:scale-105
 active:transition duration-100
 active:bg-green-500
`;
