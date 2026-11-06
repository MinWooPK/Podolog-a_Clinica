import { useId } from "react";
import {
  FundingContainer,
  FundingLogos,
  FundingMobileLogos,
  FundingSection,
  FundingText,
  FundingTitle,
} from "./EuropeanFunding.styles";

const mobileLogos = [
  {
    file: "union-europea-cofinanciado-bilingue.png",
    alt: "Cofinanciado por la Unión Europea / Cofinançat per la Unió Europea",
    width: 623,
    height: 196,
  },
  {
    file: "ministerio-hacienda.png",
    alt: "Ministerio de Hacienda",
    width: 724,
    height: 278,
  },
  {
    file: "fondos-europeos-bilingue.svg",
    alt: "Fondos Europeos / Fons Europeus",
    width: 669.33,
    height: 162,
  },
  {
    file: "govern-illes-balears-color.png",
    alt: "Govern de les Illes Balears",
    width: 1063,
    height: 414,
  },
];

export default function EuropeanFunding() {
  const titleId = useId();

  return (
    <FundingSection lang="es" aria-labelledby={titleId}>
      <FundingContainer>
        <FundingTitle id={titleId}>Financiación europea</FundingTitle>
        <FundingText>
          La actividad de la Dra. Rebeca Saludés Llamas ha recibido una ayuda
          cofinanciada por la Unión Europea, a través del Programa FEDER Illes
          Balears 2021-2027, en el marco de la convocatoria CAIB-ISBA 2024-2025,
          destinada a una operación de inversión productiva.
        </FundingText>
        <FundingLogos
          src={`${import.meta.env.BASE_URL}assets/logos-feder-illes-balears-color.png`}
          alt="Cofinanciado por la Unión Europea. Logotipos oficiales de la Unión Europea, Ministerio de Hacienda, Fondos Europeos / Fons Europeus y Govern de les Illes Balears."
          width={2709}
          height={224}
          loading="lazy"
          decoding="async"
        />
        <FundingMobileLogos aria-label="Entidades financiadoras">
          {mobileLogos.map(({ file, alt, width, height }) => (
            <li key={file}>
              <img
                src={`${import.meta.env.BASE_URL}assets/${file}`}
                alt={alt}
                width={width}
                height={height}
                loading="lazy"
                decoding="async"
              />
            </li>
          ))}
        </FundingMobileLogos>
      </FundingContainer>
    </FundingSection>
  );
}
