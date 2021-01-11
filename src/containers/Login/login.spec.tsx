import Login from './login.container';
import {shallow} from 'enzyme';

describe('Login Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper.length).toBe(1);
    });
});
