import { Container, Content, ButtonBox } from "./styles";

export function Header({ buttonActive, setButtonActive }) {

    return (
        <Container>
            <Content>
                <ButtonBox 
                    type="button" 
                    isActive={buttonActive === 'latest' ? true : false}
                    onClick={() => setButtonActive('latest')}
                    >Últimos Lançamentos</ButtonBox>
                <ButtonBox 
                    type="button" 
                    isActive={buttonActive === 'next' ? true : false}
                    onClick={() => setButtonActive('next')}
                    >Próximos Lançamentos</ButtonBox>
                <ButtonBox 
                    type="button" 
                    isActive={buttonActive === 'upcoming' ? true : false}
                    onClick={() => setButtonActive('upcoming')}
                    >Futuros Lançados</ButtonBox>
            </Content>
        </Container>
    )
}