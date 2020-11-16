import React from "react";
import { Button } from "react-bootstrap";
import Spinner from "../spinner/Spinner";

const BtnLoadMore = ({
    loadMore,
    loadingBtnLoadMore,
    loadingIndicatorLoadMore
}) => {
    if (loadingBtnLoadMore) {
        return (
            <Button
                className="btn_load_more"
                variant="primary"
            >
                <Spinner/>
            </Button>
        )
    }
    return (
        <Button
            className="btn_load_more"
            variant="primary"
            onClick={() => {
                loadMore();
                loadingIndicatorLoadMore()
            }}
        >
            Load More
        </Button>
    );
};


export default BtnLoadMore;