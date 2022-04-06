import axios from "axios";
import React, { useEffect, useState } from "react";
import { BackButton } from "../../components/BackButton/BackButton";
import { Heading } from "../../components/Heading/Heading";
import * as S from "./Funds.style";

export const Funds = () => {
  const [funds, setFunds] = useState([]);
  const getFunds = async () => {
    const response = await axios.get("/vendor/funds");
    setFunds(response.data.response);
  };
  useEffect(() => {
    getFunds();
  }, []);
  return (
    <div>
      {/* <Heading
        prompt={'You currently seeing available funds in the vending machine'}
      /> */}
      <S.Container>
        <S.H3>
          Total funds: $<S.Span>{Math.round(funds.total * 100) / 100}</S.Span>
        </S.H3>
      </S.Container>
      {/* <BackButton /> */}
    </div>
  );
};
