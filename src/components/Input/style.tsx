import {GlobalColors} from '@app/style';
import styled from 'styled-components';

export const Input = styled.input`
    &[type='text'],
    &[type='number'],
    &[type='password'],
    &[type='email'] {
        height: 24px;
        font-size: 1.1em;
        padding: 4px 10px;
        border: 1px solid ${GlobalColors.mediumGrey};
        border-radius: 2px;

        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
            box-shadow: 0 0 0 30px white inset !important;
            -webkit-box-shadow: 0 0 0 30px white inset !important;
        }

        &:active,
        &:focus,
        &:hover {
            outline: none;
            border: 1px solid ${GlobalColors.darkGrey};
        }
    }
`;
