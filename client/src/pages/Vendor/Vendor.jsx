import React from "react";
import { Heading } from "../../components/Heading/Heading";
import * as S from "./Vendor.style";
export const Vendor = () => {
  return (
    <S.Container>
      <Heading prompt="You currently on the vendor page." />
      <S.ListOfOptionsDiv>
        <S.Option>
          <S.OptionLink to="/add">
            <S.TextSpan>Add an item</S.TextSpan>
          </S.OptionLink>
        </S.Option>
        <S.Option>
          <S.OptionLink to="/add">
            <S.TextSpan>Update an item</S.TextSpan>
          </S.OptionLink>
        </S.Option>
        <S.Option>
          <S.OptionLink to="/add">
            <S.TextSpan>Delete an item</S.TextSpan>
          </S.OptionLink>
        </S.Option>
        <S.Option>
          <S.OptionLink to="/add">
            <S.TextSpan>Get Transactions</S.TextSpan>
          </S.OptionLink>
        </S.Option>
        <S.Option>
          <S.OptionLink to="/add">
            <S.TextSpan>Add funds</S.TextSpan>
          </S.OptionLink>
        </S.Option>
        <S.Option>
          <S.OptionLink to="/add">
            <S.TextSpan>Get total funds</S.TextSpan>
          </S.OptionLink>
        </S.Option>
      </S.ListOfOptionsDiv>
      <S.Divider />
    </S.Container>
  );
};
