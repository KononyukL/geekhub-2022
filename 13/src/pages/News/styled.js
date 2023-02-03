import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  background: darkorange;
  min-height: 100vh;
`;
export const ContainerWrap = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  max-width: 700px;
  padding: 10px 20px;
  margin: 5px 0;
  gap: 15px;
  width: 1000px;
`;

export const Wrap = styled.div`
  border-bottom: 1px solid darkorange;
  line-height: 1.5;
`;

export const Title = styled.h2``;

export const LinkNews = styled.a`
  font-size: 14px;
`;

export const Author = styled.p`
  font-style: italic;
`;

export const Data = styled.div`
  font-size: 14px;
`;

export const StyledComment = styled.h3`
  display: flex;
`;

export const CommentCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: orange;
  font-size: 12px;
  margin-left: 4px;
`;

export const CommentsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
