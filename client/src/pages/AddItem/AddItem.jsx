import React, { useState } from "react";
import axios from "axios";
import * as S from "./AddItem.style";
import { Heading } from "../../components/Heading/Heading";
import { BackButton } from "../../components/BackButton/BackButton";
import toast from "react-hot-toast";

export const AddItem = () => {
  const [description, setDescription] = useState(null);
  const [cost, setCost] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const addItem = async () => {
    const body = {
      description,
      cost,
      quantity,
    };
    try {
      const response = await axios.post("/vendor/items", body);
      console.log(response.data.response);
    } catch (error) {
      console.error("err", error);
      return Promise.reject(error.response.data.response);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const callFunction = addItem();
    toast.promise(
      callFunction,
      {
        loading: "Loading",
        success: "Item added successfully",
        error: (err) => `${err}`,
      },
      {
        style: {
          minWidth: "250px",
        },
      }
    );
    setDescription("");
    setCost("");
    setQuantity("");
  };

  return (
    <div>
      <Heading prompt={"You currently adding an item"} />
      <S.InputFieldDiv>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.Label>Description</S.Label>
          <S.Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Chocolate Chips"
            value={description}
          />
          <S.Label>Cost</S.Label>
          <S.Input
            onChange={(e) => setCost(e.target.value)}
            placeholder="$0.75"
            value={cost}
          />
          <S.Label>Quantity </S.Label>
          <S.Input
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="10"
            value={quantity}
          />
          <S.ButtonDiv>
            <S.SubmitButton type="submit">Add item</S.SubmitButton>
          </S.ButtonDiv>
        </S.Form>
      </S.InputFieldDiv>
      <BackButton />
    </div>
  );
};
