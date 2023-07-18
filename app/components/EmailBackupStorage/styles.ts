import styled, { css } from "styled-components";
import { device } from "~/theme/devices";

export const Title = styled.div`
  color: ${({ theme }) => theme.colors.btnsConcrete};
  opacity: 1;
  font-size: ${({ theme }) => theme.font.sizes.h5};
  display: inline-block;
`;

export const BtnContainer = styled.div`
  @media ${device.desktopRange} {
    color: ${({ theme }) => theme.colors.btnsConcrete};
    opacity: 1;
    font-size: ${({ theme }) => theme.font.sizes.h5};
    display: flex;
    gap: 1rem;
    padding-top: 2rem;
  }
`;

export const TableContainer = styled.div`
  padding-top: 2rem;
`;

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
