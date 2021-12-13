import tw from "tailwind-styled-components";

/*TODO:
change styled components names, right now they are confusing 
*/
export const Container = tw.div`
grid
grid-cols-2
`;
export const VendingMachineSection = tw.div`
grid
bg-[#F4F4F4]
w-[533px]
h-[786px]
ml-[211px]
mt-[31px]
rounded-md
shadow-lg
`;

// grid-co
// grid-r
export const OutlineDiv = tw.div`
grid
grid-cols-4
bg-white
h-[623px]
mx-[7px]
mt-[37px]
overflow-y-auto
gap-y-3
`;

export const TrayDiv = tw.div`
flex
justify-center
items-center
bg-[#E8E8E8]
h-[115px]
mt[14px]
mx-[100px]
`;
// mx-[35px]

export const CustomerInputSection = tw.div`
mt-[370px]

`;

export const MoneyTextDiv = tw.div`
`;

export const MoneyTextSpan = tw.span`
block
mb-[10px]
font-bold
text-2xl
`;

export const MoneySpan = tw.span`

ml-2
text-[#64F58D]`;
// export const ChangeSpan = tw.span`ml-2`;
export const InputDiv = tw.div`
relative 
flex
w-full
flex-wrap
items-stretch
mb-3`;
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
`;
