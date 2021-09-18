import { Container } from "purgecss/node_modules/postcss"
import { useState } from "react"
import Button from './Button'
import LoggingOverlay from './LoggingOverlay'
import SigningOverlay from './SigningOverlay'

export default function LandingPage() {

    const [signing, setSinging] = useState(false)
    const [loging, setLoging] = useState(false)

    return (<div>
        <nav class="w-full fixed from-black flex justify-between items-center">
            <img src="favicon.ico"></img>
            <Button text="login" onClick={(e) => setLoging(true)}></Button>
        </nav>
        <div class="flex flex-col justify-center items-center h-screen bg-background bg-cover bg-no-repeat">
            <h1 class="text-7xl text-white">Swipe Right</h1>
            <Button text="Creat Account" onClick={(e) => setSinging(true)}></Button>
        </div>

        {signing && <SigningOverlay></SigningOverlay>}
        {loging && <LoggingOverlay></LoggingOverlay>}
        
    </div>)
}