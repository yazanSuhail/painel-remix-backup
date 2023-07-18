import styled, { css } from "styled-components";
import { device } from "~/theme/devices";

export const Icon = styled.img`
  width: 3rem;
`;

export const Message = styled.div`
  font: normal normal bold 14px/16px UOLtext;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
`;

export const SubMessage = styled.div``;

export const ComponentWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  max-width: 40rem;
  background-color: #ececec;
  border: 1px solid #dddddd;
  animation: slideIn 0.5s forwards;

  @media ${device.mobileRange} {
    margin: auto;
    bottom: 2rem;
    right: 1rem;
    width: 90%;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(100%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`;

export const AlertContainer = styled.div`
  opacity: 1;
  transition: opacity 0.3s ease-in;

  ${ComponentWrapper}:hover & {
    opacity: 2;
  }
`;
