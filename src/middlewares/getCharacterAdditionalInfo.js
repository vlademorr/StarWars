import {
    fetchCharacterFilmsRequest,
    fetchCharacterHomeworldRequest,
    fetchCharacterVehiclesRequest
} from '../actions/additionalInfoActions';

const getCharacterAdditionalInfo = storeAPI => next => action => {
    if (action.type === "GET_CHARACTER_ADDITIONAL_INFO") {
        storeAPI.dispatch(fetchCharacterFilmsRequest(action.payload.films));
        storeAPI.dispatch(fetchCharacterHomeworldRequest(action.payload.homeworld));
        storeAPI.dispatch(fetchCharacterVehiclesRequest(action.payload.vehicles));
    }

    return next(action)
};

export { getCharacterAdditionalInfo };
