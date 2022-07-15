import React, { useState, useEffect } from "react";
import * as S from "./Transactions.style";
import { Heading } from "../../components/Heading/Heading";
import { BackButton } from "../../components/BackButton/BackButton";
import axios from "axios";
/**
 *
 * TODO:
 * Implement backend [x]
 * Fix backend so that it doesn't add null values to transactions [x]
 * Fix styling []
 *
 */

export const Transactions = () => {
  const [transactions, setTransactions] = useState([]);
  const fetchTransactions = async () => {
    const response = await axios.get("/vendor/transactions");
    setTransactions(response.data.response);
  };
  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <S.Container>
      <Heading prompt={"You currently seeing all transactions"} />
      <S.TableDiv>
        <S.Table>
          <S.Thead>
            <tr>
              <S.Th>Item</S.Th>
              <S.Th>Cost</S.Th>
              <S.Th>Purchased</S.Th>
              <S.Th>Date of purchase</S.Th>
            </tr>
          </S.Thead>
          {transactions.map((transaction) => (
            <tr>
              <S.TdItem>{transaction.description}</S.TdItem>
              <S.TdItem>{`$${transaction.cost}`}</S.TdItem>
              <S.TdItem>{`$${transaction.amount_inserted}`}</S.TdItem>
              <S.TdDate>
                {new Date(transaction.transaction_date).toLocaleString()}
              </S.TdDate>
            </tr>
          ))}
        </S.Table>
      </S.TableDiv>
      <BackButton />
    </S.Container>
  );
};
