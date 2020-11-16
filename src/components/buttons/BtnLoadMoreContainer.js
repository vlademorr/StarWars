import React from "react";
import { connect } from "react-redux";
import BtnLoadMore from "./BtnLoadMore";
import { loadMore, loadingIndicatorLoadMore } from "../../actions/loadMoreBtnActions";

const BtnLoadMoreContainer = ({
    loadMore,
    nextCharactersPage,
    loadingBtnLoadMore,
    loadingIndicatorLoadMore
}) => {
    return nextCharactersPage ?
        (
            <BtnLoadMore
                loadMore={loadMore}
                loadingBtnLoadMore={loadingBtnLoadMore}
                loadingIndicatorLoadMore={loadingIndicatorLoadMore}
            />
        ) : null
};

const mapStateToProps = ({
    nextCharactersPage,
    loadingBtnLoadMore
}) => {
    return {
        nextCharactersPage,
        loadingBtnLoadMore
    };
};

const mapDispatchToProps = {
    loadMore,
    loadingIndicatorLoadMore
};

export default connect(mapStateToProps, mapDispatchToProps)(BtnLoadMoreContainer);