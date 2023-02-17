import styled, { css } from 'styled-components';
import { ITheme } from '../../theme';

export const Container = styled.div<{ isMobile?: boolean }>`
  display: flex;
  align-items: center;

  ${({ isMobile }) => css`
    flex-direction: ${isMobile && 'column'};
    row-gap: ${isMobile && '16px'};
  `}
`;
export const NavigationWrap = styled.nav<{ isMobile?: boolean }>`
  display: flex;
  gap: 16px;
  min-width: 300px;

  ${({ isMobile }) => css`
    align-items: ${isMobile && 'center'};
    flex-direction: ${isMobile && 'column'};
  `}
`;
export const NavigationLink = styled.a`
  color: ${({ theme }: ITheme) => theme.secondary};
  font-weight: 600;
  cursor: pointer;
`;

export const Button = styled.button`
  background: ${({ theme }: ITheme) => theme.backgroundBtn};
  color: ${({ theme }: ITheme) => theme.primary};
  outline: none;
  box-shadow: none;
  width: 150px;
  height: 36px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
`;
