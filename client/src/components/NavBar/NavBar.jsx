import React from "react";
import { Link } from "react-router-dom";
import * as S from "./NavBar.style";
export const NavBar = () => {
  return (
    <S.Nav>
      <S.LeftDiv>
        <S.HeaderSpan>Vending Machine</S.HeaderSpan>
      </S.LeftDiv>
      <S.RightDiv>
        <S.StyledLink to="/">Vendor</S.StyledLink>
      </S.RightDiv>
    </S.Nav>
  );
};
