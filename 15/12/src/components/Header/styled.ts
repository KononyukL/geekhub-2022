import styled from 'styled-components';
import { Box, Divider, IconButton } from '@mui/material';
import { ITheme } from '../../theme';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 60px;
  background: ${({ theme }: ITheme) => theme.headerBg};
  width: 100%;
  padding: 0 16px;
`;

export const MenuBox = styled(Box)`
  background: ${({ theme }: ITheme) => theme.primary};
`;
export const StyledDivider = styled(Divider)`
  background: ${({ theme }: ITheme) => theme.secondary};
`;
export const BurgerButton = styled(IconButton)`
  svg {
    color: ${({ theme }: ITheme) => theme.secondary};
  }
`;
