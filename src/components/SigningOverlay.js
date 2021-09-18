import Button from './Button'

export default function SigningOverlay(props)
{
    return (
        <div class="w-screen h-screen bg-purple-600 bg-opacity-25 fixed top-0 left-0 flex items-center justify-center ">
            <div className="bg-gray-500 w-2/5 max-w-md">
                <form className="flex flex-col">
                    <label for="userName">username :</label>
                    <input type="text" id="userName" name="userName" required minlength="4" size="10"></input>
                    <label for="firstName">firstname :</label>
                    <input type="text" id="firstName" name="firstName" required minlength="4" size="10"></input>
                    <label for="lastName">lastname :</label>
                    <input type="text" id="lastName" name="lastName" required minlength="4" size="10"></input>
                    <label for="email">email :</label>
                    <input type="email" id="email" name="email" required minlength="4" size="10"></input>
                    <label for="password">password :</label>
                    <input type="password" id="password" name="password" required minlength="4" size="10"></input>
                    <Button text="Creat"></Button>
                </form>
            </div>
        </div>
    )
}