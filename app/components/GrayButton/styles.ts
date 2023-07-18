import styled, { css } from "styled-components";
import { device } from "~/theme/devices";

export const MobileGrayButton = styled.button`
  color: ${({ theme }) => theme.colors.blueLink};
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  outline: none;
  background-color: #eaeaea;
  border: none;
  border-radius: 2px;
  box-shadow: 0 2px #b8b8b8;
  width: 43px;
  height: 35px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
  &:hover {
    background-color: #eaeaea;
  }

  &:active {
    background-color: #eaeaea;
    box-shadow: 0 2px #999;
    transform: translateY(1px);
  }
`;

export const DesktopGrayButton = styled.button`
  @media ${device.allDevicesBeforeTablet} {
    display: none;
  }

  @media ${device.desktopRange} {
    color: ${({ theme }) => theme.colors.blueLink};
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    outline: none;
    background-color: #eaeaea;
    border: none;
    border-radius: 2px;
    box-shadow: 0 2px #b8b8b8;
    width: 102px;
    height: 31px;
    font-size: 14px;
    display: flex;
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
  }
`;

export const MobileButtonContainer = styled.div`
  @media ${device.tabletRange} {
    display: none;
  }

  @media ${device.desktopRange} {
    display: none;
  }

  display: flex;
  justify-content: flex-start;
  align-items: center;
  > div {
    padding-left: 1rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.blueLink};
  }
`;
