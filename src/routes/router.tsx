import {Route, Switch} from 'react-router';

import {PageRoutes, App} from '@app/components';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '@app/helper';
import {PageRoute} from '@app/interfaces';

function DefaultRouter() {
    return (
        <Switch>
            <App>
                {PageRoutes.map(({path, component}: PageRoute) => (
                    <Route key={path} sensitive={false} path={path} component={component} />
                ))}
            </App>
        </Switch>
    );
}

const Router = () => (
    <ConnectedRouter history={history}>
        <DefaultRouter />
    </ConnectedRouter>
);

export default Router;
