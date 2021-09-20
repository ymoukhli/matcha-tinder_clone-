import React, { useState } from "react";
import Button from "./Button";
import Overlay from "./Overlay";

export const Passions = () => {
  let [displayPassions, setCurrent] = useState([]);
  let [selected, setSelect] = useState(false);
  let [passionArray, setPassions] = useState([
    { tag: "music", selected: false },
    { tag: "wine", selected: false },
    { tag: "travel", selected: false },
    { tag: "sex", selected: false },
    { tag: "shopping", selected: false },
    { tag: "talking", selected: false },
    { tag: "running", selected: false },
    { tag: "dancing", selected: false },
    { tag: "gaming", selected: false },
  ]);
  //// test ////
  let tmpArray = [...passionArray];
  const test = (e) => {
    for (let passion of tmpArray) {
      if (passion.tag === e.target.textContent) {
        passion.selected = !passion.selected;
        break;
      }
    }
    setPassions(tmpArray);
  };
  // const changePassions = (e) => {
  //   console.log("test", e);
  //   let tmpArra = [...displayPassions];
  //   let tmpArraPassion = [...passionArray];
  //   tmpArray = [...passionArray];
  //   let tmpArraPassions = passionArray.filter(
  //     (x) => x.tag === e.currentTarget.textContent
  //   );
  //   if (tmpArraPassions[0].selected === true) {
  //     tmpArra = tmpArra.filter((x) => x.tag !== e.currentTarget.textContent);
  //   } else {
  //     tmpArra.push({ tag: e.currentTarget.textContent, selected: true });
  //   }
  //   tmpArraPassions[0].selected = !tmpArraPassions[0].selected;
  //   setCurrent(tmpArra);
  //   setPassions(tmpArraPassion);
  // };
  const changePassions = (e) => {
    let tmp = tmpArray.filter((x) => x.selected === true);
    setCurrent(tmp);
  };
  let allPassions = passionArray.map((x, i) => (
    <div Key={i + "passions"}>
      <Button
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

  let currentPassionsDisplay = "";
  let display = false;
  if (currentPassions.length < 1) {
    display = false;
    //   <div onClick={changeDisplay}> pick your passion tags </div>
  } else {
    display = true;
  }

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
