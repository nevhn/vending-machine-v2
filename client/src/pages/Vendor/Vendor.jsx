import React from "react";
import { Heading } from "../../components/Heading/Heading";
import * as S from "./Vendor.style";
export const Vendor = () => {
  return (
    <div>
      <Heading prompt="You currently on the vendor page." />
      <S.Container>
        <S.ListOfOptionsDiv>
          <S.Option>
            <S.OptionLink to="add">
              <S.TextSpan>Add an item</S.TextSpan>
            </S.OptionLink>
          </S.Option>
          <S.Option>
            <S.OptionLink to="update">
              <S.TextSpan>Update an item</S.TextSpan>
            </S.OptionLink>
          </S.Option>
          <S.Option>
            <S.OptionLink to="delete">
              <S.TextSpan>Delete an item</S.TextSpan>
            </S.OptionLink>
          </S.Option>
          <S.Option>
            <S.OptionLink to="transactions">
              <S.TextSpan>Get Transactions</S.TextSpan>
            </S.OptionLink>
          </S.Option>
          <S.Option>
            <S.OptionLink to="funds">
              <S.TextSpan>Add funds</S.TextSpan>
            </S.OptionLink>
          </S.Option>
          <S.Option>
            <S.OptionLink to="items">
              <S.TextSpan>Fetch items</S.TextSpan>
            </S.OptionLink>
          </S.Option>
        </S.ListOfOptionsDiv>
        <S.Divider />
      </S.Container>
    </div>
  );
};
