import {GlobalColors} from '@app/style';
import styled from 'styled-components';

export const Link = styled.a`
    text-decoration: none;
    color: ${GlobalColors.darkPrimary};
    font-weight: 400;

    &.login-terms {
        font-size: 0.8em;
        color: ${GlobalColors.grey};
        text-decoration: none;
    }
`;
