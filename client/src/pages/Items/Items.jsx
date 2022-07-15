import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "./Items.style";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
    <S.Container>
      <Heading prompt={"You are currently seeing all items"} />
      <S.TableDiv>
        <S.Table>
          <S.Thead>
            <tr>
              <S.Th>Item</S.Th>
              <S.Th>Cost</S.Th>
              <S.Th>Quantity</S.Th>
            </tr>
          </S.Thead>
          {items.map((item) => (
            <tr>
              <S.TdItem>{item.description}</S.TdItem>
              <S.TdItem>{item.cost}</S.TdItem>
              <S.TdItem>{item.quantity}</S.TdItem>
            </tr>
          ))}
        </S.Table>
      </S.TableDiv>
      <BackButton />
    </S.Container>
  );
};
