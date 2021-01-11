import Home from './home.component';
import {shallow} from 'enzyme';

describe('Home Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Home />);
        expect(wrapper.length).toBe(1);
    });
});
