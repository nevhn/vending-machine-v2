import tw from "tailwind-styled-components";

export const InputFieldDiv = tw.div`
m-auto
max-w-prose
`;

export const Form = tw.form`
flex
flex-col
items-center
p-16

`;

export const Input = tw.input`
w-full
h-10
px-4 
py-2 
border-2 
border-gray-400
 outline-none 
  focus:border-black
rounded-md
`;

export const Label = tw.label`
mb-[10px]
block
w-full
`;
export const ButtonDiv = tw.div`
self-start
`;
export const SubmitButton = tw.button`
bg-green-700
 hover:bg-green-500
 hover:outline
 text-white 
 font-bold 
 py-2 
 px-4 
 rounded
 mt-10
 mb-[-40px]
`;
