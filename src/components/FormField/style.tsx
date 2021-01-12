import styled from 'styled-components';

export const FormField = styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;

    &.center {
        align-items: center;
    }

    &.right {
        align-items: flex-end;
    }
`;
