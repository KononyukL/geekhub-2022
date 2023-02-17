import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.primary};
  min-height: 100vh;
  padding-top: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.secondary};
  width: 100%;
  max-width: 600px;
  margin: 20px 0;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 8px;
`;
export const WrapperInfo = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 10px;
`;
export const Info = styled.p`
  font-size: 16px;
`;

export const Img = styled.img`
  width: 30%;
  object-fit: contain;
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 10px;
`;
