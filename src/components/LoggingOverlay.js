import Button from "./Button";
import { createBrowserHistory } from "history";
import axios from "axios";
import { useState } from "react";

export default function LoginOverlay(props) {
  
  const history = createBrowserHistory();
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  


  const validate = (e) => {
    e.preventDefault();
    setEmailErr(false);
    setPasswordErr(false);
    const formData = new FormData(document.getElementById("loginFromId"));
    const email = formData.get("email");
    const password = formData.get("password");
    axios
      .post("/login", { password, email })
      .then((res) => {
        history.push('/FillInfo')
        history.go(0)
      })
      .catch((error) => {
        if (error.response.data.email)
        {
          setEmailErr(true);
        }
        if (error.response.data.password)
        {
          setPasswordErr(true);
        }
      });
  };
  return (
    <form className="flex flex-col" id="loginFromId">
      <label htmlFor="email">email :</label>
      <input
        type="text"
        id="email"
        name="email"
        required
        minLength="4"
        size="10"
      ></input>
      {emailErr && <div>email doesn't exist</div>}
      <label htmlFor="password">password :</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minLength="4"
        size="10"
      ></input>
      {passwordErr && <div>wrong password</div>}

      <Button text="login" type="submit" onClick={validate}></Button>
    </form>
  );
}
