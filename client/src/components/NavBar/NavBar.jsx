import React from "react";
import * as S from "./NavBar.style";
import { Link, useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  return (
    <S.Nav>
      <S.LeftDiv>
        <Link to="/">
          <S.VendingMachineIcon />
          <S.HeaderSpan> Vending Machine</S.HeaderSpan>
        </Link>
      </S.LeftDiv>
      <S.RightDiv>
        {location.pathname === "/" ? (
          <S.StyledLinkButton to="/vendor">Vendor</S.StyledLinkButton>
        ) : (
          <S.StyledLinkButton to="/">Customer</S.StyledLinkButton>
        )}
      </S.RightDiv>
    </S.Nav>
  );
};
