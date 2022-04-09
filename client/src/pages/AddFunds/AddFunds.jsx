import React, { useEffect, useState } from "react";
import * as S from "./AddFunds.style";
import { Heading } from "../../components/Heading/Heading";
import { BackButton } from "../../components/BackButton/BackButton";
import toast from "react-hot-toast";
import { Funds } from "../Funds/Funds";
import axios from "axios";

/**
 *
 * TODO:
 * Input validation: prevent zero from being allowed
 * erase this ; replace this with fetch items page
 */
export const AddFunds = () => {
  const [total, setTotal] = useState();
  const [funds, setFunds] = useState([]);

  const getFunds = async () => {
    try {
      const response = await axios.get("/vendor/funds");
      setFunds(response.data.response);
    } catch (error) {
      console.error("err", error);
      return Promise.reject(error.response.data.response);
    }
  };
  useEffect(() => {
    getFunds();
  }, []);

  const addFunds = async () => {
    const body = {
      total,
    };
    try {
      const response = await axios.put("/vendor/funds", body);
      getFunds();
    } catch (error) {
      console.error("err", error);
      return Promise.reject(error.response.data.response);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const callFunction = addFunds();
    toast.promise(
      callFunction,

      {
        loading: "Loading",
        success: "Funds added successfully",
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
      <Heading prompt={"You are currently adding funds"} />
      <S.FundsContainer>
        <S.H3>
          Total funds: $<S.Span>{Math.round(funds.total * 100) / 100}</S.Span>
        </S.H3>
      </S.FundsContainer>
      <S.InputFieldDiv>
        <S.Form onSubmit={(e) => handleSubmit(e)}>
          {/* <Funds /> */}
          <S.Label>Insert Funds *</S.Label>
          <S.Input
            onChange={(e) => setTotal(e.target.value)}
            type="number"
            placeholder="$100"
            value={total}
            autoFocus
            max="10000.00"
            min="0.01"
            step="0.01"
            required
          />
          <S.SubmitButton type="submit">Add funds</S.SubmitButton>
        </S.Form>
      </S.InputFieldDiv>
      <BackButton />
    </div>
  );
};
