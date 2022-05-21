import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "./Items.style";
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
    <>
      <Heading prompt={"You are currently seeing all items"} />
      <S.TableDiv>
        <S.Table>
          <S.THead>
            <S.Tr>
              <S.Th>Item</S.Th>
              <S.Th>Cost</S.Th>
              <S.Th>Quantity</S.Th>
            </S.Tr>
          </S.THead>
          <S.TBody>
            {items.map((item) => (
              <S.TBodyTr>
                <S.TBodyTd>{item.description}</S.TBodyTd>
                <S.TBodyTd>{item.cost}</S.TBodyTd>
                <S.TBodyTd>{item.quantity}</S.TBodyTd>
              </S.TBodyTr>
            ))}
          </S.TBody>
        </S.Table>
      </S.TableDiv>
      <BackButton />
    </>
  );
};
