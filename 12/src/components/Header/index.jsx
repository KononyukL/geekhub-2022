import React, { useState } from 'react';
import { BurgerButton, Container, MenuBox, StyledDivider } from './styled';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { ReactComponent as Logo } from '../../assets/icon/star-wars.svg';
import { useMediaQuery, Drawer } from '@mui/material';
import Navigation from '../Navigation';

const Header = ({ toggleTheme }) => {
  const matches = useMediaQuery('(min-width:767px)');
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(open);
  };
  return (
    <Container>
      <Logo width={60} height={60} />
      {matches ? (
        <Navigation toggleTheme={toggleTheme} />
      ) : (
        <>
          <BurgerButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}>
            <MenuIcon />
          </BurgerButton>
          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
            onOpen={toggleDrawer(true)}>
            <MenuBox
              sx={{
                p: 2,
                height: 1
              }}>
              <BurgerButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </BurgerButton>
              <StyledDivider sx={{ mb: 2 }} />
              <Navigation toggleTheme={toggleTheme} isMobile />
            </MenuBox>
          </Drawer>
        </>
      )}
    </Container>
  );
};

export default Header;
