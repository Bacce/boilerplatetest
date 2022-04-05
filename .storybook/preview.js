import { MainContainer } from '../src/components/Layout';
import '../src/App.css';

const customViewports = {
  LG: {
    name: 'Desktop 1280 (LG: 1280 - 1920)',
    styles: {
      width: '1280px',
      height: '745px',
    },
  },
  MD: {
    name: 'Tablet 768 (MD: 768 - 1279)',
    styles: {
      width: '786px',
      height: '745px',
    },
  },
  SM: {
    name: 'Mobile 360 (SM: 0 - 767)',
    styles: {
      width: '360px',
      height: '745px',
    },
  },
};

export const parameters = {
  layout: 'fullscreen',
  viewport: { viewports: customViewports },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['introduction', 'documentation', 'Components', ['Layout']],
    },
  }
}

export const decorators = [(Story) => <>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  {/* Load fonts here */}
  <MainContainer>
    <Story/>
  </MainContainer>
</>];