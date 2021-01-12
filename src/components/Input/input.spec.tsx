import Input from './input.component';
import {shallow} from 'enzyme';

describe('Input Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(<Input />);
        expect(wrapper.length).toBe(1);
    });

    it('should render value', () => {
        const value = 'Input Value';
        const wrapper = shallow(<Input type="text" value={value} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.props().value).toBe(value);
    });

    it('should handle className', () => {
        const className = 'test-class';
        const wrapper = shallow(<Input className={className} />);
        expect(wrapper.length).toBe(1);
        expect(wrapper.hasClass(className)).toBeTruthy();
    });

    it('should handle click', () => {
        const onClickHandler = jest.fn();
        const wrapper = shallow(<Input onClick={onClickHandler} />);
        expect(wrapper.length).toBe(1);
        wrapper.simulate('click');
        expect(onClickHandler).toHaveBeenCalledTimes(1);
    });
});
