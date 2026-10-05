import { useAuth0 } from "@auth0/auth0-react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import micIcon from '../assets/mic_icon_light.png';


export function RecordingPage() {
    const { isAuthenticated } = useAuth0();
    return (isAuthenticated && 
        <div className="min-h-screen flex flex-col">
            <Header />
            <div className="flex flex-1">
                <Navbar />
                <main className="flex-1 bg-neutral-50">
                    <StartText />
                    <div className="flex flex-col items-center justify-center -translate-x-2 gap-2">
                        <RecordButton />
                        <span className="text-medium">^Tap to start recording^</span>
                    </div>
                </main>
            </div>
        </div>
      );
}

function StartText() {
    return (
        <div className="flex flex-col w-full text-neutral-700 px-18 py-14">
            <span className="text-3xl font-bold pb-3">Record your sleep.</span>
            <div className="flex flex-col text-lg gap-1 w-5/6">
                <span>To start a recording, click the mic button below.</span>
                <span>We will start listening and tracking your snoring in real time; if you have alerts enabled, you will be alerted when you begin to snore.</span>
                <span>To end the recording, simply click the mic again.</span>
            </div>
        </div>
    );
}

function RecordButton() {
    return (
        <button className="flex items-center justify-center bg-neutral-700 text-white rounded-full size-24">
            <img src={micIcon} width="25" height="20" />
        </button>
        // <button className="flex items-center justify-center bg-neutral-700 text-white rounded-full w-1/11 h-2/5 items-center">
        //     <img src={micIcon} width="25" height="20" />
        // </button>
    );
}