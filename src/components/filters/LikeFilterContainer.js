import React, { useEffect } from "react";
import { connect } from "react-redux";
import { likeToggleAction } from "../../actions/typeFilterActions"
import LikeFilter from "./LikeFilter";

const LikeFilterContainer = ({likeToggle, likeToggleAction}) => {
    useEffect(() => {

    }, [likeToggle]);

    return <LikeFilter likeToggleAction={likeToggleAction} likeToggle={likeToggle}/>
};

const mapStateToProps = ({likeToggle}) => {
    return{
        likeToggle
    }
};

const mapDispatchToProps = {
    likeToggleAction
};

export default connect(mapStateToProps, mapDispatchToProps)(LikeFilterContainer);
