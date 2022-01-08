import React from "react";
import * as S from "./AddFunds.style";
import { Heading } from "../../components/Heading/Heading";
import { BackButton } from "../../components/BackButton/BackButton";
import toast from "react-hot-toast";
export const AddFunds = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast("delete");
  };

  return (
    <div>
      <Heading prompt={"You are currently adding funds"} />
      <S.InputFieldDiv>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.Label>Insert Funds</S.Label>
          <S.Input placeholder="$100" />
          <S.SubmitButton type="submit">Add funds</S.SubmitButton>
        </S.Form>
      </S.InputFieldDiv>
      <BackButton />
    </div>
  );
};
