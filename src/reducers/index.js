const initialState = {
    characters: [],
    characterDetails: {},
    characterVehicles: {
        loading: false,
        data: [],
    },
    characterFilms: {
        loading: false,
        data: [],
    },
    characterHomeworld: {
        loading: false,
        data: "",
    },
    nextCharactersPage: "https://swapi.dev/api/people/",
    btnClicks: 0,
    loadingBtnLoadMore: true,
    loading: true,
    error: null,
    searchFilter: "",
    likeToggle: !!localStorage.getItem("likeToggleFilter")
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_CHARACTERS_SUCCESS":
            return {
                ...state,
                loading: false,
                loadingBtnLoadMore: false,
                nextCharactersPage: action.payload.next,
                characters: state.characters.concat(action.payload.results)
            };
        case "FETCH_CHARACTERS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "CHARACTER_DETAILS":
            return {
                ...state,
                characterDetails: action.payload
            };
        case "LOAD_MORE_ITEMS":
            return {
                ...state,
                btnClicks: state.btnClicks + 1
            };
        case "LOADING_INDICATOR_LOAD_MORE":
            return {
                ...state,
                loadingBtnLoadMore: true
            };
        case "GET_CHARACTER_VEHICLES_REQUEST": {
            return {
                ...state,
                characterVehicles: {
                    loading: true,
                    data: []
                }
            };
        }
        case "CHARACTER_VEHICLES_SUCCESS":
            return {
                ...state,
                error: null,
                characterVehicles: {
                    data: action.payload,
                    loading: false
                },
            };
        case "GET_CHARACTER_FILMS_REQUEST":
            return {
                ...state,
                characterFilms: {
                    data: [],
                    loading: true
                }
            };
        case "CHARACTER_FILM_SUCCESS":
            return {
                ...state,
                error: null,
                characterFilms: {
                    data: action.payload,
                    loading: false
                },
            };
        case "GET_CHARACTER_HOMEWORLD_REQUEST":
            return {
                ...state,
                characterHomeworld: {
                    data: [],
                    loading: true
                }
            };
        case "CHARACTER_HOMEWORLD_SUCCESS":
            return {
                ...state,
                error: null,
                characterHomeworld: {
                    data: action.payload.name,
                    loading: false
                }
            };
        case "LIKE_TOGGLE":
            return {
                ...state,
               likeToggle: action.payload
            };
        case "SEARCH_FILTER":
            return {
                ...state,
                searchFilter: action.payload
            };
        default:
            return state;
    }
};

export default reducer;
