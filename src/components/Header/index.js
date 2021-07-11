import { Container, Content } from "./styles";

export function Header() {

    return (
        <Container>
            <Content>
                <button type="button">Últimos Lançamentos</button>
                <button type="button">Próximos Lançamentos</button>
                <button type="button">Futuros Lançados</button>
            </Content>
        </Container>
    )
}