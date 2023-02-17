import React, { useCallback, useEffect, useState } from 'react';
import { Container, Img, Info, Title, Wrapper, WrapperInfo } from './styled';
import { peopleApi } from '../../api/people';
import Loader from '../Loader';
import avatar from '../../assets/icon/avatar.png';
import { IPeople } from '../../api/people/types';

const Main = () => {
  const [people, setPeople] = useState<IPeople[]>([]);
  const [loader, setLoader] = useState(false);

  const getPeople = useCallback(async () => {
    try {
      setLoader(true);
      const peopleList = await peopleApi.people();

      setPeople(peopleList);
    } catch (e) {
      console.error(e);
    } finally {
      setLoader(false);
    }
  }, []);

  useEffect(() => {
    if (!people.length) {
      getPeople();
    }
  }, [getPeople, people]);

  return (
    <Container>
      {loader ? (
        <Loader />
      ) : (
        people.map((person, i) => (
          <Wrapper key={i}>
            <Img src={avatar} alt="avatar" />
            <WrapperInfo>
              <Info>
                <Title> Name:</Title>
                {person.name}
              </Info>
              <Info>
                <Title> Height:</Title>
                {person.height}
              </Info>
              <Info>
                <Title> Mass:</Title>
                {person.mass}
              </Info>
              <Info>
                <Title> Hair color:</Title>
                {person.hair_color}
              </Info>
              <Info>
                <Title> Skin color:</Title>
                {person.skin_color}
              </Info>
              <Info>
                <Title> Birth year:</Title>
                {person.birth_year}
              </Info>
            </WrapperInfo>
          </Wrapper>
        ))
      )}
    </Container>
  );
};

export default Main;
