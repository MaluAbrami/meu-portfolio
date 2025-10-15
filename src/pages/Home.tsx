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

const Picture = styled.img`
  width: 150px;
  border-radius: 50%;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-align: center;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Title>Bem-vindo ao meu Portfólio!</Title>
      <HomeContainer>
        <Picture src="src/assets/minhaFotoComIA.jpg" alt="Minha Foto" />
        <Descriptions>
        Olá! Meu nome é Maria Luiza Abrami, sou desenvolvedora backend com 20 anos de idade e apaixonada por tecnologia.
        </Descriptions>
        <Descriptions>
        Tenho experiência sólida em desenvolvimento com C#, criando soluções robustas, escaláveis e seguras. Também possuo conhecimento em Java e estou sempre em busca de aprimorar minhas habilidades e aprender novas tecnologias.
        </Descriptions>
        <Descriptions>
        Estou disponível para colaborar em projetos, integrar equipes de desenvolvimento ou assumir novos desafios profissionais. Se você procura alguém comprometido, proativo e com foco em resultados, entre em contato!
        </Descriptions>
      </HomeContainer>
    </Container>
  );
};

export default Home;