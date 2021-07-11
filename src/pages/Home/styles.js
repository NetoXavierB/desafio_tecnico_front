import styled from 'styled-components';

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 0rem;
`;

export const ContainerItem = styled.div`
    display: flex;
    border: 1px solid #303030;
    border-radius: 0.5rem;
    padding: 1rem;
    margin-bottom: 2rem;
    min-height: 10rem;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex: 6;
    justify-content: space-between;
    flex-direction: column;

    h1 {
        color: var(--white);
    }

    p {
        text-align: justify;
        color: var(--white);
    }
`;

export const ItemImage = styled.div`
    display: flex;
    flex: 1.1;
    align-items: center;
    justify-content: center;
`;

export const ImageBox = styled.img`
    width: ${props => props.rocket ? '7rem' : '9rem'};
`;

export const ContainerFilter = styled.div`
    display: flex;
    height: 3rem;
    margin-bottom: 1rem;
    justify-content: space-between;

    input {
        background: var(--white);
        width: 84%;
        border: 0.2rem solid var(--black);
        border-radius: 0.3rem;
        padding: 0.7rem;
    
        ::placeholder {
            font-size: 1rem;
            color: var(--black);
        }

    }

    button {
        width: 15%;
        border: 0;
        border-radius: 0.3rem;
        font-size: 1rem;
        font-weight: bold;
        background: var(--blue);
        color: var(--white);
    }
`;