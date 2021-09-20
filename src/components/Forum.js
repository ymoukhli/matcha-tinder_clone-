import Nav from "./Nav.js";
import ProfilePhotos from "./ProfilePhotos.js";
// import button from '../styles/buttons.module.css'
// import forum from '../styles/Forum.module.css'
import Select from "./Select.js";
import Passions from "./Passions";
import TextArea from "./TextArea.js";

let gender = ["male", "female", "bitchs and stuff"];

export const Forum = () => {
  return (
    <div>
      <Nav msg="fill information" form="infoForm" />
      <div className="w-10/12 bg-red-500 mx-auto max-w-screen-lg">
        <h1 className="text-center my-10">CREATE ACCOUNT</h1>
        <div className="flex">
          <div className="w-3/6" id="infoForm">
            <form>
              <Select options={gender} label="select gender:" />
              <Select options={gender} label="gender preference :" />
              <TextArea />
            </form>
          </div>
          <ProfilePhotos className="w-3/6" />
        </div>
        <h2 className="text-center">Optional</h2>
        <Passions></Passions>
      </div>
      {/*  body container */}
    </div>
  );
};

export default Forum;
