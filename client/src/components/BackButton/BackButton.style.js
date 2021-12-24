/* TODO:

[x] - Make back button a seprate component 
``

*/
import tw from 'tailwind-styled-components'
import { Link } from 'react-router-dom'
export const Div = tw.div`
flex
justify-center
items-center
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
