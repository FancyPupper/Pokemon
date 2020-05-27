import React from 'react';
import './style.css';
import pokemonType from '../../helpers/pokemonTypes'
import { BrowserRouter as Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState, useEffect} from 'react';

function Card({ pokemon }){

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    {/* <div>
                        <Link to={`/detail/${pokemon.id}`}> Click to detail</Link>
                    </div> */}
                    
                </div>
            </div>
            
            <>
            <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={handleShow}>
                Full sprites!
                </Button>
            </div>
            

            <Modal show={show} onHide={handleClose} size="lg"
            aria-labelledby="contained-modal-title-vcenter"
             centered>
            <Modal.Header closeButton>
            <Modal.Title><p className="Card_name">{pokemon.name}</p></Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img className="Card_img" src={pokemon.sprites.front_default} alt=''/>
                <img className="Card_img" src={pokemon.sprites.back_default} alt=''/>
                <img className="Card_img" src={pokemon.sprites.front_shiny} alt=''/>
                <img className="Card_img" src={pokemon.sprites.back_shiny} alt=''/>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
            </Modal.Footer>
            </Modal>
            </>
        </div>

        
    );
}

export default Card;