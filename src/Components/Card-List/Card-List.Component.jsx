import React from 'react';
import './Card-List.style.css';
import { Card } from '../Card/Card.Component';

export const CardList = (props) => {
    return (<div className='card-list'>
        {
            props.monsters.map(monster => <Card key={monster.id} monster={monster} />)
        }
    </div>);
}