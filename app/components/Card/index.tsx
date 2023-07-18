import React, { ReactNode } from "react";
import * as S from "./styles";

export interface ICardProps {
  children: ReactNode;
}

function Card({ children }: ICardProps) {
  return <S.ContentWrapper>{children}</S.ContentWrapper>;
}

export default Card;
