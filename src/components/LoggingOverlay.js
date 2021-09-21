import Button from "./Button";
import { createBrowserHistory } from "history";
import axios from "axios";

export default function LoginOverlay(props) {
  const history = createBrowserHistory();

  const validate = (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("loginFromId"));
    const userName = formData.get("userName");
    const password = formData.get("password");
    axios
      .post("/login", { password, email: userName })
      .then((err) => console.log(`logged in succefully`, err))
      .catch((res) => console.log(`respond with failure`, res));
    // history.push("/FillInfo");
  };
  return (
    <form className="flex flex-col" id="loginFromId">
      <label htmlFor="userName">username :</label>
      <input
        type="text"
        id="userName"
        name="userName"
        required
        minLength="4"
        size="10"
      ></input>
      <label htmlFor="password">password :</label>
      <input
        type="password"
        id="password"
        name="password"
        required
        minLength="4"
        size="10"
      ></input>
      <Button text="login" type="submit" onClick={validate}></Button>
    </form>
  );
}
