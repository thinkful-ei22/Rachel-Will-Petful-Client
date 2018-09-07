import React from 'react';
import Pet from './components/Pet';

export default function Dashboard(props){

    const { dogToAdopt } = props;
    const { catToAdopt } = props;

    return(
        <div className="container">
  <Pet animalToAdopt={dogToAdopt} />

<Pet animalToAdopt={catToAdopt} />
        </div>

    )
}