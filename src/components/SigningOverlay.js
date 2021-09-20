import Button from "./Button";
import axios from "axios";

export default function SigningOverlay(props) {
  function sendInfo(e) {
    e.preventDefault();
    console.log(e);
    const formData = new FormData(document.getElementById("signupForm"));

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
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
