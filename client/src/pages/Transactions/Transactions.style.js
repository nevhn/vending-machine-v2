import tw from "tailwind-styled-components";
export const Container = tw.div`
`;
// overflow-x-auto
export const TableDiv = tw.div`
mt-5
relative
max-h-[362px]
w-auto
sm:max-h-96
xl:px-96
overflow-x-hidden	
`;
// max-w-prose
// bg-blue-400
// border-b-2
export const Table = tw.table`
w-full 
text-sm 
text-left 
text-gray-500 
dark:text-gray-400
`;

export const Thead = tw.thead`
text-[#5463FF]
text-xs 
uppercase 
bg-gray-50 
dark:bg-gray-700 
dark:text-gray-400
`;
export const Th = tw.th`
py-3
px-6
`;

export const TdItem = tw.td`
text-[#8D8DAA]
py-4 
px-6
break-words
`;
// export const TdCost = tw.td`
// px-1
// py-4
// md:px-9

// text-[#8D8DAA]
// `;

// export const TdPurchase = tw(TdCost)`

// text-[#8D8DAA]
// `;

export const TdDate = tw(TdItem)`
text-[#8D8DAA]
`;
