import styled, { css } from "styled-components";
import { device } from "~/theme/devices";

export const RowLinkButton = styled.a`
  color: ${({ theme }) => theme.colors.blueLink};
  padding-top: 5px;
`;

export const DataGridContainer = styled.div`
  max-width: 1550px;
  height: 40rem;
`;

export const DataGridHeaderNames = styled.div`
  color: ${({ theme }) => theme.colors.titles};
  font-weight: ${({ theme }) => theme.font.bolder};
`;

export const SelectedEmailLink = styled.div<{ selected: boolean }>`
  color: ${({ theme, selected }) =>
    selected ? theme.colors.blueLink : "inherit"};
  font-weight: ${({ theme }) => theme.font.bolder};
  text-decoration: none;
  cursor: pointer;
`;
