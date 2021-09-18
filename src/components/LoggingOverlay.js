import Button from './Button'
import { createBrowserHistory } from 'history'

export default function LoginOverlay(props)
{
    const history = createBrowserHistory()
    const validate = (e) => {
        history.push("/FillInfo");
    }
    return (
        <div className="w-screen h-screen bg-purple-600 bg-opacity-25 fixed top-0 left-0 flex items-center justify-center ">
            <div className="bg-gray-500 w-2/5 max-w-md">
                <form className="flex flex-col">
                    <label for="userName">username :</label>
                    <input type="text" id="userName" name="userName" required minlength="4" size="10"></input>
                    <label for="password">password :</label>
                    <input type="password" id="password" name="password" required minlength="4" size="10"></input>
                    <Button text="login" onClick={validate}></Button>
                </form>
            </div>
        </div>
    )
}