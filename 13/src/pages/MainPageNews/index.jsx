import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllNews, selectNewsList } from '../../store/newsList';
import { useInterval } from '../../hooks/useInterval';
import StarRatingComponent from 'react-star-rating-component';
import Loader from '../../components/Loader';
import {
  Box,
  Container,
  ContainerWrap,
  Info,
  InfoAuthor,
  InfoData,
  StyledLink,
  Title,
  Wrap
} from './styled';
import Button from '../../components/Button';

const UPDATE_NEWS_INTERVAL = 60 * 1000;

const NewsList = ({ onGetAllNews }) => {
  const { list: newsList, isLoading } = useSelector(selectNewsList);

  return (
    <Container>
      {isLoading && !newsList.length ? (
        <Loader />
      ) : (
        <ContainerWrap>
          <Box>
            <Title>News</Title>
            <Button onClick={onGetAllNews} disabled={isLoading}>
              Update
            </Button>
          </Box>
          {newsList.map((news, i) => (
            <React.Fragment key={i}>
              {news && (
                <Wrap>
                  <StyledLink to={`news/${news.id}`}>{news.title}</StyledLink>
                  <Info>
                    <InfoAuthor>Author: {news.by}</InfoAuthor>
                    <InfoData>{new Date(news.time * 1000).toLocaleString()}</InfoData>
                  </Info>
                  <StarRatingComponent
                    name="rate2"
                    editing={false}
                    starCount={5}
                    value={news.score}
                  />
                </Wrap>
              )}
            </React.Fragment>
          ))}
        </ContainerWrap>
      )}
    </Container>
  );
};

const MainPageNews = () => {
  const dispatch = useDispatch();

  const onGetAllNews = React.useCallback(() => dispatch(getAllNews()), [dispatch]);

  useInterval(onGetAllNews, UPDATE_NEWS_INTERVAL);

  return <NewsList onGetAllNews={onGetAllNews} />;
};

export default MainPageNews;
