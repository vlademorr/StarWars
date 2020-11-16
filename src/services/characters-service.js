import axios from "axios";

export default class StarWarsService {
    getCharacters(nextCharactersPage) {
        return axios.get(nextCharactersPage.replace("http://", "https://"))
    }
    getCharacterAdditional(characterDetails) {
        return axios.get(characterDetails.replace("http://", "https://"))
    }
    getCharacterDetails(characterId){
        return axios.get(`https://swapi.dev/api/people/${characterId}/`)
    }
}
