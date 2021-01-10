import {Login, LoginProps} from '.';

import {shallow} from 'enzyme';

describe('Login Component', () => {
    it('should render basic instance', () => {
        const loginProps: LoginProps = {
            id: '123',
            years: 22,
        };
        const wrapper = shallow(<Login {...loginProps} />);
        expect(wrapper.find('span').length).toBe(3);
    });
});
