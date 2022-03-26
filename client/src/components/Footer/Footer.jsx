import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as S from "./Footer.style";

/*
TODO: 
  [x] figure how to render styles
  [] fix footer for other device sizes
*/
export const Footer = () => {
  const [path, setPath] = useState();
  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);
  const redirectToLink = () => {
    window.open("https://github.com/ExhaustCs/vending-machine-v2", "_blank");
  };
  return (
    <S.Footer $isUpdateItem={path === "/vendor/update"}>
      <S.Span onClick={() => redirectToLink()}>
        <S.Github />
        Source Code
      </S.Span>
    </S.Footer>
  );
};
