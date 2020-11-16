const getLike = (name) => {
    const likes = localStorage.getItem("likes") || "[]";

    try {
        return JSON.parse(likes).indexOf(name) !== -1
    } catch (e) {
        console.log(e);
    }
};

const setLike = (name) => {
    const likes = localStorage.getItem("likes") || "[]";
    try {
        const likesArray = JSON.parse(likes);
        if (likesArray.indexOf(name) !== -1) {
            localStorage.setItem(
                "likes",
                JSON.stringify(likesArray.filter((likeName) => likeName !== name))
            );
        } else {
            likesArray.push(name);
            localStorage.setItem("likes", JSON.stringify(likesArray));
        }
    } catch (e) {
        console.log(e);
    }
};

export { getLike, setLike };