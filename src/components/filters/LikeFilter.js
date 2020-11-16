import React from "react";
import { Dropdown } from "react-bootstrap";
import "./likeFilter.css";

const LikeFilter = ({likeToggleAction, likeToggle}) => {
    const toggle = (value) => {
        localStorage.setItem("likeToggleFilter", value);
        likeToggleAction(!!value);
    };

    return (
        <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
                { likeToggle ? "Sort by: Liked" : "Sort by: All" }
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={() => toggle("")}> All </Dropdown.Item>
                <Dropdown.Item onClick={() => toggle("true")}> Liked </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
};

export default LikeFilter;