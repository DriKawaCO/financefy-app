import {Home} from '@app/containers';
import {MemoryRouter} from 'react-router';
import PrivateRoute from './private-route.component';
import {mount} from 'enzyme';

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

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render Component when Authenticated', () => {
        jest.spyOn(localStorage, 'getItem').mockReturnValue('true');
        const path = '/home';
        const wrapper = mount(
            <MemoryRouter initialEntries={[path]}>
                <PrivateRoute path={path} component={Home} />
            </MemoryRouter>,
        );
        expect(wrapper.length).toBe(1);
        expect(wrapper.exists(Home)).toBeTruthy();
        const history: any = wrapper.find('Router').prop('history');
        expect(history.location.pathname).toBe(path);
    });

    it('should render Redirect when Not Authenticated', () => {
        jest.spyOn(localStorage, 'getItem').mockReturnValue(null);
        const path = '/home';
        const wrapper = mount(
            <MemoryRouter initialEntries={[path]}>
                <PrivateRoute path={path} component={Home} />
            </MemoryRouter>,
        );
        const history: any = wrapper.find('Router').prop('history');
        expect(history.location.pathname).toBe('/login');
    });
});
