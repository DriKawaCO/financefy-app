import {ReactElement} from 'react';
import * as Style from './style';
import {PageRoute} from '@app/interfaces';

function Login(): ReactElement {
    return (
        <Style.LoginSection>
            <Style.LoginFormWrapper>
                <Style.LoginLogo>
                    <button>Create account</button>
                </Style.LoginLogo>
                <Style.LoginForm>
                    <Style.FormField>
                        <label>Username</label>
                        <Style.Input type="text" />
                    </Style.FormField>
                    <Style.FormField>
                        <label>Password</label>
                        <Style.Input type="password" />
                    </Style.FormField>
                    <Style.FormField>
                        <Style.Button type="submit">Sign in</Style.Button>
                    </Style.FormField>
                    <Style.FormField>
                        <Style.Button type="button">Sign up</Style.Button>
                    </Style.FormField>
                </Style.LoginForm>
            </Style.LoginFormWrapper>
        </Style.LoginSection>
    );
}

export const LoginRoute: PageRoute = {
    path: '/login',
    component: Login,
};

export default Login;
