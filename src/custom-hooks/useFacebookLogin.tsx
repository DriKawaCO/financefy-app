import {FacebookLoginData} from '@app/interfaces';
import {useEffect} from 'react';

type FacebookHookResult = {
    facebookSignIn: () => Promise<FacebookLoginData>;
};

type FacebookSignInResult = {
    status: string;
    authResponse: {
        accessToken: string;
    };
};

type FacebookSignInUser = {
    email: string;
    name: string;
    picture: {
        data: {
            url: string;
        };
    };
};

declare global {
    interface Window {
        FB: any;
        fbAsyncInit: () => void;
    }
}

function useFacebookLogin(): FacebookHookResult {
    function getUserprofileDetails(accessToken: string): Promise<FacebookLoginData> {
        return new Promise<FacebookLoginData>((resolve) => {
            window.FB.api(
                '/v2.9/me',
                'get',
                {
                    access_token: accessToken,
                    fields: 'id,name,email,picture.width(128).height(128)',
                },
                (res: FacebookSignInUser) => {
                    const result: FacebookLoginData = {
                        email: res.email,
                        name: res.name,
                        imageUrl: res.picture.data.url,
                        token: accessToken,
                    };

                    resolve(result);
                },
            );
        });
    }

    const facebookSignIn = (): Promise<FacebookLoginData> => {
        return new Promise((resolve) => {
            window.FB.getLoginStatus((response: FacebookSignInResult) => {
                if (response.status === 'connected') {
                    getUserprofileDetails(response.authResponse.accessToken).then((facebookUser) => {
                        resolve(facebookUser);
                    });
                }

                window.FB.login(
                    (loginResponse: FacebookSignInResult) => {
                        getUserprofileDetails(loginResponse.authResponse.accessToken).then((facebookUser) => {
                            resolve(facebookUser);
                        });
                    },
                    {scope: 'email'},
                );
            });
        });
    };

    useEffect(() => {
        window.fbAsyncInit = function () {
            window.FB.init({
                appId: CONFIG.keys.facebook,
                cookie: true,
                xfbml: true,
                version: 'v8.0',
            });
        };
    }, []);

    return {
        facebookSignIn,
    };
}

export default useFacebookLogin;
