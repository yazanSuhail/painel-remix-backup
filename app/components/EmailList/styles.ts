import styled, { css } from "styled-components";
import { device } from "~/theme/devices";

import { search } from "~/assets/Icons";

export const Title = styled.div`
  display: none;
  @media ${device.desktopRange} {
    color: ${({ theme }) => theme.colors.btnsConcrete};
    opacity: 1;
    font-size: ${({ theme }) => theme.font.sizes.h5};
    display: inline-block;
  }
`;

export const BtnContainer = styled.div`
  width: 13.313rem;
  padding-top: 1rem;
  position: relative;
`;

export const ContentContainer = styled.div`
  padding-top: 3rem;
`;

export const Email = styled.div`
  text-align: left;
  font: normal normal bold 18px/21px UOLtext;
  letter-spacing: 0px;
  color: ${({ theme }) => theme.colors.titles};
  opacity: 1;
  padding: 1rem 0 1rem 0;
`;

export const SearchContainer = styled.div`
  max-width: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const SearchButton = styled.button`
  background-image: url(${search});
  background-size: 25px auto;
  background-repeat: no-repeat;
  background-position: center;
  color: #305dd7;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: #eaeaea;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px #b8b8b8;
  width: 48px;
  height: 47px;
  font-size: 14px;
  display: flex;
  margin-top: -5px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #eaeaea;
  }

  &:active {
    background-color: #eaeaea;
    box-shadow: 0 2px #999;
    transform: translateY(1px);
  }
`;
