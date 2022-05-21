import tw from "tailwind-styled-components";
export const Container = tw.div`
`;
export const TableDiv = tw.div`
w-auto
m-auto
mt-11
mb-9
px-2
max-h-[362px]
overflow-y-auto
text-center
lg:px-0
max-w-6xl
`;
// max-w-prose
// bg-blue-400
// border-b-2
export const Table = tw.table`
w-full
m-auto
mb-2
border-collapse
shadow-md
`;

export const Thead = tw.thead`
text-[#5463FF]
`;

export const TdItem = tw.td`
text-[#8D8DAA]
`;
export const TdCost = tw.td`
px-1
py-4
md:px-9

text-[#8D8DAA]
`;

export const TdPurchase = tw(TdCost)`

text-[#8D8DAA]
`;

export const TdDate = tw.td`
text-[#8D8DAA]

`;
