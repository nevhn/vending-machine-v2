import React from 'react'
import { BackButton } from '../../components/BackButton/BackButton'
import { Heading } from '../../components/Heading/Heading'
import * as S from './Funds.style'

export const Funds = () => {
  return (
    <div>
      <Heading
        prompt={'You currently seeing available funds in the vending machine'}
      />
      <S.Container>
        <S.H3>
          Total:$<S.Span>100</S.Span>
        </S.H3>
      </S.Container>
      <BackButton />
    </div>
  )
}
