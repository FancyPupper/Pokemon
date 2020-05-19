import React from 'react';
import './style.css';
import pokemonType from '../../helpers/pokemonTypes'

function Card({ pokemon }){
    return (
        <div className="Card">
            <div className="Card_img">
                <img src={pokemon.sprites.front_default} alt=''/>
            </div>
            <div className="Card_name">
                {pokemon.name}
            </div>
            <div className="Card_types">
                {pokemon.types.map(type => {
                    return (
                        <div className="Card_type" style={{backgroundColor: pokemonType[type.type.name]}}>
                            {type.type.name}
                        </div>   
                    )
                })}
            </div>
            <div className="Card_info">
                <div className="Card_data Card_data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                    
                </div>
            </div>
        </div>
    );
}

export default Card;