import {App} from '@app/components';
import {AppRoutes} from '@app/routes';
import {ConnectedRouter} from 'connected-react-router';
import {ReactElement} from 'react';
import {Switch} from 'react-router';
import {history} from '@app/helper';

function Router(): ReactElement {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <App>{AppRoutes}</App>
            </Switch>
        </ConnectedRouter>
    );
}

export default Router;
