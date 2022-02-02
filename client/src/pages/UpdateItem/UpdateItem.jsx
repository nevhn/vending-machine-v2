import React, { useEffect, useState } from "react";
import axios from "axios";
import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "./UpdateItem.style";
import toast from "react-hot-toast";

export const UpdateItem = () => {
  /**TODO:
   * Add description, cost, quantity input fields
   * Fix padding and make it look decent for all breakpoints
   * Finish adding functionality -> const [description, setDescription]
   */
  const [items, setItems] = useState([]);
  const [id, setId] = useState();
  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get("/customer/items");
      console.log("items", response.data.response);
      setItems(response.data.response);
    };
    fetchItem();
  }, []);
  const updateItem = async (id) => {
    try {
      const response = await axios.put(`/vendor/items/${id}`);
      console.log(response.data.response);
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
          {/* <S.HeaderTr>
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
          </S.HeaderTr> */}
        </S.Table>
      </S.TableDiv>
      <S.InputDiv>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          <S.InputLabel>Update item</S.InputLabel>
          <S.Input
            onChange={(e) => setId(e.target.value)}
            placeholder="id"
            type={"number"}
            min="0"
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
