import { List, Avatar, Button, Skeleton, Typography } from 'antd';

import { Container } from "./styles";


export function Home({ list }) {

    return (
        <Container>
            {console.log(list)}
            <List
                bordered
                dataSource={list}
                renderItem={item => (
                    console.log(item.name),
                    <List.Item>
                        {/* <h1>{item.name}</h1> */}
                    </List.Item>
                )}
            />
        </Container>
    )
}