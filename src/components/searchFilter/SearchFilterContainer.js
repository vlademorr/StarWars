import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import SearchFilter from "./SearchFilter";
import { searchFilterAction } from "../../actions/searchFilterAction";

const SearchFilterContainer = ({
    charactersNames,
    searchFilterAction
}) => {
    const [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        searchFilterAction(selectedValue);
    }, [selectedValue, searchFilterAction]);

    return (
        <SearchFilter
            charactersNames={charactersNames}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
        />
    );
};

const mapDispatchToProps = {
    searchFilterAction
};

export default connect(null, mapDispatchToProps)(SearchFilterContainer);