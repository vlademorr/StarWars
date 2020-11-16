import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import CharacterListItem from "./CharacterListItem";
import { characterDetails } from "../../actions/charactersActions";
import {getLike, setLike as setLikeLocalStorage} from "../../utils/likes";

const CharacterListItemContainer = ({
    character,
    characterNumber,
    characterDetails
}) => {
    const [like, setLike] = useState(false);

    useEffect(() => {
        if (!character.name) return;
        setLike(getLike(character.name));
    }, [character.name]);
    const toggleLike = () => {
        setLike(!like);
        setLikeLocalStorage(character.name);
    };

    return (
        <CharacterListItem
            like={like}
            character={character}
            toggleLike={toggleLike}
            characterNumber={characterNumber}
            characterDetails={characterDetails}
        />
    );
};

const mapDispatchToProps = {
    characterDetails
};

export default connect(null, mapDispatchToProps)(CharacterListItemContainer);