import * as Style from './style';

import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';

import {Button} from '@app/components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import LoginBanner from '../../assets/images/login-banner.png';
import {ReactElement} from 'react';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

function Login(): ReactElement {
    return (
        <Style.LoginSection>
            <Style.LoginFormWrapper>
                <Style.LoginBanner>
                    <img src={LoginBanner} />
                    <Button className="primary" type="button">
                        Create account
                    </Button>
                    <h1>Financefy</h1>
                    <h5>Finances made easy!</h5>
                </Style.LoginBanner>
                <Style.LoginForm>
                    <Style.FormField>
                        <label>Username</label>
                        <Style.Input type="text" />
                    </Style.FormField>
                    <Style.FormField>
                        <label>Password</label>
                        <Style.Input type="password" />
                    </Style.FormField>
                    <Style.FormField className="row">
                        <label>
                            <input type="checkbox" />
                            Remind me
                        </label>
                        <a href="google.com">Forgot password</a>
                    </Style.FormField>
                    <Style.FormField>
                        <Button className="default" type="submit">
                            <FontAwesomeIcon icon={faSignInAlt} />
                            Sign in
                        </Button>
                    </Style.FormField>
                    <Style.FormField className="row">
                        <Button className="google" type="button">
                            <FontAwesomeIcon icon={faGoogle} />
                            Google
                        </Button>
                        <Button className="facebook" type="button">
                            <FontAwesomeIcon icon={faFacebook} />
                            Facebook
                        </Button>
                    </Style.FormField>
                    <a href="google.com">Terms and Conditions</a>
                </Style.LoginForm>
            </Style.LoginFormWrapper>
        </Style.LoginSection>
    );
}

export default Login;
