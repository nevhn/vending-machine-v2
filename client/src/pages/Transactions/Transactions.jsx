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
              <th>Item</th>
              <th>Cost</th>
              <th>Purchased</th>
              <th>Date of purchase</th>
            </tr>
          </S.Thead>
          {transactions.map((transaction) => (
            <tr>
              <S.TdItem>{transaction.description}</S.TdItem>
              <S.TdCost>{`$${transaction.cost}`}</S.TdCost>
              <S.TdPurchase>{`$${transaction.amount_inserted}`}</S.TdPurchase>
              <S.TdDate>
                {new Date(transaction.transaction_date).toLocaleString()}
              </S.TdDate>
            </tr>
          ))}
          {/* <tr>
            <td>Chips</td>
            <td>$1.00</td>
            <td>$2.00</td>
            <td>11/13/1990</td>
          </tr>
          <tr>
            <td>Chips</td>
            <td>$1.00</td>
            <td>$2.00</td>
            <td>11/13/1990</td>
          </tr>
          <tr>
            <td>Chips</td>
            <td>$1.00</td>
            <td>$2.00</td>
            <td>11/13/1990</td>
          </tr> */}
        </S.Table>
      </S.TableDiv>
      <BackButton />
    </S.Container>
  );
};
