// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/${userData.githubUser}?tab=repositories`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Oi, meu nome é {userData.nameUser}</Text>
            </Flex>
            <Text type="body1" color="grey2">
              Sou um desenvolvedor apaixonado por transformar ideias em
              realidade através do poder do código. Ao longo do ano, adquiri um
              conjunto de habilidades e conhecimentos, permitindo-me criar
              soluções inovadoras e eficientes.
            </Text>

            <Text type="body1" color="grey2">
              Minha jornada no mundo do desenvolvimento começou há um ano, e
              desde então tenho me dedicado a expandir constantemente meu
              conhecimento e aprimorar minhas habilidades técnicas. Minha
              formação em Desenvolvimento Full Stack no curso técnico Kenzie
              Academy Brasil me proporcionou uma base sólida em conceitos
              fundamentais.
            </Text>
            
            <Text type="body1" color="grey2">
              Estou sempre em busca de novos desafios e oportunidades
              emocionantes de colaborar em projetos interessantes. Se você está
              procurando um desenvolvedor que traga criatividade, habilidades
              técnicas sólidas e comprometimento com a excelência, vamos
              trabalhar juntos para transformar suas ideias em realidade!
            </Text>

            <Text as="h1" type="heading1" color="grey5">
              I{" "}
              <Text as="span" type="heading1" color="brand1">
                love
              </Text>{" "}
              creating and{" "}
              <Text as="span" type="heading1" color="brand1">
                developing
              </Text>{" "}
              projects
            </Text>

            <Text type="body1" color="grey2">
              Conheça aqui neste ambiente, criado especialmente para você, todos
              os meus projetos e tecnologias
            </Text>

            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                Ver Projetos
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                Ver meu repositório do GitHub
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey4">
                Meus Projetos
              </Text>
              <Text as="p" type="body1" color="grey2">
                Aqui está alguns projetos que construi durante minha jornada{" "}
                <Text as="span" color="brand5">
                  na Kenzie Academy Brasil
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
