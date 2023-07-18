import styled, { css } from "styled-components";
import { device } from "~/theme/devices";

export const ButtonContainer = styled.div`
  border: 1px solid #305dd7;
  border-radius: 2px;
  opacity: 1;
  cursor: pointer;
  color: var(--unnamed-color-305dd7);
  font: normal normal normal 14px/16px UOLtext;
  letter-spacing: 0px;
  color: #305dd7;
  opacity: 1;
  padding: 0.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
`;

export const DropdownContainer = styled.div`
  border: 1px solid #305dd7;
  border-radius: 2px;
  opacity: 1;
  text-align: center;
  cursor: pointer;
  color: var(--unnamed-color-305dd7);
  text-align: left;
  font: normal normal normal 14px/16px UOLtext;
  padding: 0.7rem 0.7rem 0.7rem 1.5rem;
  display: grid;
  gap: 0.7rem;
  position: absolute;
  left: 5rem;
  top: 1.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  width: 244px;
  z-index: 111;
`;

export const FolderItem = styled.div``;

export const Container = styled.div`
  position: absolute;
`;
