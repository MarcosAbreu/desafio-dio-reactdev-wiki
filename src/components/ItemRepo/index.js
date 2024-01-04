import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo,key}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove} >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} rel="noreferrer" target="_blank" key={`html_${key}`}>Ver repositório</a><br />
        <a href="#"  rel="noreferrer" className="remover" key={`ref_${key}`}>Remover</a>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
