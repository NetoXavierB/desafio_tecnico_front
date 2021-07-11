import { useEffect, useState } from "react";

import { api } from "./services/api";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import { GlobalStyle, Container } from './styles/global';


export function App() {
  const[launch, setLaunch] = useState([]);
    
  useEffect(() =>{
      api.get('upcoming')
          .then(response => {
              setLaunch(response.data);
          });
  },[]);

  return (
    <Container>
      <Header />
      <Home list={launch} />
      <GlobalStyle />
    </Container>
  );
}