import Nav from "./Nav.js";
import ProfilePhotos from "./ProfilePhotos.js";
// import button from '../styles/buttons.module.css'
// import forum from '../styles/Forum.module.css'
import Select from "./Select.js";
import Passions from "./Passions";
import TextArea from "./TextArea.js";
import axios from "axios";
import { useState } from 'react'

let gender = ["male", "female", "bitchs and stuff"];

export const Forum = () => {

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

  function sendinf(e) {
    // e.preventDefault();
    const formData = new FormData(document.getElementById('infoFormId'));
    let userGender = formData.get("userGender");
    let genderPreference = formData.get("genderPreference");
    let passions = passionArray.filter(x => x.selected === true).map(x => x.tag);
    console.log(passions)
    let biography = formData.get("biography");
  //   axios({
  //     method: "post",
  //     url: "/FillInfo",
  //     data: {
  //       passions,
  //       userGender,
  //       biography,
  //       genderPreference,
  //     },
  //   })
  }

  return (
    <div>
      <Nav msg="fill information" form="infoFormId" onClick={sendinf} id="buttonFormId"/>
      <div className="w-10/12 bg-red-500 mx-auto max-w-screen-lg">
        <h1 className="text-center my-10">CREATE ACCOUNT</h1>
        <form id="infoFormId" action="POST" enctype="multipart/form-data">
          <div className="flex">
            <div className="w-3/6" id="infoForm">
              <div>
              <Select options={gender} label="select gender:" name="userGender" />
              <Select options={gender} label="gender preference :" name="genderPreference" />
              <TextArea name="biography"/>
              </div>
            </div>
            <ProfilePhotos className="w-3/6" />
          </div>
        <h2 className="text-center">Optional</h2>
          <Passions form="infoFormId" button="buttonFormId" setPassions={setPassions} passionArray={passionArray}></Passions>
        </form>
      </div>
    </div>
  );
};

export default Forum;
