
import { useState } from 'react';
import gitLogo from '../assets/github.png'
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';

import { Container } from './styles';

function App() {

  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    const response = await fetch(
        `https://api.github.com/users/${currentRepo}/repos`,
        {
          method: 'GET'
        });

    const data = await response.json();

    data.map(el => {
      const isExist = repos.find(repo => repo.id === el.id);
      if(!isExist){
        setRepos(prev => [...prev, el]);
        setCurrentRepo('')
      }
    })
  }

  const handleRemoveRepo = (id) => {
    console.log('Removendo registro', id);

    const temp = repos.filter(repo => 
      { 
        if (repo.id !== id) {
          return repo
        }
      });
    setRepos(temp);
  }


  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="github logo"/>
      <Input value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)} />
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo key={repo.id} handleRemoveRepo={handleRemoveRepo} repo={repo}/>)}
    </Container>
  );
}

export default App;
