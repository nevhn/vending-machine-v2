import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "../UpdateItem/UpdateItem.style";

export const Items = () => {
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    try {
      const response = await axios.get("/customer/items");
      setItems(response.data.response);
    } catch (error) {
      console.error("err", error);
      return Promise.reject(error.response.data.response);
    }
  };
  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div>
      <Heading prompt={"You are currently seeing all items"} />
      <S.TableDiv>
        <S.Table>
          <S.Tr>
            <S.Th>Item</S.Th>
            <S.Th>Cost</S.Th>
            <S.Th>Quantity</S.Th>
          </S.Tr>
          {items.map((item) => (
            <S.HeaderTr>
              <S.Th>{item.description}</S.Th>
              <S.Th>{item.cost}</S.Th>
              <S.Th>{item.quantity}</S.Th>
            </S.HeaderTr>
          ))}
        </S.Table>
      </S.TableDiv>
      <BackButton />
    </div>
  );
};
