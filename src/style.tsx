import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        margin: 0;
    }
`;

export const GlobalColors = {
    lightGrey: '#fbfbff',
    mediumGrey: '#cecece',
    grey: '#8f8f8f',
    darkGrey: '#4d4d4d',
    primary: '#3d549e',
    darkPrimary: '#24325f',
    success: '#2b804e',
    darkSuccess: '#1f4730',
    danger: '#7c3b3b',
    darkDanger: '#5a2f2f',
    facebook: '#3b589c',
    google: '#e34133',
    loginBGLight: '#4ca1af',
    loginBGDark: '#2c3e50',
};
