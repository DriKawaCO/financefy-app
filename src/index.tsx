import * as Style from './style';

import {Provider} from 'react-redux';
import {Router} from '@app/routes';
import {configureStore} from '@app/helper';
import {render} from 'react-dom';

const store = configureStore();

render(
    <Provider store={store}>
        <Style.GlobalStyle />
        <Router />
    </Provider>,
    document.getElementById('content'),
);
