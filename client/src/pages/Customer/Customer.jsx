import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Item } from "../../components/Item/Item";
import * as S from "./Customer.style";
import endpoint from "../../config";

export const Customer = () => {
  const [items, setItem] = useState([]);
  const [money, setMoney] = useState(0);
  const [change, setChange] = useState(0);

  const fetchItem = async () => {
    // const response = await axios.get("/customer/items");
    const response = await axios.get(`${endpoint}/customer/items`);
    // console.log("items", response.data.response);
    setItem(response.data.response);
  };
  useEffect(() => {
    fetchItem();
  }, []);

  const purchaseItem = async (id) => {
    try {
      // const response = await axios.post(`/customer/items/${id}/${money}`);
      const response = await axios.post(
        `${endpoint}/customer/items/${id}/${money}`
      );
      // console.log(response.data.response);
      setChange(response.data.response.change);
      fetchItem();
    } catch (error) {
      console.log("err", error);
      return Promise.reject(error.response.data.response);
    }
  };
  const handleClick = (id) => {
    console.log(`clicked item with the id: ${id}`);
    console.log(`User inserted: $${money}`);

    if (!money) {
      toast("Add enough money first.", {
        position: "top-center",
        // style: {
        //   border: "1px solid #713200",
        //   padding: "16px",
        //   color: "#713200",
        // },
        icon: "💰",
      });
      return;
    }

    const callFunction = purchaseItem(id);

    /**Toast */
    toast.promise(
      callFunction,
      {
        loading: "Loading",
        success: "Purchase successful",
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
    <S.Container>
      <S.VendingMachine>
        <S.Window>
          {items.map((item) => (
            <button onClick={() => handleClick(item.id)}>
              <Item key={item.id} item={item} money={money} />
            </button>
          ))}
        </S.Window>
        <S.PickupBox>
          <S.DownArrowsSvg />
        </S.PickupBox>
      </S.VendingMachine>
      <S.CustomerInputSection>
        <S.Div>
          <S.Span>
            Money: <S.Amount>${money ? money : "0.00"}</S.Amount>
          </S.Span>
          <S.Span>
            Change: <S.Amount>${change ? change : " 0.00"}</S.Amount>
          </S.Span>
        </S.Div>
        <S.InputDiv>
          <span>
            $
            <S.Input
              onChange={(e) => setMoney(e.target.value)}
              autoFocus
              type="number"
              max="10000.00"
              min="0"
              step="0.01"
              placeholder="insert money here"
            />
          </span>
        </S.InputDiv>
      </S.CustomerInputSection>
    </S.Container>
  );
};
