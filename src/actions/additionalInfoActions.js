import StarWarsService from "../services/characters-service";
const { getCharacterAdditional } = new StarWarsService();

const getCharacterVehiclesRequest = () => {
    return {
        type: "GET_CHARACTER_VEHICLES_REQUEST"
    };
};

const getCharacterVehiclesSuccess = (vehicles) => {
    return {
        type: "CHARACTER_VEHICLES_SUCCESS",
        payload: vehicles
    }
};

const fetchCharacterVehiclesRequest = (vehicles = []) => dispatch => {
    dispatch(getCharacterVehiclesRequest());
    Promise
        .all(vehicles.map((vehicle) => getCharacterAdditional(vehicle)))
        .then((res) => dispatch(
            getCharacterVehiclesSuccess(
                res.map(({data}) => data)
            )
        ))
        .catch(console.log)
};

const getCharacterFilmsRequest = () => {
    return {
        type: "GET_CHARACTER_FILMS_REQUEST"
    };
};

const getCharacterFilmsSuccess = (films) => {
    return {
        type: "CHARACTER_FILM_SUCCESS",
        payload: films
    }
};

const fetchCharacterFilmsRequest = (films = []) => dispatch => {
    dispatch(getCharacterFilmsRequest());
    Promise
        .all(films.map((film) => getCharacterAdditional(film)))
        .then((res) => dispatch(
            getCharacterFilmsSuccess(
                res.map(({data}) => data)
            )
        ))
        .catch(console.log)
};

const getCharacterHomeworldRequest = () => {
    return {
        type: "GET_CHARACTER_HOMEWORLD_REQUEST"
    };
};

const getCharacterHomeworldSuccess = (homeworld) => {
    return {
        type: "CHARACTER_HOMEWORLD_SUCCESS",
        payload: homeworld
    }
};

const fetchCharacterHomeworldRequest = (homeworld) => dispatch => {
    dispatch(getCharacterHomeworldRequest());
    getCharacterAdditional(homeworld)
        .then(({data}) => {dispatch(getCharacterHomeworldSuccess(data))})
        .catch(console.log)
};

export {
    fetchCharacterVehiclesRequest,
    fetchCharacterFilmsRequest,
    fetchCharacterHomeworldRequest
}