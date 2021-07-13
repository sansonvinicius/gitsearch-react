//import './App.css';
import React, { useState} from 'react';
import axios from 'axios';
import * as S from './styled'; 
import {useHistory} from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map(repository => {
        repositoriesName.push(repository.name);
      })
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      //para mudar para a página de repositórios
      history.push('/repositories')
    });
  }
  return (
    <S.Container> 
      <S.Input  className="usuarioInput" placeholder="Usuário" value={usuario} onChange={ e => setUsuario(e.target.value)}/>
      <S.Button type="button" onClick={handlePesquisa}>Pesquisar</S.Button>
    </S.Container>
     
  );
}

export default App;

//JSX é o html dentro do JS
