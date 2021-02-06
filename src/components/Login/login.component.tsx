import * as Style from './style';

import {Button, FormField, Input, Link, Row} from '@app/components';
import {ReactElement, useEffect, useState} from 'react';
import {faFacebook, faGoogle} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import LoginBanner from '../../assets/images/login-banner.png';
import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';

function Login(): ReactElement {
    let auth: any = null;
    const googleLogin = () => {
        auth.signIn().then((googleUser: any) => {
            const profile = googleUser.getBasicProfile();
            console.log('Token', googleUser.getAuthResponse().id_token);
            console.log('Name:', profile.getName());
            console.log('Image URL:', profile.getImageUrl());
            console.log('Email:', profile.getEmail());
        });
    };

    useEffect(() => {
        gapi.load('auth2', () => {
            gapi.auth2
                .init({
                    client_id: '361700727137-hfug5nedl1gmjkipqirohj2dh4segrjv.apps.googleusercontent.com',
                    fetch_basic_profile: true,
                })
                .then((authResult) => {
                    auth = authResult;
                });
        });
    }, []);

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
                        <Button className="facebook" type="button">
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
