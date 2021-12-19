import React from "react";
import * as S from "./Heading.style";

export const Heading = ({ prompt }) => {
  return (
    <S.Container>
      <S.HeadingSpan> {prompt}</S.HeadingSpan>
    </S.Container>
  );
};
