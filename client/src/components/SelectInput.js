import React from "react";

const SelectInput = ({name,type,labelText,handleChange}) => {
  return (
    <div className="selectInput">
      <label className="selectInput-label">
        {labelText}
      </label>

      <select name={name} value={type} onChange={handleChange} className="selectInput-select">
        <option value="jpeg">jpeg</option>
        <option value="png" selected>png</option>
        <option value="gif">gif</option>
      </select>
    </div>
  );
};

export default SelectInput;
