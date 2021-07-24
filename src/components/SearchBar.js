import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");


  const onSubmitForm = (e) => {
    e.preventDefault();
    onFormSubmit(term);
    // TODO: Make sure we call
    // callback from parent element
  };
  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmitForm} action="" className="ui form">
        <div className="field">
          <label htmlFor="">Video Search</label>
          <input value={term} onChange={(e) => setTerm(e.target.value)} type="text" /> 
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
