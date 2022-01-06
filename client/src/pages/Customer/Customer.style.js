import tw from "tailwind-styled-components";
import { ReactComponent as DownArrowsIcon } from "../../assets/down-arrows.svg";

export const DownArrowsSvg = tw(DownArrowsIcon)`
w-6
h-6
text-blue-400
`;

export const Container = tw.div`
grid 
lg:grid-cols-2 
overflow-x-hidden
`;
export const VendingMachineDiv = tw.div`
grid
bg-[#F4F4F4]
w-[360px]
h-[470px]
m-auto
mt-3
rounded-md
shadow-2xl
md:w-[533px]
md:h-[786px]
md:m-auto
md:mt-[31px]
lg:ml-[100px]
xl:ml-auto
2xl:w-[533px]
2xl:h-[786px]
`;
// lg:ml-[211px]

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
lg:mt-2
md:w-[514px]
md:h-[651px]
2xl:mt-3
`;

export const TrayDiv = tw.div`
hidden
md:mt-[11px]
md:bg-[#E8E8E8]
md:drop-shadow-sm
md:flex
md:justify-center
md:items-center
md:mx-[100px]
md:h-20
lg:h-28
`;
// mx-[35px]

export const CustomerInputSection = tw.div`
grid grid-rows-2 mt-6 lg:mt-[370px] xl:w-[297px] lg:ml-24

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
mx-auto
md:mx-auto
my-3
md:relative 
md:flex
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
