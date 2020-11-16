const loadMore = () => {
    return {
        type: "LOAD_MORE_ITEMS",
    };
};

const loadingIndicatorLoadMore = () => {
    return {
        type: "LOADING_INDICATOR_LOAD_MORE"
    };
};

export {
    loadMore,
    loadingIndicatorLoadMore,
}