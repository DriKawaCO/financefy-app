import {Provider} from 'react-redux';
import Router from './routes/router';
import {configureStore} from '@app/helper';
import {render} from 'react-dom';

const store = configureStore();

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('content'),
);
