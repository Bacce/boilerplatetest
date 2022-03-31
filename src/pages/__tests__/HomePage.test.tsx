import { render } from '@testing-library/react';
import { HomePage } from '../HomePage';

describe('HomePage Component', () => {    
    it('should render', ()=>{
        const view = render(<HomePage/>);
        
        expect(view.container).toMatchSnapshot();
    });
});
