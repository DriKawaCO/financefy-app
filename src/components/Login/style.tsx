import {GlobalColors} from '@app/style';
import styled from 'styled-components';

export const LoginSection = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
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
    border-radius: 4px;
    -webkit-box-shadow: 3px 3px 8px 0px rgba(128, 128, 128, 1);
    -moz-box-shadow: 3px 3px 8px 0px rgba(128, 128, 128, 1);
    box-shadow: 3px 3px 8px 0px rgba(128, 128, 128, 1);
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

export const FormField = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    &.row {
        flex-flow: row nowrap;
        justify-content: space-between;
    }
`;

export const Input = styled.input`
    height: 24px;
    font-size: 1.1em;
    padding: 4px 10px;
    border: 1px solid ${GlobalColors.grey};
    border-radius: 2px;
`;
