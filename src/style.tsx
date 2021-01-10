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
    mediumGrey: '#e6e6e673',
    grey: '#8f8f8f',
    primary: '#3d549e',
    primaryDarker: '#24325f',
    success: '#2b804e',
    successDarker: '#1f4730',
    danger: '#7c3b3b',
    dangerDarker: '#5a2f2f',
    facebook: '#3b589c',
    google: '#e34133',
};
