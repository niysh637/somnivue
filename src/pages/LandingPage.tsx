import { Button } from "../components/Button";
import { Header } from "../components/Header";


export function LandingPage() {
    return (
        <div>
            <Header loggedIn={false} />
            <TintedPanel />
            <TripleColText />
        </div>
      );
}


function TintedPanel() {
    return (
        <div>
            <div className="bg-neutral-100 px-16 pt-10 pb-4 flex flex-col">
                <div className="flex flex-col gap-2 w-[470px]"> {/*max-w-xl*/}
                    <span className="text-2xl font-bold text-neutral-700">Ready to have the best sleep of your life?</span>
                    <span className="text-lg text-neutral-700 pl-1">SomniVue tracks your snoring to help you achieve the sleep of your dreams (get it??).</span>
                </div>
                <div className="flex gap-3 w-1/3 pt-7 pl-5">
                    <Button variant="dark" className="w-34">Get Started</Button>
                    <Button variant="light" className="w-32 border-1 border-neutral-700">Log in</Button>
                </div>
            </div>
        </div>
    );
}

function TripleColText() {
    return (
        <div className="flex w-5/8 px-14 pt-16 text-center text-lg">
            <div className="flex-1 px-4 flex justify-center items-center">
                <span>Track your snoring and get alerted in real time!</span>
            </div>
            <div className="flex-1 px-4 flex justify-center items-center border-l-2 border-neutral-500">
                <span>Store and re-listen to snoring clips!</span>
            </div>
            <div className="flex-1 px-4 flex justify-center items-center border-l-2 border-neutral-500">
                <span>Realize when it’s time to visit a doctor!</span>
            </div>
        </div>
    );
}