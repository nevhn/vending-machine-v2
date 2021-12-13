import * as S from "./Item.style";
import React from "react";

export const Item = () => {
  return (
    <S.Container>
      <S.ItemDiv>
        <S.AmountSpan>45</S.AmountSpan>
        <S.ItemSpan>Pop-Tarts</S.ItemSpan>
        <S.CostSpan>$1.00</S.CostSpan>
      </S.ItemDiv>
    </S.Container>
  );
};
