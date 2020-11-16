import React, { useEffect, useState } from "react";
import Spinner from "../spinner/Spinner";
import ChangeImage from "../modals/ChangeImage";
import { getLike, setLike as setLikeLocalStorage } from "../../utils/likes";
import { getImage, setImage as setImageLocalStorage } from "../../utils/images";
import "./characterDetails.css";

const CharacterDetails = ({
    characterFilms,
    characterDetails,
    characterVehicles,
    characterHomeworld,
    characterFilmsLoading,
    characterVehiclesLoading,
    characterHomeworldLoading
}) => {
    const [like, setLike] = useState(false);
    const [image, setImage] = useState(false);

    useEffect(() => {
        if (!characterDetails.name) return;
        setLike(getLike(characterDetails.name));
        setImage(getImage(characterDetails.name));
    }, [characterDetails.name]);

    const toggleLike = () => {
        setLike(!like);
        setLikeLocalStorage(characterDetails.name);
    };

    if(!characterDetails.name){
        return <h4 className="bad_url">There is no character for this link</h4>
    }
    return (
        <div className="character_details_container">
            <img
                className="character_front_details_img"
                src={image || "https://i.ibb.co/Y7sBMhD/1.png"}
                alt={characterDetails.name}
            />
            <h5 className="character_details_name">{characterDetails.name}</h5>
            <img src={like ? "/like.png" : "/unlike.png"} className="like_image" onClick={toggleLike} alt="like"/>
            <ChangeImage characterName={characterDetails.name} setImage={setImage} setImageLocalStorage={setImageLocalStorage}/>
            <div className="character_details">
                <p className="p_homeworld">Home world - {characterHomeworldLoading ? " loading..." : characterHomeworld}</p>
                <p>Birth year - {characterDetails.birth_year}</p>
                <div className="p_character_details_container">
                    <div className="p_character_details">
                        <div className="p_first_character_details_left_side">
                            <p>Height - {characterDetails.height} cm</p>
                            <p>Hair color - {characterDetails.hair_color}</p>
                            <p>Skin color - {characterDetails.skin_color}</p>
                        </div>
                        <div className="p_first_character_details_right_side">
                            <p>Eye color - {characterDetails.eye_color}</p>
                            <p>Mass - {characterDetails.mass}</p>
                            <p>Gender - {characterDetails.gender}</p>
                        </div>
                    </div>
                    <div className="p_character_details">
                        <div className="p_second_character_details_left_side">
                            <>
                                <h5>Films:</h5>
                                {characterFilmsLoading ? <Spinner/> : characterFilms.map((film) =>
                                    <p key={film.title}>{film.title} <br /></p>
                                )}
                            </>
                        </div>
                        <div className="p_second_character_details_right_side">
                            {
                                !!characterVehicles.length && <>
                                    <h5>Vehicles:</h5>
                                    {characterVehiclesLoading ? <Spinner/> : characterVehicles.map((vehicle) =>
                                        (
                                            <p key={vehicle.name}>
                                                {
                                                    ` Name - ${vehicle.name},`
                                                    +
                                                    ` Model - ${vehicle.model}`
                                                }
                                                <br />
                                            </p>
                                        )
                                    )}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterDetails;