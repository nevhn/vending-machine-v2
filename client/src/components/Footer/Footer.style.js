import tw from "tailwind-styled-components";
import { ReactComponent as GithubIcon } from "../../assets/github-1.svg";
export const Footer = tw.footer`
flex
justify-center
items-center
mt-4
p-4
${(p) => (p.$isUpdateItem ? "static" : "fixed")}
bottom-0
left-0
w-full
border-t-2
px-9
sm:fixed
md:justify-end
`;

export const Span = tw.span`
text-blue-400
cursor-pointer
`;

export const Link = tw.a`

`;

export const Github = tw(GithubIcon)`
inline-block
mr-3
`;
