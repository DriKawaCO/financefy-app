import App from './app.component';
import {Sample} from '..';
import {shallow} from 'enzyme';

describe('App Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<App />);
        expect(wrapper.find(Sample).length).toBe(1);
    });
});
