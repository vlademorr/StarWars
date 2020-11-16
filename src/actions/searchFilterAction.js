const searchFilterAction = (value) => {
    return {
        type: "SEARCH_FILTER",
        payload: value
    }
};

export {
    searchFilterAction
}