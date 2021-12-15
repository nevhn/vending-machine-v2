import tw from "tailwind-styled-components";

export const Container = tw.div`
w-[106px]
h-[123px]
bg-[#04395E]
hover:bg-blue-600 transition duration-100 hover:scale-110
rounded-md
mt-[17px]
ml-[12px]
`;

export const ItemDiv = tw.div`

pt-[10px]
`;

export const AmountSpan = tw.span`
block
text-white
text-center
pb-[17px]
`;
export const ItemSpan = tw(AmountSpan)``;
export const CostSpan = tw.span`
block
text-[#64F58D]
text-center
`;
