import {Sample, SampleProps} from './';

import {shallow} from 'enzyme';

describe('Sample Component', () => {
    it('should render basic instance', () => {
        const sampleProps: SampleProps = {
            id: '123',
            years: 22,
        };
        const wrapper = shallow(<Sample {...sampleProps} />);
        expect(wrapper.find('span').length).toBe(3);
    });
});
