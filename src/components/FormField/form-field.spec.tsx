import FormField from './form-field.component';
import {shallow} from 'enzyme';

describe('FormField Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(
            <FormField>
                <label>Test</label>
            </FormField>,
        );
        expect(wrapper.find('label').length).toBe(1);
    });
});
