import tw from "tailwind-styled-components";

export const Container = tw.div``;
export const TableDiv = tw.div`
bg-[#F1F5F2]
rounded-md
shadow
w-4/12
m-auto
mt-11
`;
// text-align: center fixes align issue
export const Table = tw.table`
w-full
text-center
border-separate
p-2
mb-20

`;

// td{
//     border-2
//     p-2
//     w-full
//     text-indigo-200
// }

// th{
//     text-blue-500
//     bg-black;
// }
