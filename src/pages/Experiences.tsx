import styled from 'styled-components';
import { theme } from '../styles/theme';

const Container = styled.div`
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: ${theme.colors.text};
    margin-bottom: 20px;
`;

const Descriptions = styled.p`
    font-size: 1.25rem;
    font-weight: normal;
    color: ${theme.colors.textSecondary};
    max-width: 600px;
    margin: 0 20px;
`;

const Experiences: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Container id={id}>
      <Title>Minhas Experiências</Title>
      <Descriptions>
        Aqui você pode descrever suas experiências profissionais, estágios ou projetos relevantes.
      </Descriptions>
    </Container>
  );
};

export default Experiences;
