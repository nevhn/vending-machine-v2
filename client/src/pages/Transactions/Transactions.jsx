import React from "react";
import * as S from "./Transactions.style";
import { Heading } from "../../components/Heading/Heading";
import { BackButton } from "../../components/BackButton/BackButton";

/**
 *
 * TODO:
 * Implement backend []
 */
export const Transactions = () => {
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
          </tr>
          <tr>
            <td>Chips</td>
            <td>$1.00</td>
            <td>$2.00</td>
            <td>11/13/1990</td>
          </tr>
        </S.Table>
      </S.TableDiv>
      <BackButton />
    </div>
  );
};
