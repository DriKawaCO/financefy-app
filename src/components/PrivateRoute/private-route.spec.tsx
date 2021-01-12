import {Home} from '@app/containers';
import PrivateRoute from './private-route.component';
import {shallow} from 'enzyme';

describe('PrivateRoute Component', () => {
    let localStorageMock: Storage;
    beforeEach(() => {
        localStorageMock = (function () {
            return {
                get: jest.fn(),
                getItem: jest.fn(),
                set: jest.fn(),
                setItem: jest.fn(),
                clear: jest.fn(),
                length: 0,
                key: jest.fn(),
                removeItem: jest.fn(),
            };
        })();

        Object.defineProperty(window, 'localStorage', {
            value: localStorageMock,
        });
    });

    it('should render basic instance', () => {
        const wrapper = shallow(<PrivateRoute exact path="/home" component={Home} />);
        expect(wrapper.length).toBe(1);
        expect(localStorageMock.getItem).toHaveBeenCalled();
    });
});
