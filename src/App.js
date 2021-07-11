import { useEffect, useState } from "react";

import { api } from "./services/api";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";

import { GlobalStyle, Container } from './styles/global';


export function App() {
  const [launch, setLaunch] = useState([]);
  const [buttonActive, setButtonActive] = useState('upcoming');

  const CreateSetLaunch = ({ data }) => {
    if(data.length === undefined) {
      const array = [];
      array.push(data);
      setLaunch(array);
      return;
    }
    setLaunch(data);
  }
    
  useEffect(() =>{
    api.get(buttonActive)
        .then(response => {
            CreateSetLaunch(response);
        });
  },[buttonActive]);

  return (
    <Container>
      <Header buttonActive={buttonActive} setButtonActive={setButtonActive}/>
      <Home list={launch} />
      <GlobalStyle />
    </Container>
  );
}