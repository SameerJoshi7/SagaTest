import React from "react";

const CheckBox = (props:any) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <div className="Radiobutton">
        {props.options.map((option:any) => {
          return (
            <label key={option} className="Radiobutton-inline">
            
              <input
                id={props.name}
                name={props.name}
                onChange={props.handleChange1}
                value={option}
                checked={props.selectedOptions.indexOf(option) > -1}
                type="radio"
              />
              {option}
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default CheckBox;
