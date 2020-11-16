const getImage = (name) => {
    const images = localStorage.getItem("images") || "{}";
    try {
        return JSON.parse(images)[name]
    } catch (e) {
        console.log(e);
    }
};

const setImage = (name, imageUrl) => {
    const images = localStorage.getItem("images") || "{}";
    try {
        const imagesObj = JSON.parse(images);
        imagesObj[name] = imageUrl;
        localStorage.setItem(
            "images",
            JSON.stringify(imagesObj)
        )
    } catch (e) {
        console.log(e);
    }
};

export { getImage, setImage };