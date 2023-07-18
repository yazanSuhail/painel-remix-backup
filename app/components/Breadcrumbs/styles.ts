import styled, { css } from "styled-components";
import { device } from "~/theme/devices";

export const BreadcrumbsContainer = styled.div`
  background: #fcfcfc 0% 0% no-repeat padding-box;
  border: 1px solid #e6e6e6;
  margin-top: 65px;
  padding: 1rem;
  @media ${device.desktopRange} {
    background: #fcfcfc 0% 0% no-repeat padding-box;
    border: 1px solid #e6e6e6;
  }

  @media (min-width: 1199px) {
    margin-left: 260px;
    margin-top: 65px;
  }
`;
