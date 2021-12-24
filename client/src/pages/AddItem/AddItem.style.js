import { Link } from 'react-router-dom'
import tw from 'tailwind-styled-components'

export const InputFieldDiv = tw.div`
bg-[#F1F5F2]
rounded-md
shadow
w-4/6
m-auto
mt-11
`

export const Form = tw.form`
flex
flex-col
items-center
p-16

`

export const Input = tw.input`
w-full
h-10
mb-5
px-4 
py-2 
border-b-2 
border-gray-400
 outline-none 
  focus:border-gray-400
rounded-md
`

export const Label = tw.label`
mb-[10px]
block
w-full
`
export const ButtonDiv = tw.div`
self-start
`
export const SubmitButton = tw.button`
bg-blue-700
 hover:bg-blue-500 
 text-white 
 font-bold 
 py-2 
 px-4 
 rounded
`

export const BackLink = tw(Link)`
text-sm 
px-4 
py-2 
leading-none 
border rounded 
bg-black
text-white 
border-black
 hover:to-black 
 hover:text-black
 hover:bg-white 
 hover:transition duration-90
 hover:scale-105
 mt-4

`
