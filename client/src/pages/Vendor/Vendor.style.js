import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";

export const Container = tw.div`
grid
grid-rows-2
justify-center
items-center
`;

export const ListOfOptionsDiv = tw.div`
grid
grid-cols-2
gap-[46px]
`;
// w-[313px]
// h-[296px]

export const OptionLink = tw(Link)`
`;
// mb-[46px]

export const TextSpan = tw.span`
text-xl
font-bold
`;

export const Option = tw.div`
flex
justify-center
items-center
text-center
bg-[#C4C4C4]
w-[175px]
h-[68px]
rounded-md
shadow-md
hover:bg-yellow-100
`;

export const Divider = tw.hr`
mt-11
text-blue-500
`;
