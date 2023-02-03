import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNews, selectNews } from '../../store/news';
import { useNavigate, useParams } from 'react-router-dom';
import {
  CommentCount,
  Container,
  ContainerWrap,
  Author,
  Data,
  LinkNews,
  StyledComment,
  Title,
  Wrap,
  CommentsHeader
} from './styled';
import Loader from '../../components/Loader';
import Comment from './Comments';
import { setDefaultChildren } from '../../store/comments';
import Button from '../../components/Button';

const News = () => {
  const { news, isLoading } = useSelector(selectNews);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getNews(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(setDefaultChildren());
    };
  }, []);

  const onUpdateComments = () => {
    dispatch(getNews(id));
  };

  return (
    <Container>
      {isLoading && news.id !== +id ? (
        <Loader />
      ) : (
        <ContainerWrap>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
          <Wrap>
            <Title>
              {news.title}{' '}
              <LinkNews href={news.url} target="_blank">
                &rarr;
              </LinkNews>
            </Title>
            <Author>Author: {news.by}</Author>
            <Data>{new Date(news.time * 1000).toLocaleString()}</Data>
          </Wrap>
          <CommentsHeader>
            <StyledComment>
              Comments:
              <CommentCount>{news.descendants}</CommentCount>
            </StyledComment>
            <Button onClick={onUpdateComments}>Update comments</Button>
          </CommentsHeader>
          {isLoading ? (
            <Loader variant="orange" />
          ) : (
            <>
              {news?.kids?.map((comment, i) => (
                <Comment key={i} comment={comment} />
              ))}
            </>
          )}
        </ContainerWrap>
      )}
    </Container>
  );
};

export default News;
