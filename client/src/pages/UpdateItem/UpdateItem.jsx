import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "./UpdateItem.style";
import toast from "react-hot-toast";
import endpoint from "../../config";

export const UpdateItem = () => {
  /**TODO:
   [ * ] Add description, cost, quantity input fields
   * Fix padding and make it look decent for all breakpoints
   [ * ] Finish adding functionality -> const [description, setDescription]
   3/24/22 - check for logic problems / test things like inputs
   */
  const [items, setItems] = useState([]);
  const [id, setId] = useState();
  const [description, setDescription] = useState();
  const [cost, setCost] = useState();
  const [quantity, setQuantity] = useState();

  const fetchItems = async () => {
    // const response = await axios.get("/customer/items");
    const response = await axios.get(`${endpoint}/customer/items`);
    console.log("items", response.data.response);
    setItems(response.data.response);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const updateItem = async (id) => {
    try {
      const body = {
        description,
        cost,
        quantity,
      };
      // const response = await axios.put(`/vendor/items/${id}`, body);
      const response = await axios.put(`${endpoint}/vendor/items/${id}`, body);
      console.log(response.data.response);
      fetchItems();
    } catch (error) {
      console.error("err", error);
      return Promise.reject(error.response.data.response);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const callFunction = updateItem(id);
    toast.promise(
      callFunction,
      {
        loading: "Loading",
        success: "Item updated successfully",
        error: (err) => `${err}`,
      },
      {
        style: {
          minWidth: "250px",
        },
      }
    );
  };
  return (
    <div>
      <Heading prompt={"You are updating an item"} />
      <S.TableDiv>
        <S.Table>
          <S.Tr>
            <S.Th>Id</S.Th>
            <S.Th>Item</S.Th>
            <S.Th>Cost</S.Th>
            <S.Th>Quantity</S.Th>
          </S.Tr>
          {items.map((item) => (
            <S.HeaderTr>
              <S.Th>{item.id}</S.Th>
              <S.Th>{item.description}</S.Th>
              <S.Th>{item.cost}</S.Th>
              <S.Th>{item.quantity}</S.Th>
            </S.HeaderTr>
          ))}
        </S.Table>
      </S.TableDiv>
      <S.InputDiv>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.InputLabel>ID*</S.InputLabel>
          <S.Input
            onChange={(e) => setId(e.target.value)}
            placeholder="id"
            type="number"
            min="0"
            required
          ></S.Input>
          <S.InputLabel>Description</S.InputLabel>
          <S.Input
            onChange={(e) => setDescription(e.target.value)}
            placeholder="description"
            type="text"
            pattern="^[a-zA-Z\s]*$"
          ></S.Input>
          <S.InputLabel>Cost</S.InputLabel>
          <S.Input
            onChange={(e) => setCost(e.target.value)}
            type="number"
            placeholder="cost"
            max="10000.00"
            min="0"
            step="0.01"
          ></S.Input>
          <S.InputLabel>Quantity</S.InputLabel>
          <S.Input
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="quantity"
            type="number"
            min="1"
          ></S.Input>
          <S.ButtonDiv>
            <S.UpdateButton type="submit">Update</S.UpdateButton>
          </S.ButtonDiv>
        </S.Form>
        <BackButton />
      </S.InputDiv>
    </div>
  );
};
