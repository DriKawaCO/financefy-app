import {Route, Switch} from 'react-router';

import {App} from '@app/components';
import {ComponentType} from 'react';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../helper/store';

const routes: {route: string; component: ComponentType}[] = [
    {
        route: '/',
        component: App,
    },
    {
        route: '/login',
        component: App,
    },
];

function DefaultRouter() {
    return (
        <Switch>
            {routes.map(({route, component}) => (
                <Route key={route} sensitive={false} path={route} component={component} />
            ))}
        </Switch>
    );
}

const Router = () => (
    <ConnectedRouter history={history}>
        <DefaultRouter />
    </ConnectedRouter>
);

export default Router;
