import { render } from '@testing-library/react';
import { featuresEnum } from '../../enums/featuresEnum';
import { FeatureToggle } from '../FeatureToggle';

describe('FeatureToggle Component', () => {
    it('should render children when feature is not on disabled list', () => {
        jest.spyOn(localStorage, 'getItem').mockImplementationOnce(() => "[]");

        const testContent = "testcontent";
        const view = render(<FeatureToggle feature={featuresEnum.FEATURE_1}>{testContent}</FeatureToggle>);

        expect(view.container).toMatchSnapshot();
        expect(view.container).toContainHTML(testContent);
    });

    it('should render empty template when feature is disabled and no offTemplate is present', () => {
      jest.spyOn(localStorage, 'getItem').mockImplementationOnce(() => "[\"FEATURE_1\"]");

      const testContent = "testcontent";
      const view = render(<FeatureToggle feature={featuresEnum.FEATURE_1}>{testContent}</FeatureToggle>);

      expect(view.container).toMatchSnapshot();
      expect(view.container).not.toContainHTML(testContent);
      expect(view.container).toBeEmptyDOMElement();
    });

    it('should render off template when feature is disabled and offTemplate is available', () => {
      jest.spyOn(localStorage, 'getItem').mockImplementationOnce(() => "[\"FEATURE_1\"]");

      const testContent = "testcontent";
      const testOffContent = "testoffcontent";
      const view = render(<FeatureToggle feature={featuresEnum.FEATURE_1} offTemplate={(<>{testOffContent}</>)}>{testContent}</FeatureToggle>);
      
      expect(view.container).toMatchSnapshot();
      expect(view.container).toContainHTML(testOffContent);
      expect(view.container).not.toContainHTML(testContent);
    });
});
