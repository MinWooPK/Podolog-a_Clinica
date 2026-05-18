import {
  Section,
  Container,
  Eyebrow,
  Title,
  Description,
  ImageWrapper,
  CTA,
  Grid,
  Card,
  CardTitle,
  CardText,
  MetaBlock,
  MetaItem,
  Divider,
} from "./Investigacion.styles";

import ImgInvestigacion from "@assets/img/Investigacion.jpeg";

const Investigacion: React.FC = () => {
  return (
    <Section>
      <Container>
        {/* HEADER CIENTÍFICO */}
        <Eyebrow>Investigación · Biomecánica · Psicosomática</Eyebrow>

        <Title>
          Investigación aplicada al sistema musculoesquelético humano
        </Title>

        <Description>
          Mi línea de trabajo integra biomecánica clínica, análisis estructural
          y modelos de interpretación psicosomática desde un enfoque
          interdisciplinar. El objetivo es comprender la relación entre
          estructura, función y adaptación del cuerpo humano en diferentes
          contextos de carga, movimiento y estrés.
        </Description>

        {/* MARCO METODOLÓGICO */}
        <MetaBlock>
          <MetaItem>
            <strong>Enfoque:</strong> Biomecánica + Psicosomática + Clínica
            funcional
          </MetaItem>

          <MetaItem>
            <strong>Unidad de análisis:</strong> Sistema musculoesquelético en
            carga y reposo
          </MetaItem>

          <MetaItem>
            <strong>Objetivo:</strong> Modelización de adaptación estructural y
            prevención de disfunciones
          </MetaItem>
        </MetaBlock>

        <Divider />

        {/* LÍNEAS DE INVESTIGACIÓN */}
        <Grid>
          <Card>
            <CardTitle>
              01 · Salud psicosomática y estructura del sujeto
            </CardTitle>
            <CardText>
              Estudio de la inscripción somática de procesos psíquicos desde una
              perspectiva psicoanalítica estructural. El cuerpo es interpretado
              como sistema de manifestación de conflictos, defensas y
              adaptaciones inconscientes.
            </CardText>
          </Card>

          <Card>
            <CardTitle>02 · Alineación sagital y control postural</CardTitle>
            <CardText>
              Análisis de la variabilidad de la columna vertebral en plano
              sagital y su relación con el equilibrio dinámico, la eficiencia
              mecánica y la distribución de cargas en bipedestación.
            </CardText>
          </Card>

          <Card>
            <CardTitle>03 · Factores de inestabilidad biomecánica</CardTitle>
            <CardText>
              Evaluación de variables antropométricas, composición corporal y
              patrones de movimiento que alteran el centro de gravedad y generan
              compensaciones estructurales.
            </CardText>
          </Card>

          <Card>
            <CardTitle>
              04 · Degeneración musculoesquelética y adaptación
            </CardTitle>
            <CardText>
              Estudio longitudinal de la relación entre desalineaciones
              estructurales, movilidad articular y procesos degenerativos del
              sistema musculoesquelético.
            </CardText>
          </Card>
        </Grid>

        {/* IMAGEN CIENTÍFICA */}
        <ImageWrapper>
          <img src={ImgInvestigacion} alt="Research biomechanics analysis" />
        </ImageWrapper>

        {/* FOOTER CIENTÍFICO */}
        <Divider />

        <Description>
          Consulta mis publicaciones y proyectos de investigación completos en
          mi perfil oficial:
        </Description>

        {/* CTA ACADÉMICO */}
        <CTA
          href="https://www.researchgate.net"
          target="_blank"
          rel="noreferrer"
        >
          Acceder a publicaciones científicas
        </CTA>
      </Container>
    </Section>
  );
};

export default Investigacion;
