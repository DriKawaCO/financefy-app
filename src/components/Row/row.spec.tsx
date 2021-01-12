import Row from './row.component';
import {shallow} from 'enzyme';

describe('Row Component', () => {
    it('should render basic instance', () => {
        const wrapper = shallow(
            <Row>
                <label>Test</label>
            </Row>,
        );
        expect(wrapper.find('label').length).toBe(1);
    });
});
