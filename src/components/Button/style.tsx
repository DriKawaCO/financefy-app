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

    &:active {
        -webkit-box-shadow: inset -2px -2px 22px -12px ${GlobalColors.grey};
        -moz-box-shadow: inset -2px -2px 22px -12px ${GlobalColors.grey};
        box-shadow: inset -2px -2px 22px -12px ${GlobalColors.grey};
    }

    &.default {
        background-color: ${GlobalColors.lightGrey};
        border: 1px solid ${GlobalColors.grey};

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.mediumGrey};
        }
    }

    &.primary {
        background-color: ${GlobalColors.primary};
        color: white;

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.darkPrimary};
        }
    }

    &.success {
        background-color: ${GlobalColors.success};
        color: white;

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.darkSuccess};
        }
    }

    &.danger {
        background-color: ${GlobalColors.danger};
        color: white;

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.darkDanger};
        }
    }

    &.facebook {
        background-color: ${GlobalColors.facebook};
        color: white;
        width: 45%;

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.darkPrimary};
        }
    }

    &.google {
        background-color: ${GlobalColors.google};
        color: white;
        width: 45%;

        &:hover,
        &:focus,
        &:active {
            background-color: ${GlobalColors.darkDanger};
        }
    }

    &.block {
        width: 100%;
    }
`;
