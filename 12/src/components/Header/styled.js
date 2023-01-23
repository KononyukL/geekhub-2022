import styled from 'styled-components';
import { Box, Divider, IconButton } from '@mui/material';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 60px;
  background: ${({ theme }) => theme.headerBg};
  width: 100%;
  padding: 0 16px;
`;

export const MenuBox = styled(Box)`
  background: ${({ theme }) => theme.primary};
`;
export const StyledDivider = styled(Divider)`
  background: ${({ theme }) => theme.secondary};
`;
export const BurgerButton = styled(IconButton)`
  svg {
    color: ${({ theme }) => theme.secondary};
  }
`;
