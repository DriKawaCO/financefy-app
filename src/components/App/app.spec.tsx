import App from './app.component';
import {shallow} from 'enzyme';

describe('App Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.length).toBe(1);
    });
});
