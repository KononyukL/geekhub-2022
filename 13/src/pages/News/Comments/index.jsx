import React, { useMemo, useState } from 'react';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { getChildrenComments, selectComments } from '../../../store/comments';
import {
  Author,
  CommentChildrenWrap,
  CommentDelete,
  CommentText,
  Container,
  StyledButton
} from './styled';

const Comment = ({ comment }) => {
  const [showLoader, setShowLoader] = useState(false);
  const { children, isLoading } = useSelector(selectComments);

  const commentChildren = useMemo(() => {
    return children.filter((item) => comment.id === item.parent);
  }, [children, comment.id]);

  const dispatch = useDispatch();

  const onGetChildren = () => {
    dispatch(getChildrenComments(comment.kids));
    setShowLoader(true);
  };

  return (
    <Container>
      {!comment.deleted ? (
        <>
          <Author>{comment.by}</Author>
          <CommentText>{parse(comment.text)}</CommentText>
          {comment.kids?.length && !commentChildren.length && (
            <StyledButton onClick={onGetChildren}>
              {isLoading && showLoader ? 'Loading...' : 'Show all answers'}
            </StyledButton>
          )}
          {commentChildren.map((child, i) => (
            <CommentChildrenWrap key={i}>
              {!child.deleted ? (
                <>
                  <Author>{child.by}</Author>
                  <CommentText>{parse(child.text)}</CommentText>
                </>
              ) : (
                <CommentDelete>Comment was deleted</CommentDelete>
              )}
            </CommentChildrenWrap>
          ))}
        </>
      ) : (
        <CommentDelete>Comment was deleted</CommentDelete>
      )}
    </Container>
  );
};

export default Comment;
