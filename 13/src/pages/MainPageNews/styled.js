import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: darkorange;
  min-height: 100vh;
`;
export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px 20px;
  margin: 5px 0;
  gap: 15px;
  width: 1000px;
`;

export const Wrap = styled.div`
  border-bottom: 1px solid darkorange;
  line-height: 1.5;
`;

export const StyledLink = styled(Link)`
  color: darkorange;
  font-weight: 700;
`;

export const Title = styled.h2``;

export const InfoAuthor = styled.p`
  font-style: italic;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoData = styled.div`
  font-size: 14px;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
