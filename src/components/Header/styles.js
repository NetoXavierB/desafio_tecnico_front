import styled from 'styled-components';

export const Container = styled.header`
    background: var(--header);
    width: 100%;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ButtonBox = styled.button`
    font-size: 1rem;
    color: var(--white);
    background: var(--black);
    border: 0.15rem solid ${(props) => props.isActive ? '#030b6f' : '#000'};
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.7);
    }
`;