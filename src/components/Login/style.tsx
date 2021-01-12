import {GlobalColors} from '@app/style';
import styled from 'styled-components';

export const LoginSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    background: ${GlobalColors.loginBGDark}; /* fallback for old browsers */
    background: -webkit-linear-gradient(
        to right,
        ${GlobalColors.loginBGLight},
        ${GlobalColors.loginBGDark}
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
        to right,
        ${GlobalColors.loginBGLight},
        ${GlobalColors.loginBGDark}
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const LoginFormWrapper = styled.div`
    width: 340px;
    height: 500px;
    background-color: white;
    flex: none 0 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-evenly;
    align-items: center;
`;

export const LoginBanner = styled.div`
    width: 100%;
    height: 40%;
    position: relative;
    background-color: rgba(0, 202, 117, 0.18);

    img {
        max-height: 100%;
    }

    button {
        position: absolute;
        right: 15px;
        top: 15px;
    }

    h1 {
        position: absolute;
        right: 15px;
        bottom: 40px;
        font-size: 1.6em;
        color: #043110;
    }

    h5 {
        width: 80px;
        position: absolute;
        right: 15px;
        bottom: 0;
        text-align: right;
        line-height: 16px;
        color: #043110;
        font-size: 0.94em;
    }
`;

export const LoginForm = styled.form`
    width: 80%;
    height: 200px;
    padding-top: 10px;
    flex-grow: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-around;
    align-items: center;
`;

export const Link = styled.a`
    text-decoration: none;
    color: ${GlobalColors.darkPrimary};
    font-weight: 400;
`;

export const Terms = styled.a`
    font-size: 0.8em;
    color: ${GlobalColors.grey};
    text-decoration: none;
`;
