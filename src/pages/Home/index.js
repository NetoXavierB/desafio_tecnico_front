import { useState, useEffect } from "react";
import moment from 'moment';

import { 
    Container,
    ContainerItem,
    ItemImage,
    ItemInfo,
    ContainerFilter,
    ImageBox
} from "./styles";

import icon from '../../assets/rocket.svg';


export function Home({ list }) {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        setData(list);
    }, [list]);
    
    const SearchLaunch = () => {
        const searchLowerCase = search.toLowerCase();
        const resultFilter = list.filter(launch => launch.name.toLowerCase().includes(searchLowerCase));
        setData(resultFilter);
    }

    // const ClearSearch = () => {
    //     setSearch('');
    //     setData(list);
    // }

    return (
        <Container>
            <ContainerFilter>
                <input
                    data-testid="input-search"
                    placeholder="Digite o nome do lançamento" 
                    onChange={(e) => {setSearch(e.target.value);}}
                />
                <button 
                    data-testid="button-search"
                    type="button" 
                    onClick={SearchLaunch}
                >Buscar</button>
            </ContainerFilter>
            {data.map((item, index) => {
                return (
                    <ContainerItem 
                        key={index}
                        data-testid={item.name}
                    >
                        <ItemInfo>
                            <h1>{item.name} - {moment(item.date_utc).format("DD/MM/YYYY")}</h1>
                            <p>{item.details ? item.details : "Não possui detalhes."}</p>
                        </ItemInfo>
                        <ItemImage>
                            {item.links && item.links.patch.small !== null ? <ImageBox src={item.links.patch.small} alt="Rocket"/> : <ImageBox src={icon} alt="Rocket" rocket={true}/> }
                        </ItemImage>
                    </ContainerItem>
                );
            })}
        </Container>
    )
}