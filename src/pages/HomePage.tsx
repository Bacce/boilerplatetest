
import { Col, GridContainer, Hidden, MainContainer } from '../components/Layout';
import { languagesEnum } from "../i18n";
import { useTranslation } from 'react-i18next';
import { Placeholder } from '../components/Placeholder';
import { Spacer } from '../components/Spacer';

export const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
  <MainContainer>
  <GridContainer>
    <Col>
      <p>Language: {i18n && i18n.language}</p>

      <button onClick={()=>i18n.changeLanguage(languagesEnum.esES)}>Spanish</button>
      <button onClick={()=>i18n.changeLanguage(languagesEnum.enGB)}>English</button>
      <p>{t('home.paragraph')}</p>
    </Col>
  </GridContainer>
  <Hidden breakpoints={["sm"]}>
    <p>test only hidden on SM</p>
  </Hidden>
  <GridContainer>
      <Col sm={2} md={4} lg={6}>
        <Spacer size={8} />
        <Placeholder/>
      </Col>
      <Col sm={2} md={4} lg={6}>
        <Placeholder/>
      </Col>
{/* ---- */}
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
{/* ---- */}
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
{/* ---- */}
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
      <Col>
        <Placeholder/>
      </Col>
  </GridContainer>
  </MainContainer>);
}