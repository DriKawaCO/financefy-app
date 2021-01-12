import styled from 'styled-components';

export const Row = styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    justify-content: start;

    &.space-between {
        justify-content: space-between;
    }

    &.space-evenly {
        justify-content: space-evenly;
    }

    &.space-around {
        justify-content: space-around;
    }

    &.center {
        justify-content: center;
    }

    &.right {
        justify-content: right;
    }
`;
