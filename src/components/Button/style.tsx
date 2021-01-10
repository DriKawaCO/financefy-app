import {GlobalColors} from '@app/style';
import styled from 'styled-components';

export const Button = styled.button`
    height: 32px;
    outline: none;
    border: none;
    border-radius: 2px;
    padding-left: 15px;
    padding-right: 15px;
    cursor: pointer;

    svg {
        margin-right: 10px;
    }

    &.default {
        background-color: ${GlobalColors.mediumGrey};
        border: 1px solid ${GlobalColors.grey};

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.grey};
        }
    }

    &.primary {
        background-color: ${GlobalColors.primary};
        color: white;

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.primaryDarker};
        }
    }

    &.success {
        background-color: ${GlobalColors.success};
        color: white;

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.successDarker};
        }
    }

    &.danger {
        background-color: ${GlobalColors.danger};
        color: white;

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.dangerDarker};
        }
    }

    &.facebook {
        background-color: ${GlobalColors.facebook};
        color: white;
        width: 45%;
    }

    &.google {
        background-color: ${GlobalColors.google};
        color: white;
        width: 45%;
    }

    &.block {
        width: 100%;
    }
`;
