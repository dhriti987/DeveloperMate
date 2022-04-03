import React, { useState,useEffect } from "react";
import "../../style/find-developers/FilterDropDown.css";

function FilterDropDown({ dropDownItems,title }) {
  const [tmpDropDownItem, setTmpDropDownItem] = useState(dropDownItems);
  const [changedInput, setChangedInput] = useState("");
  const [displayDropDown, setDisplayDropDown] = useState(false);

  useEffect(() => {
    const newTmpDropDownItem = dropDownItems.filter((item) =>
      item.toLowerCase().includes(changedInput.toLowerCase())
    );
    setTmpDropDownItem(newTmpDropDownItem);
  }, [changedInput]);


  const handleItemClick = (item) => {
    setChangedInput(item);
    setDisplayDropDown(false);
  };

  return (
    <div className="filterDropDown">
      <h3 style={{ margin: "0", color: "rgba(243, 243, 243, 0.8)" }}>
        {title}
      </h3>
      <input
        type="text"
        style={
          displayDropDown
            ? { borderRadius: "0.5rem 0.5rem 0 0" }
            : { borderRadius: "0.5rem" }
        }
        onChange={(e) => {
          setChangedInput(e.target.value);
        }}
        value={changedInput}
        onClick={() => setDisplayDropDown(displayDropDown ? false : true)}
        placeholder="e.g. India"
      />
      <ul
        className="dropDownItemsContainer"
        style={
          !displayDropDown
            ? { height: "0", padding: "0" } 
            : tmpDropDownItem.length<=0 ? {padding : "0"} 
            : tmpDropDownItem.length <= 5
            ? { height: "auto" }
            : { height: "11rem" }
        }
      >
        {tmpDropDownItem.map((item, idx) => {
          return (
            <li
              className="dropDownItem"
              key={`FilterDropDown${idx}`}
              onClick={(e) => handleItemClick(item)}
            >
              <h3>{item}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterDropDown;
