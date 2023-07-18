import styled, { css } from "styled-components";
import Chip from '@mui/material/Chip';

export const RestorationTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem; 

  & h2 {
    color: ${({ theme }) => theme.colors.btnsConcrete};
    opacity: 1;
    font-size: ${({ theme }) => theme.font.sizes.b1};
    display: inline-block;
  };
`
export const DataGridHeaderNames = styled.div`
  color: ${({ theme }) => theme.colors.titles};
  font-weight: ${({ theme }) => theme.font.bolder};
`
export const StatusChip = styled(Chip)`
  border-radius: 0.25rem !important;
`
export const TableContainer = styled.div`
  margin-top: 1rem;
`
