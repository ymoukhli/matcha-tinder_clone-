import LoggingOverlay from "./LoggingOverlay";
import Overlay from "./Overlay";
import SigningOverlay from "./SigningOverlay";

export default function LandingPage() {
  return (
    <div>
      <nav className="w-full fixed from-black flex justify-between items-center">
        <img src="favicon.ico"></img>
        <Overlay text="login">
          <LoggingOverlay></LoggingOverlay>
        </Overlay>
      </nav>
      <div className="flex flex-col justify-center items-center h-screen bg-background bg-cover bg-no-repeat">
        <h1 className="text-7xl text-white">Swipe Right</h1>
        <Overlay text="Creat Account" onClick={(e) => console.log(e)}>
          <SigningOverlay></SigningOverlay>
        </Overlay>
      </div>
    </div>
  );
}
