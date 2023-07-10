import { useState } from "react";

import "./SearchBar.css"

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState("");

    const handleFormSubmit = (event) => {
        event.preventDefault();

        onSubmit(term);
    };

    const handleChange = (event) => {
        setTerm(event.target.value);
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleFormSubmit}>
                <label>Enter search term</label>
                <input value={term} onChange={handleChange} />
                <input type="submit" value="Search" />
            </form>
        </div>
    );
}

export default SearchBar;
