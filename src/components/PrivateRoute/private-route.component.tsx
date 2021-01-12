import {Redirect, Route} from 'react-router';

import {ReactElement} from 'react';
import {RouteProps} from 'react-router';

function PrivateRoute({component: Component, ...rest}: PrivateRouteProps): ReactElement {
    const isAuthenticated = !!localStorage.getItem('authToken');
    const loginPath = '/login';
    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isAuthenticated) {
                    return <Redirect to={{pathname: loginPath}} />;
                }
                const RouteComponent = Component as React.ComponentClass<typeof props>;
                return <RouteComponent {...props} />;
            }}
        ></Route>
    );
}

type PrivateRouteProps = RouteProps;

export default PrivateRoute;
