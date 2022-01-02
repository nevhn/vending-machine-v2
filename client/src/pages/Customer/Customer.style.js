import tw from 'tailwind-styled-components'
import { ReactComponent as DownArrowsIcon } from '../../assets/down-arrows.svg'

export const DownArrowsSvg = tw(DownArrowsIcon)`
w-6
h-6
text-blue-400
`

export const Container = tw.div`
bg-blue-400 md:bg-yellow-300 lg:grid grid-cols-2 bg-pink-500
`
export const VendingMachineDiv = tw.div`
grid
bg-[#F4F4F4]
w-[533px]
h-[652px]
ml-[211px]
mt-[31px]
rounded-md
shadow-lg
`

// grid-co
// grid-r
export const InnerDiv = tw.div`
grid
grid-cols-4
bg-white
h-[465px]
mx-[7px]
mt-[37px]
overflow-y-auto
gap-y-3
`

export const TrayDiv = tw.div`
flex
bg-[#E8E8E8]
justify-center
items-center
h-[115px]
mt-[11px]
mx-[100px]
drop-shadow-sm
`
// mx-[35px]

export const CustomerInputSection = tw.div`
md:ml-[180px] lg:mt-[370px]

`

export const MoneyTextDiv = tw.div`
`

export const MoneyTextSpan = tw.span`
block
mb-[10px]
font-bold
text-2xl
`

export const MoneySpan = tw.span`

ml-2
text-[#64F58D]`
// export const ChangeSpan = tw.span`ml-2`;
export const InputDiv = tw.div`
relative 
flex
w-full
flex-wrap
items-stretch
mb-3
`

export const MoneyInput = tw.input`
text-center
py-3 
placeholder-blueGray-300 
text-blueGray-600 
relative 
bg-white 
rounded 
text-sm 
border
border-blueGray-300 
outline-none 
focus:outline-none
focus:ring
w-[266px]
shadow-sm
ml-[9px]
`
