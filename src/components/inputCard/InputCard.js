import { Clear } from "@mui/icons-material";
import React, { useContext } from "react";
import { useState } from "react";
import storeAPI from "../../utils/storeAPI";
import "./styles.scss";

function InputCard({ setOpen, listId, type }) {
  const [title, setTitle] = useState("");
  const { addMoreCard, addMoreList } = useContext(storeAPI);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    console.log("here", type, title);
    if (type === "card") {
      addMoreCard(title, listId);
    } else {
      addMoreList(title);
    }
    setOpen(false);
    setTitle("");
  };
  return (
    <div className="input-card">
      <div className="input-card-container">
        <textarea
          className="input-text"
          autoFocus
          placeholder={type === "card" ? "Enter a title" : "Name this List"}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="confirm">
        <button className="button-confirm" onClick={handleSubmit}>
          {type === "card" ? "Add card" : "Add List"}
        </button>
        <button
          className="button-cancel"
          onClick={() => {
            setOpen(false);
          }}
        >
          <Clear />
        </button>
      </div>
    </div>
  );
}

export default InputCard;
