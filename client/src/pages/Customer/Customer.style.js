import tw from "tailwind-styled-components";
import { ReactComponent as DownArrowsIcon } from "../../assets/down-arrows.svg";

export const DownArrowsSvg = tw(DownArrowsIcon)`
w-6
h-6
text-blue-400
`;

export const Container = tw.div`

 grid 
 md:bg-yellow-300 
 lg:grid-cols-2 
 lg:bg-pink-500
`;
export const VendingMachineDiv = tw.div`
grid
bg-[#F4F4F4]
w-[360px]
h-[520px]
m-auto
mt-3
rounded-md
shadow-lg
md:w-[533px]
md:h-[652px]
md:ml-[211px]
md:mt-[31px]
lg:bg-black
`;

export const InnerDiv = tw.div`
grid
grid-cols-3
bg-white
h-[470px]
overflow-y-auto
gap-y-3
pr-2
md:mx-[7px]
md:grid-cols-4
md:mt-[37px]
`;

export const TrayDiv = tw.div`
hidden
flex
justify-center
items-center
w-[200px]
m-auto
h-[115px]
mt-[11px]
bg-[#E8E8E8]
md:mx-[100px]
drop-shadow-sm
`;
// mx-[35px]

export const CustomerInputSection = tw.div`
grid grid-rows-2 mt-6 md:ml-[180px] lg:mt-[370px]

`;

export const MoneyTextDiv = tw.div`
 mx-auto row-span-1 md:self-center
`;

export const MoneyTextSpan = tw.span`
block
font-bold
text-2xl
md:mb-[10px]
`;

export const MoneySpan = tw.span`
md:ml-2
text-[#64F58D]`;
// export const ChangeSpan = tw.span`ml-2`;
export const InputDiv = tw.div`
row-span-2
mx-auto
my-3
md:relative 
md:flex
md:w-full
md:flex-wrap
md:items-stretch
md:mb-3
`;

export const MoneyInput = tw.input`
text-center
py-3 
placeholder-blueGray-300 
text-blueGray-600 
relative 
bg-white 
rounded 
text-sm 
border
border-blueGray-300 
outline-none 
focus:outline-none
focus:ring
w-[266px]
shadow-sm
ml-[9px]
`;
