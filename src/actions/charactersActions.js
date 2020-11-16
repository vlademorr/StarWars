import StarWarsService from "../services/characters-service";
const { getCharacters, getCharacterDetails } = new StarWarsService();

const getCharactersSuccess = characters => {
    return {
        type: "FETCH_CHARACTERS_SUCCESS",
        payload: characters
    };
};

const getCharactersFailure = error => {
    return {
        type: "FETCH_CHARACTERS_FAILURE",
        payload: error
    };
};

const fetchCharacters = (nextCharactersPage) => dispatch =>{
    if(nextCharactersPage){
        getCharacters(nextCharactersPage)
            .then(({ data }) => {dispatch(getCharactersSuccess(data))})
            .catch(err => dispatch(getCharactersFailure(err)))
    }
};

const characterDetails = (character) => {
    return {
        type: "CHARACTER_DETAILS",
        payload: character
    };
};

const getCharacterAdditionalInfo = (characterDetails) => {
    return {
        type: "GET_CHARACTER_ADDITIONAL_INFO",
        payload: characterDetails,
    };
};

const characterDetailsRequest = (characterId) => dispatch => {
    getCharacterDetails(characterId)
        .then(({ data }) => {
            dispatch(characterDetails(data));
            dispatch(getCharacterAdditionalInfo(data))
        })
        .catch(console.log)
};

export {
    fetchCharacters,
    characterDetails,
    characterDetailsRequest,
    getCharacterAdditionalInfo
}