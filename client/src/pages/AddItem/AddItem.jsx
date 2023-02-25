import React, { useState } from "react";
import axios from "axios";
import * as S from "./AddItem.style";
import { Heading } from "../../components/Heading/Heading";
import { BackButton } from "../../components/BackButton/BackButton";
import toast from "react-hot-toast";
import endpoint from "../../config";

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
      // const response = await axios.post("/vendor/items", body);
      const response = await axios.post(`${endpoint}/vendor/items`, body);
      // console.log(response.data.response);
    } catch (error) {
      console.error("err", error);
      return Promise.reject(error.response.data.response);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cost === "0" || quantity === "0")
      return toast.error("value cannot be zero");
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
          <S.Label>Description *</S.Label>
          <S.Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Chocolate Chips"
            type="text"
            value={description}
            required
            pattern="^[a-zA-Z\s]*$"
            title="Please enter name of item."
          />
          <S.Label>Cost *</S.Label>
          <S.Input
            onChange={(e) => setCost(e.target.value)}
            type="number"
            placeholder="$0.75"
            value={cost}
            max="10000.00"
            min="0"
            step="0.01"
            required
          />
          <S.Label>Quantity *</S.Label>
          <S.Input
            onChange={(e) => setQuantity(e.target.value)}
            type="number"
            placeholder="10"
            min="0"
            value={quantity}
            required
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
