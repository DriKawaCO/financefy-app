import {GoogleLoginData} from '@app/interfaces';
import {useEffect} from 'react';

type GoogleHookResult = {
    googleSignIn: () => Promise<GoogleLoginData>;
};

function useGoogleLogin(): GoogleHookResult {
    let auth: gapi.auth2.GoogleAuth;
    const googleSignIn = (): Promise<GoogleLoginData> => {
        return auth.signIn().then((result: gapi.auth2.GoogleUser) => {
            const profile = result.getBasicProfile();
            return {
                token: result.getAuthResponse().id_token,
                name: profile.getName(),
                email: profile.getEmail(),
                imageUrl: profile.getImageUrl(),
            };
        });
    };

    useEffect(() => {
        gapi.load('auth2', () => {
            gapi.auth2
                .init({
                    client_id: CONFIG.keys.google,
                    fetch_basic_profile: true,
                })
                .then((authResult: gapi.auth2.GoogleAuth) => {
                    auth = authResult;
                });
        });
    }, []);

    return {
        googleSignIn,
    };
}

export default useGoogleLogin;
