import styled from 'styled-components';
import Button from '../../../components/Button';

export const Container = styled.div`
  margin: 10px;
  line-height: 1.5;
`;

export const Author = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

export const CommentText = styled.div`
  overflow: auto;
`;

export const CommentChildrenWrap = styled.div`
  padding: 10px;
`;

export const CommentDelete = styled.div`
  font-style: italic;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 10px;
`;
