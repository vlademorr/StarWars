import React from "react";
import Autocomplete from "react-autocomplete";
import "./searchFilter.css";

const SearchFilter = ({
    selectedValue,
    setSelectedValue,
    charactersNames,
}) => {
    const renderInput = (props) => (
        <input
            placeholder="Type the character name..."
            {...props}
            className="autocomplete_input"
        />
    );

    const renderItem = (item, highlighted) => (
        <div
            key={item}
            className="autocomplete_item"
            style={{
                backgroundColor: highlighted ? "#eee" : "#fff",
            }}
        >
            {item}
        </div>
    );

    const renderMenu = (items, value, style) => (
        <div style={{ ...style }} className="autocomplete_menu" children={items || []}/>
    );

    const shouldItemRender = (item, value) => item.toLowerCase().indexOf(value.toLowerCase()) > -1;

    return (
        <div className="autocomplete_container">
            <Autocomplete
                items={charactersNames || []}
                shouldItemRender={shouldItemRender}
                getItemValue={item => item}
                renderInput={renderInput}
                renderItem={renderItem}
                renderMenu={renderMenu}
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                onSelect={setSelectedValue}
            />
        </div>
    )
};

export default SearchFilter;