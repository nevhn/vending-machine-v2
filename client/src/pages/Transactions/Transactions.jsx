import React, { useState, useEffect } from "react";
import * as S from "./Transactions.style";
import { Heading } from "../../components/Heading/Heading";
import { BackButton } from "../../components/BackButton/BackButton";
import axios from "axios";
/**
 *
 * TODO:
 * Implement backend [x]
 * Fix styling []
 * Fix backend so that it doesn't add null values to transactions
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
    <div>
      <Heading prompt={"You currently seeing all transactions"} />
      <S.TableDiv>
        <S.Table>
          <tr>
            <th>Item</th>
            <th>Cost</th>
            <th>Amount Inserted</th>
            <th>Date of purchase</th>
          </tr>
          {transactions.map((transaction) => (
            <tr>
              <td>{transaction.description}</td>
              <td>{`$${transaction.cost}`}</td>
              <td>{`$${transaction.amount_inserted}`}</td>
              <td>{new Date(transaction.transaction_date).toLocaleString()}</td>
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
    </div>
  );
};
