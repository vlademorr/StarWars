import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../../actions/charactersActions";
import CharactersList from "./CharactersList";

const CharactersListContainer = ({
    loading,
    btnClicks,
    characters,
    likeToggle,
    searchFilter,
    fetchCharacters,
    nextCharactersPage,
    loadMoreCharactersByType
}) => {
    useEffect(() => {
        fetchCharacters(nextCharactersPage);
    }, [
        btnClicks,
        fetchCharacters,
        loadMoreCharactersByType
    ]);

    return <CharactersList
        loading={loading}
        searchFilter={searchFilter}
        characters={characters}
        likeToggle={likeToggle}
    />;
};

const mapStateToProps = ({
    loading,
    btnClicks,
    characters,
    nextCharactersPage,
    likeToggle,
    searchFilter,
}) => {
    return {
        loading,
        btnClicks,
        characters,
        nextCharactersPage,
        likeToggle,
        searchFilter,
    };
};

const mapDispatchToProps = {
    fetchCharacters
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersListContainer);