import { render } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('HomePage Component', () => {    
    beforeEach(()=>{
        // https://jestjs.io/docs/manual-mocks#mocking-methods-which-are-not-implemented-in-jsdom
        Object.defineProperty(window, 'matchMedia', {
            writable: true,
            value: jest.fn().mockImplementation(query => ({
              matches: false,
              media: query,
              onchange: null,
              addListener: jest.fn(), // deprecated
              removeListener: jest.fn(), // deprecated
              addEventListener: jest.fn(),
              removeEventListener: jest.fn(),
              dispatchEvent: jest.fn(),
            })),
          });
    });

    it('should render', ()=>{
        const view = render(<HomePage/>);
        
        expect(view.container).toMatchSnapshot();
    });
});
