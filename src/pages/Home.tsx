import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  height: 100vh;
  background-color: #0F172A;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
`;

const Descriptions = styled.p`
  font-size: 1.25rem;
  font-weight: normal;
  color: #ffffff;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Bem-vindo à Home!</Title>
      <Descriptions>Este é o conteúdo principal da página inicial do seu portfólio.</Descriptions>
      <Descriptions>Você pode adicionar mais seções e conteúdo conforme necessário.</Descriptions>
    </Container>
  );
};

export default Home;