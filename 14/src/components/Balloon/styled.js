import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  display: inline-block;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;
export const StyledBalloon = styled.div.attrs((props) => props)`
  width: 60px;
  height: 70px;
  border-radius: 50%;
  border: none;
  background-color: ${({ color }) => color};
`;
