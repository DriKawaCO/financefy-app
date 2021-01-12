import Input from './input.component';
import {shallow} from 'enzyme';

describe('Input Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Input />);
        expect(wrapper.length).toBe(1);
    });
});
