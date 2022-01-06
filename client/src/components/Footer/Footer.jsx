import React from "react";
import * as S from "./Footer.style";

export const Footer = () => {
  const redirectToLink = () => {
    window.open("https://github.com/ExhaustCs/vending-machine-v2", "_blank");
  };
  return (
    <S.Footer>
      <S.Span onClick={() => redirectToLink()}>
        <S.Github />
        Source Code
      </S.Span>
    </S.Footer>
  );
};
