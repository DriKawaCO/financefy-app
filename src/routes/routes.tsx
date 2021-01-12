import {Home, Login} from '@app/containers';

import {PrivateRoute} from '@app/components';
import {ReactElement} from 'react';
import {Route} from 'react-router';

const AppRoutes: ReactElement[] = [
    <Route exact key="login" path="/login" component={Login} />,
    <PrivateRoute exact key="home" path="/" component={Home} />,
];

export default AppRoutes;
