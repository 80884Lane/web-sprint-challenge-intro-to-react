// Write your Character component here
import React from "react";
import Index from "./index";

export default function Character(props) {

    const {name, id} = props;

    return (
        <div className = "character-character container">
            <div className = "character-info">
                <h1> {character.name} {character.id} </h1>
            </div>
        </div>
        
    )