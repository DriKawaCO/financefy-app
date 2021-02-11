import * as Style from './style';

import {Button, FormField, Input, Link, Row} from '@app/components';
import {ReactElement} from 'react';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import LoginBanner from '../../assets/images/login-banner.png';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
import {useGoogleLogin, useFacebookLogin} from '@app/custom-hooks';

function Login(): ReactElement {
    const {googleSignIn} = useGoogleLogin();
    const {facebookSignIn} = useFacebookLogin();

    function googleLogin() {
        googleSignIn().then((googleUser) => {
            console.log('####### GOOGLE', googleUser);
        });
    }

    function facebookLogin() {
        facebookSignIn().then((facebookUser) => {
            console.log('####### FACEBOOK', facebookUser);
        });
    }

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
                    <Row>
                        <FormField>
                            <label>Username</label>
                            <Input type="text" />
                        </FormField>
                    </Row>
                    <Row>
                        <FormField>
                            <label>Password</label>
                            <Input type="password" />
                        </FormField>
                    </Row>
                    <Row className="space-between">
                        <FormField>
                            <Row>
                                <label>
                                    <input type="checkbox" />
                                    Remind me
                                </label>
                            </Row>
                        </FormField>
                        <FormField className="right">
                            <Link href="google.com">Forgot password</Link>
                        </FormField>
                    </Row>
                    <Row>
                        <Button className="default block" type="submit">
                            <FontAwesomeIcon icon={faSignInAlt} />
                            Sign in
                        </Button>
                    </Row>
                    <Row className="space-between">
                        <Button className="google" type="button" onClick={googleLogin}>
                            <FontAwesomeIcon icon={faGoogle} />
                            Google
                        </Button>
                        <Button className="facebook" type="button" onClick={facebookLogin}>
                            <FontAwesomeIcon icon={faFacebook} />
                            Facebook
                        </Button>
                    </Row>
                    <Link className="login-terms" href="google.com">
                        Terms and Conditions
                    </Link>
                </Style.LoginForm>
            </Style.LoginFormWrapper>
        </Style.LoginSection>
    );
}

export default Login;
