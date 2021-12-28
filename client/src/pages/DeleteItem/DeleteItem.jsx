import React from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "../UpdateItem/UpdateItem.style";
import { DeleteButton } from "./DeleteItem.style";

export const DeleteItem = () => {
  return (
    <div>
      <Heading prompt={"You are currently deleting an item"} />
      <S.TableDiv>
        <S.Table>
          <S.Tr>
            <S.Th>Id</S.Th>
            <S.Th>Item</S.Th>
          </S.Tr>
          <S.HeaderTr>
            <S.Th>1</S.Th>
            <S.Th>Pop-Tarts</S.Th>
          </S.HeaderTr>
          <S.HeaderTr>
            <S.Th>1</S.Th>
            <S.Th>Pop-Tarts</S.Th>
          </S.HeaderTr>
          <S.HeaderTr>
            <S.Th>1</S.Th>
            <S.Th>Pop-Tarts</S.Th>
          </S.HeaderTr>
          <S.HeaderTr>
            <S.Th>1</S.Th>
            <S.Th>Pop-Tarts</S.Th>
          </S.HeaderTr>
        </S.Table>
      </S.TableDiv>
      <S.InputDiv>
        <S.Form>
          <S.InputLabel>Delete item</S.InputLabel>
          <S.Input placeholder="id" type={"number"}></S.Input>
          <S.ButtonDiv>
            <DeleteButton>Delete</DeleteButton>
          </S.ButtonDiv>
        </S.Form>
        <BackButton />
      </S.InputDiv>
    </div>
  );
};
