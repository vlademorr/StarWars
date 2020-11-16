import React from "react";
import Spinner from "../spinner/Spinner";
import { Row, Col } from "react-bootstrap";
import LikeFilter from "../filters/LikeFilterContainer";
import BtnLoadMore from "../buttons/BtnLoadMoreContainer";
import CharacterListItem from "../characterListItem/CharacterListItemContainer";
import { getLike } from "../../utils/likes";
import SearchFilter from "../../components/searchFilter/SearchFilterContainer";
import "./charactersList.css";

const CharactersList = ({
    loading,
    characters,
    likeToggle,
    searchFilter
}) => {
    if (loading) {
        return <Spinner/>
    }

    const filteredByLikesCharacters = likeToggle ? characters.filter(({name}) => getLike(name)) : characters;
    const filteredBySearchCharacters = filteredByLikesCharacters
        .filter(({name}) => name.toLowerCase().indexOf(searchFilter.toLowerCase()) !== -1);

    return (
        <>
            <div className="filter_container">
                <SearchFilter charactersNames={characters.map(({name}) => name)} />
                <LikeFilter />
            </div>
            <div className="container">
                <Row as="ul" className="characters_list">
                    {
                        (filteredBySearchCharacters).map((character) => {
                            return (
                                <Col as="li" xl={4} lg={6} md={6} sm={12} xs={12} key={character.name}>
                                    <CharacterListItem
                                        character={character}
                                        characterNumber={character.url
                                            .slice(0, character.url.lastIndexOf("/"))
                                            .match(/\w+$/)[0]
                                        }
                                    />
                                </Col>
                            )
                        })
                    }
                </Row>
                <BtnLoadMore/>
            </div>
        </>
    );
};

export default CharactersList;