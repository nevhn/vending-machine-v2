import React, { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "../UpdateItem/UpdateItem.style";
import { DeleteButton } from "./DeleteItem.style";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
/**
 *
 * TODO:
 * Start integrating backend into component [x]
 *
 */
export const DeleteItem = () => {
  const [items, setItems] = useState([]);
  const [id, setId] = useState();

  const fetchItems = async () => {
    const response = await axios.get("/customer/items");
    setItems(response.data.response);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = async (id) => {
    try {
      const response = await axios.delete(`/vendor/items/${id}`);
      fetchItems();
    } catch (error) {
      console.error("err", error);
      return Promise.reject(error.response.data.response);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const callFunction = deleteItem(id);
    setId("");
    toast.promise(callFunction, {
      loading: "Loading",
      success: "Item updated successfully",
      error: (err) => `${err}`,
    });
  };
  return (
    <div>
      <Heading prompt={"You are currently deleting an item"} />
      <S.TableDiv>
        <S.Table>
          <S.Tr>
            <S.Th>Id</S.Th>
            <S.Th>Item</S.Th>
          </S.Tr>
          {items.map((item) => (
            <S.HeaderTr>
              <S.Th>{item.id}</S.Th>
              <S.Th>{item.description}</S.Th>
            </S.HeaderTr>
          ))}
          {/* <S.Th>1</S.Th>
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
            <S.Th>Pop-Tarts</S.Th> */}
        </S.Table>
      </S.TableDiv>
      <S.InputDiv>
        <S.Form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <S.InputLabel>ID *</S.InputLabel>
          <S.Input
            onChange={(e) => setId(e.target.value)}
            placeholder="id"
            type={"number"}
            value={id}
          ></S.Input>
          <S.ButtonDiv>
            <DeleteButton type="submit">Delete</DeleteButton>
          </S.ButtonDiv>
        </S.Form>
        <BackButton />
      </S.InputDiv>
    </div>
  );
};
