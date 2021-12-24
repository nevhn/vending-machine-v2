import React from 'react'
import * as S from './AddItem.style'
import { Heading } from '../../components/Heading/Heading'
import { BackButton } from '../../components/BackButton/BackButton'

export const AddItem = () => {
  return (
    <div>
      <Heading prompt={'You currently adding an item'} />
      <S.InputFieldDiv>
        <S.Form>
          <S.Label>Description</S.Label>
          <S.Input placeholder="Chocolate Chips" />
          <S.Label>Cost</S.Label>
          <S.Input placeholder="$0.75" />
          <S.Label>quantity </S.Label>
          <S.Input placeholder="10" />
          <S.ButtonDiv>
            <S.SubmitButton type="submit">Add item</S.SubmitButton>
          </S.ButtonDiv>
        </S.Form>
      </S.InputFieldDiv>
      <BackButton />
      {/* <div className="flex items-center justify-center">
        <S.BackLink to="/vendor">Go Back</S.BackLink>
      </div> */}
    </div>
  )
}
