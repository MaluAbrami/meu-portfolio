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

const ExperienceCard = styled.div`
    background: rgba(255, 255, 255, 0.03);
    border-radius: 12px;
    padding: 20px;
    margin: 10px 0;
    width: 100%;
    max-width: 600px;
    min-height: 600px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: start;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    gap: 10px;
`;

const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.colors.textSecondary};
    margin: 0 20px;
`;

const ExperienceTimeDescription = styled.p`
    font-size: 1rem;
    font-weight: italic;
    color: ${theme.colors.textSecondary};
    margin: 0 20px;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 16px;
    gap: 24px;
    margin-top: 20px;
`;

const ExperienceTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
    height: 100px;
    gap: 16px;
    margin-top: 20px;
    margin-bottom: 30px;
`;

const Experiences: React.FC<{ id: string }> = ({ id }) => {
  return (
    <Container id={id}>
        <Title>Minhas Experiências</Title>
        <Descriptions>
            Aqui você pode descrever suas experiências profissionais, estágios ou projetos relevantes.
        </Descriptions>

        <CardsContainer>
            <ExperienceCard>
                <ExperienceTitleContainer>
                    <SubTitle>Estágio em Desenvolvimento Backend - GFT Technologies</SubTitle>
                    <ExperienceTimeDescription>
                        Janeiro 2025 - Agosto 2025  
                    </ExperienceTimeDescription>
                </ExperienceTitleContainer>
                <Descriptions>
                    Durante meu estágio na GFT Technologies, trabalhei com desenvolvimento backend utilizando C# e .NET. Participei de projetos que envolviam a criação de APIs RESTful, integração com bancos de dados, implementação de testes unitários, conteinerização de microserviços com Docker, comunicação assíncrona entre microserviços com RabbitMQ, DDD, CQRS, entre outras tecnologias. Essa experiência me proporcionou um aprendizado significativo sobre boas práticas de desenvolvimento e trabalho em equipe.
                </Descriptions>
            </ExperienceCard>

            <ExperienceCard>
                <ExperienceTitleContainer>
                    <SubTitle>Desenvolvedora Backend - GFT Technologies</SubTitle>
                    <ExperienceTimeDescription>
                        Setembro 2025 - Presente  
                    </ExperienceTimeDescription>
                </ExperienceTitleContainer>
                <Descriptions>
                    Atualmente, atuo como desenvolvedora backend na GFT Technologies, onde continuo a aprimorar minhas habilidades em C# e .NET. Estou envolvida em projetos desafiadores que exigem soluções escaláveis e eficientes. Minha função inclui o desenvolvimento de novas funcionalidades, manutenção de sistemas existentes, integração com sistemas legados, migração de sistemas legados para novas tecnologias e colaboração com equipes multifuncionais para garantir a entrega de produtos de alta qualidade.
                </Descriptions>
            </ExperienceCard>
        </CardsContainer>
    </Container>
  );
};

export default Experiences;
