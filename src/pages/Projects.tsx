import styled from "styled-components";

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
    color: #ffffff;
    margin-bottom: 20px;
`;

const Descriptions = styled.p`
    font-size: 1.25rem;
    font-weight: normal;
    color: #ffffff;
    max-width: 600px;
    margin: 0 20px;
`;

const Projects: React.FC<{id : string}> = ({id}) => {
  return (
    <Container id={id}>
        <Title>Meus Projetos</Title>
        <Descriptions>
            Aqui você pode descrever alguns dos seus projetos mais importantes, com links para repositórios ou demonstrações.
        </Descriptions>
    </Container>
  );
};

export default Projects;