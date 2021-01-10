import Button from './button.component';
import {shallow} from 'enzyme';

describe('Button Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.length).toBe(1);
    });
});
