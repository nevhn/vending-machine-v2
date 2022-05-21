import tw from "tailwind-styled-components";

export const TableDiv = tw.div`
w-auto
m-auto
mt-11
mb-9
overflow-y-auto
md:px-0
md:max-w-2xl
max-h-[285px]

`;

export const Table = tw.table`
w-full
m-auto
text-center
border-separate
pl-4
`;

export const Tr = tw.tr`
`;
export const Th = tw.th`
`;
export const Td = tw.td`
`;
export const HeaderTr = tw(Tr)`
text-gray-400
`;

export const InputDiv = tw.div`
w-2/12
m-auto
min-w-[342px]
mb-10
`;
// min-w-fit
export const Form = tw.form`
`;
export const InputLabel = tw.label`
block
mb-2
`;
export const Input = tw.input`
w-full
h-10
mb-5
px-4 
py-2 
border-2 
border-gray-400
focus:border-black
rounded-md
`;
export const ButtonDiv = tw.div`
flex
justify-center
items-center
mt-6
`;
export const UpdateButton = tw.button`
bg-yellow-400
 hover:bg-yellow-500
 text-white 
 font-bold 
 py-2 
 px-4 
 mb-2
 rounded
`;
