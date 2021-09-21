import Button from "./Button";
import axios from "axios";
import { useState } from "react";
import { createBrowserHistory } from "history";

export default function SigningOverlay(props) {
  
  let history = createBrowserHistory();
  const [userNameErr, setUserNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  function sendInfo(e) {
    const formData = new FormData(document.getElementById("signupForm"));
    setEmailErr(false);
    setUserNameErr(false);
    let userName = formData.get("userName");
    let password = formData.get("password");
    let firstName = formData.get("firstName");
    let lastName = formData.get("lastName");
    let email = formData.get("email");


    let patern = new RegExp(
      `^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`
    );
    let passwordPatern = new RegExp(
      `^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$`
    );
    // axios.get('/user?ID=12345')
    // .then(function (response) {
    //   // handle success
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   // handle error
    //   console.log(error);
    // })
    // .then(function () {
    //   // always executed
    // });
    axios({
      method: "post",
      url: "/creatUser",
      data: {
        userName,
        password,
        email,
        lastName,
        firstName,
      },
    })
    .then((res) => {console.log(`logged in succefully`, res)
    history.push('/FillInfo')
    history.forward();
    history.go(0)
    
  }
    )
    .catch((error) => {
      console.log(error.response.data.email)

      if (error.response.data.email)
      {
        setEmailErr(true);
      }
      if (error.response.data.userName)
      {
        setUserNameErr(true);
      }
    });
    // e.preventDefault();

  }

  return (
    <form className="flex flex-col" id="signupForm">
      <label hmtlFor="userName">username :</label>
      <input
        type="text"
        id="userName"
        name="userName"
        required
        minlength="4"
        size="10"
      ></input>
      {userNameErr && <div>user name already exist</div>}
      <label hmtlFor="firstName">firstname :</label>
      <input
        type="text"
        id="firstName"
        name="firstName"
        required
        minlength="4"
        size="10"
      ></input>
      <label hmtlFor="lastName">lastname :</label>
      <input
        type="text"
        id="lastName"
        name="lastName"
        required
        minlength="4"
        size="10"
      ></input>
      <label hmtlFor="email">email :</label>
      <input
        type="email"
        id="email"
        name="email"
        required
        minlength="4"
        size="10"
      ></input>
      {emailErr && <div>email name already exist</div>}
      <label hmtlFor="password">password :</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minlength="4"
        size="10"
      ></input>
      <Button text="Creat" onClick={sendInfo}></Button>
      {props.children}
    </form>
  );
}
