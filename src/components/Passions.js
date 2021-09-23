import React, { useEffect, useState } from "react";
import Button from "./Button";
import Overlay from "./Overlay";

export const Passions = (props) => {
  let [displayPassions, setCurrent] = useState([]);
  let tmpArray = [...props.passionArray];
  
  const test = (e) => {
    for (let passion of tmpArray) {
      if (passion.tag === e.target.textContent) {
        passion.selected = !passion.selected;
        break;
      }
    }
    props.setPassions(tmpArray);
  };

  const changePassions = (e) => {
    let tmp = tmpArray.filter((x) => x.selected === true);
    setCurrent(tmp);
  };
  let allPassions = props.passionArray.map((x, i) => (
    <div Key={i + "passions"}>
      <Button
        type="button"
        id={x.tag}
        onClick={test}
        text={x.tag}
        style={x.selected ? "selected" : "normal"}
      ></Button>
    </div>
  ));

  let currentPassions = displayPassions.map((x, i) => (
    <div Key={i + "current"}>
      <Overlay text={x.tag} style="normal" onClick={changePassions}>
        {allPassions}
      </Overlay>
    </div>
  ));
  let display = false;
  if (currentPassions.length < 1) {
    display = false;
  } else {
    display = true;
  }

  // handel form submit //
  return (
    <div>
      <div>Passions</div>
      {!display && (
        <Overlay text="pick your passion tags" onClick={changePassions}>
          {allPassions}
        </Overlay>
      )}
        {display && currentPassions}
    </div>
  );
};

export default Passions;
