import React from "react";
import { Item } from "../../components/Item/Item";
import * as S from "./Customer.style";

export const Customer = () => {
  return (
    <S.Container>
      <S.VendingMachineDiv>
        <S.InnerDiv>
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </S.InnerDiv>
        <S.TrayDiv>
          <S.DownArrowsSvg />
        </S.TrayDiv>
      </S.VendingMachineDiv>
      <S.CustomerInputSection>
        <S.MoneyTextDiv>
          <S.MoneyTextSpan>
            Money: <S.MoneySpan>0.00</S.MoneySpan>
          </S.MoneyTextSpan>
          <S.MoneyTextSpan>
            Change: <S.MoneySpan>0.00</S.MoneySpan>
          </S.MoneyTextSpan>
        </S.MoneyTextDiv>
        <S.InputDiv>
          <S.MoneyInput
            type="number"
            min="0.01"
            max="10000.00"
            step="0.01"
            placeholder="insert money here"
          ></S.MoneyInput>
        </S.InputDiv>
      </S.CustomerInputSection>
    </S.Container>
  );
};
