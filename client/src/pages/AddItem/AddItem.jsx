import React from "react";
import * as S from "./AddItem.style";
import { Heading } from "../../components/Heading/Heading";
import { BackButton } from "../../components/BackButton/BackButton";
import toast from "react-hot-toast";

export const AddItem = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("yep");
  };
  return (
    <div>
      <Heading prompt={"You currently adding an item"} />
      <S.InputFieldDiv>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.Label>Description</S.Label>
          <S.Input placeholder="Chocolate Chips" />
          <S.Label>Cost</S.Label>
          <S.Input placeholder="$0.75" />
          <S.Label>Quantity </S.Label>
          <S.Input placeholder="10" />
          <S.ButtonDiv>
            <S.SubmitButton type="submit">Add item</S.SubmitButton>
          </S.ButtonDiv>
        </S.Form>
      </S.InputFieldDiv>
      <BackButton />
      {/* <div className="flex items-center justify-center">
        <S.BackLink to="/vendor">Go Back</S.BackLink>
      </div> */}
    </div>
  );
};
