import { languagesEnum } from "../i18n";
import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t, i18n } = useTranslation();

  return (<>
    <p>Language: {i18n && i18n.language}</p>

    <button onClick={()=>i18n.changeLanguage(languagesEnum.esES)}>Spanish</button>
    <button onClick={()=>i18n.changeLanguage(languagesEnum.enGB)}>English</button>
    <p>{t('home.paragraph')}</p>
  </>);
}