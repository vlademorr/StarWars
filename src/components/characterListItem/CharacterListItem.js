import React  from "react";
import { Link } from "react-router-dom";
import { getImage } from "../../utils/images";
import "./characterListItem.css";

const CharacterListItem = ({
    like,
    character,
    toggleLike,
    characterNumber,
    characterDetails
}) => {
    return (
        <div
            className="character_container"
            onClick={() => characterDetails(character)}
        >
            <img
                className="character_list_img"
                src={getImage(character.name) || "https://i.ibb.co/Y7sBMhD/1.png"}
                alt={character.name}
            />
            <Link to={`/character/${characterNumber}`}>
                <p className="character_name">{character.name}</p>
            </Link>
            <img src={like ? "/like.png" : "/unlike.png"} className="like_image" onClick={toggleLike} alt="like" />
        </div>
    );
};

export default CharacterListItem;