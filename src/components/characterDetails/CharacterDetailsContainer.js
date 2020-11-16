import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CharacterDetails from "./CharacterDetails";
import { characterDetailsRequest } from "../../actions/charactersActions";

const CharacterDetailsContainer = ({
    characterFilms,
    characterDetails,
    characterVehicles,
    characterHomeworld,
    characterDetailsRequest
}) => {
    const [characterFilmsLoading, setCharacterFilmsLoading] = useState(false);
    const [characterVehiclesLoading, setCharacterVehiclesLoading] = useState(false);
    const [characterHomeworldLoading, setCharacterHomeworldLoading] = useState(false);
    const booleanCharacterDetails = !!characterDetails;
    useEffect(() => {
        const location = window.document.location.href;
        characterDetailsRequest(location.slice(location.lastIndexOf('/')).match(/\d+/));
    }, [booleanCharacterDetails, characterDetailsRequest]);

    useEffect(() => {
        setCharacterFilmsLoading(characterFilms.loading);
        setCharacterVehiclesLoading(characterVehicles.loading);
        setCharacterHomeworldLoading(characterHomeworld.loading);
    }, [
        characterFilms.loading,
        characterVehicles.loading,
        characterHomeworld.loading,
    ]);

    return (
        <CharacterDetails
            characterDetails={characterDetails}
            characterFilms={characterFilms.data}
            characterVehicles={characterVehicles.data}
            characterHomeworld={characterHomeworld.data}
            characterFilmsLoading={characterFilmsLoading}
            characterVehiclesLoading={characterVehiclesLoading}
            characterHomeworldLoading={characterHomeworldLoading}
        />
    );
};

const mapStateToProps = ({
    characterFilms,
    characterDetails,
    characterVehicles,
    characterHomeworld
}) => {
    return {
        characterFilms,
        characterDetails,
        characterVehicles,
        characterHomeworld
    };
};

const mapDispatchToProps = {
    characterDetailsRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetailsContainer);