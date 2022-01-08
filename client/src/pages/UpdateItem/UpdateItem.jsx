import React from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "./UpdateItem.style";
import toast from "react-hot-toast";

export const UpdateItem = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("yep");
  };
  return (
    <div>
      <Heading prompt={"You are updating an item"} />
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
          <S.HeaderTr>
            <S.Th>1</S.Th>
            <S.Th>Pop-Tarts</S.Th>
          </S.HeaderTr>
        </S.Table>
      </S.TableDiv>
      <S.InputDiv>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.InputLabel>Update item</S.InputLabel>
          <S.Input placeholder="id" type={"number"}></S.Input>
          <S.ButtonDiv>
            <S.UpdateButton type="submit">Update</S.UpdateButton>
          </S.ButtonDiv>
        </S.Form>
        <BackButton />
      </S.InputDiv>
    </div>
  );
};
