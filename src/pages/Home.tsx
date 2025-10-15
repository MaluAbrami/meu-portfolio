import React from 'react';
import styled from 'styled-components';
import SkillsCarousel from '../componets/SkillsCarousel';
import Experiences from './Experiences';
import Projects from './Projects';
import { theme } from '../styles/theme';

const ContainerHome = styled.div`
  min-height: 100vh;
  background-color: #0F172A;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 50px;
`;

const Descriptions = styled.p`
  font-size: 1.25rem;
  font-weight: normal;
  color: #ffffff;
`;

const Picture = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  border: 5px solid #ffffff;
  border-radius: 20px;
  display: block;
`;

const ContainerFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;
  text-align: center;
  width: 100%;
  padding: 0 16px;
`;

const ContainerFlexColumn = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Carrosel = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
`;

const Contato = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
`;

const Link = styled.a`
  color: ${theme.colors.primary};
  font-size: 1.25rem;

  &:hover {
    text-decoration: none;
    color: ${theme.colors.text};
    transition: 0.3s ease;
    transform: translateY(-2px);
  }
`;

const Home: React.FC = () => {
  return (
    <ContainerHome id='Sobre'>
      <ContainerFlexRow>
        <ContainerFlexColumn>
          <Title>Bem-vindo ao meu Portfólio!</Title>
          <Descriptions>
          Olá! Meu nome é Maria Luiza Abrami, sou desenvolvedora backend com 20 anos de idade e apaixonada por tecnologia.
          </Descriptions>
          <Descriptions>
          Tenho experiência sólida em desenvolvimento com C#, criando soluções robustas, escaláveis e seguras. Também possuo conhecimento em Java e estou sempre em busca de aprimorar minhas habilidades e aprender novas tecnologias.
          </Descriptions>
          <Descriptions>
          Estou disponível para colaborar em projetos, integrar equipes de desenvolvimento ou assumir novos desafios profissionais. Se você procura alguém comprometido, proativo e com foco em resultados, entre em contato!
          </Descriptions>
        </ContainerFlexColumn>
        <ContainerFlexColumn>
          <Picture src="src/assets/minhaFotoComIA.jpg" alt="Minha Foto" />
          <Descriptions style={{fontSize: '0.6rem'}}>
            Foto gerada por IA
          </Descriptions>
        </ContainerFlexColumn>
      </ContainerFlexRow>

      <ContainerFlexColumn id='Habilidades'>
        <Title>Minhas Habilidades</Title>
        <Carrosel>
          <SkillsCarousel />
        </Carrosel>
      </ContainerFlexColumn>

      <Experiences id={'Experiencia'}/>

      <Projects id={'Projetos'}/>

      <Contato id='Contato'>
        <Title>Contato</Title>
        <Descriptions>
          Estou aberta a novas oportunidades e colaborações. Sinta-se à vontade para entrar em contato comigo através do email ou linkedin:
        </Descriptions>
        <Link href=''>
          marialuizaabrami@gmail.com
        </Link>
        <Link href='https://www.linkedin.com/in/maria-luiza-abrami-617bab330/' target="_blank" rel="noopener noreferrer"> 
          Linkedin
        </Link>
      </Contato>
    </ContainerHome>
  );
};

export default Home;