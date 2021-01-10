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
    width: 300px;
    height: 450px;
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

export const LoginTitle = styled.h1`
    flex-grow: 0;
    margin: 40px;
`;

export const LoginForm = styled.form`
    width: 80%;
    height: 200px;
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
`;

export const Input = styled.input`
    height: 30px;
    padding: 4px 10px;
`;

export const Button = styled.button`
    height: 40px;
`;
