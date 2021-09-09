import React, { useState } from "react";

const PokeNames = (props) => {
    const [buttonState, setButtonState] = useState(false);

    return (
        <div className="container">
            <button
                className="btn btn-primary"
                onClick={() => setButtonState(true)}
            >
                Show all the pokemon!
            </button>
            {buttonState === true ? (
                <ul className=" list-group">
                    {props.allPokemon.map((poke, i) => (
                        <li className="list-group-item" key={i}>
                            {poke.name}
                        </li>
                    ))}
                </ul>
            ) : (
                ""
            )}
        </div>
    );
};

export default PokeNames;
