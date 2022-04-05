
import { Col, GridContainer, Hidden, MainContainer } from '../components/Layout';
import { languagesEnum } from "../i18n";
import { useTranslation } from 'react-i18next';
import { Placeholder } from '../components/Placeholder';
import { Spacer } from '../components/Spacer';
import { FeatureToggle } from "../components/FeatureToggle";
import { featuresEnum } from "../enums/featuresEnum";

export const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (
  <MainContainer>
    <FeatureToggle feature={featuresEnum.FEATURE_1} offTemplate={<div>Feature 1 off</div>}>
      <div>Feature 1 is enabled</div>
    </FeatureToggle>
    <FeatureToggle feature={featuresEnum.FEATURE_2} offTemplate={<div>Feature 2 off</div>}>
      <div>Feature 2 is enabled</div>
    </FeatureToggle>
    <FeatureToggle feature={featuresEnum.FEATURE_3} offTemplate={<div>Feature 3 off</div>}>
      <div>Feature 3 is enabled</div>
    </FeatureToggle>
    <FeatureToggle feature={featuresEnum.FEATURE_4} offTemplate={<div>Feature 4 off</div>}>
      <div>Feature 4 is enabled</div>
    </FeatureToggle>

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