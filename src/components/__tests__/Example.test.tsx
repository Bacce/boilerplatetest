import { render } from '@testing-library/react';
import { Example } from '../Example';

describe('Example Component', () => {    
    it('should render', ()=>{
        const view = render(<Example/>);
        
        expect(view.container).toMatchSnapshot();
    });
});
