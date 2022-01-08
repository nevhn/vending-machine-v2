import * as S from "./Item.style";
import React from "react";
import toast from "react-hot-toast";
import axios from "axios";
export const Item = ({ item, money }) => {
  return (
    <S.Container>
      <S.Div>
        <S.Quantity>{item.quantity}</S.Quantity>
        <S.Description>{item.description}</S.Description>
        <S.Cost>{item.cost}</S.Cost>
      </S.Div>
    </S.Container>
  );
};
