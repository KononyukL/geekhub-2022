import React from 'react';
import { Button, Container, NavigationLink, NavigationWrap } from './styled';

const Navigation = ({ toggleTheme, isMobile }) => {
  return (
    <Container isMobile={isMobile}>
      <NavigationWrap isMobile={isMobile}>
        <NavigationLink>Docs</NavigationLink>
        <NavigationLink>Contacts</NavigationLink>
        <NavigationLink>About us</NavigationLink>
        <NavigationLink>Blog</NavigationLink>
      </NavigationWrap>
      <Button onClick={toggleTheme}>Theme switcher</Button>
    </Container>
  );
};

export default Navigation;
