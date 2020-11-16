const likeToggleAction = (value) => {
    return {
        type: "LIKE_TOGGLE",
        payload: value
    }
};

export {
    likeToggleAction
}