import tw from "tailwind-styled-components";

export const Container = tw.div`
w-[106px]
h-[123px]
bg-[#04395E]
hover:bg-blue-600 transition duration-100 hover:scale-110
rounded-md
mt-[17px]
ml-[12px]
cursor-pointer
pointer-events-auto
text-ellipsis 
overflow-scroll
pt-[10px]
`;

export const Div = tw.div`
`;
// select-none
// pt-[10px]
// m-auto

export const Quantity = tw.span`
block
text-white
text-center
pb-[5px]
`;
export const Description = tw(Quantity)`
`;
export const Cost = tw.span`
block
text-[#64F58D]
text-center
`;
