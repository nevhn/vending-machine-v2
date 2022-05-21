import tw from "tailwind-styled-components";

export const TableDiv = tw.div`
relative overflow-x-auto shadow-md sm:rounded-l
`;

export const Table = tw.table`
w-full 
text-sm 
text-left
text-gray-500 
dark:text-gray-400
`;
export const THead = tw.thead`
text-xs 
text-gray-700
uppercase
bg-gray-50
dark:bg-gray-700
dark:text-gray-400`;

export const Tr = tw.tr``;
export const Th = tw.th`
px-6 
py-3
`;

export const TBody = tw.tbody``;
export const TBodyTr = tw.hr`
bg-white border-b dark:bg-gray-800 dark:border-gray-700
`;

export const TBodyTh = tw.th`
px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap
`;

export const TBodyTd = tw.td`
px-6
py-4

`;
