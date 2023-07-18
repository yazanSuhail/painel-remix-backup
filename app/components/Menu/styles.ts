import styled, { css } from "styled-components";
import { device } from "~/theme/devices";

interface IActive {
  active: boolean;
}

export const MenuContainer = styled.aside`
  grid-area: aside;
  height: calc(100vh - 6rem);
  padding: 0 1.6rem;

  nav {
    padding-top: 2.6rem;
    display: flex;
    gap: 1rem;
    display: flex;

    justify-items: center;
    flex-direction: column;
    align-items: flex-start;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.9rem;
      color: ${({ theme }) => theme.colors.btnsConcrete};
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      transition: 0.2s all;
      &:hover {
        color: ${({ theme }) => theme.colors.blueLink};
      }
    }
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.span`
  font-size: 28px;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const UserEmail = styled.span`
  color: #666666;

  @media ${device.mobileRange} {
    display: none;
  }
`;

export const CollapseMenuContainer = styled.div`
  cursor: pointer;
  display: flex;
  gap: 1rem;
`;

export const LinkWrraper = styled.div`
  padding-left: 3.3rem;
`;

export const SystemStatusLabel = styled.div`
  color: ${({ theme }) => theme.colors.btnsConcrete};
  width: 100%;
`;
