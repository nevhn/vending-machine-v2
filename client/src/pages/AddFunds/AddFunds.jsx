import React from 'react'
import * as S from './AddFunds.style'

import { Heading } from '../../components/Heading/Heading'
import { BackButton } from '../../components/BackButton/BackButton'
export const AddFunds = () => {
  return (
    <div>
      <Heading prompt={'You are currently adding funds'} />
      <S.InputFieldDiv>
        <S.Form>
          <S.Label>Insert Funds</S.Label>
          <S.Input placeholder="$100" />
          <S.SubmitButton>Add funds</S.SubmitButton>
        </S.Form>
      </S.InputFieldDiv>
      <BackButton />
    </div>
  )
}
