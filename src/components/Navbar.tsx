import { Button } from "./Button";
import homeIcon from '../assets/home_icon.png';
import micIcon from '../assets/mic_icon.png';
import trendsIcon from '../assets/trends_icon.png';
import profileIcon from '../assets/profile_icon.png';


export function Navbar() {
    return (
        <div className="flex flex-col bg-neutral-200 w-1/5 gap-6 py-8 border-r border-neutral-300">
            <div className="flex gap-3 justify-center items-center">
                <img src={homeIcon} width="20" height="5" />
                <Button variant="bg-invisible">Home</Button>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <img src={micIcon} width="15" height="5" />
                <Button variant="bg-invisible">Record</Button>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <img src={trendsIcon} width="20" height="5" />
                <Button variant="bg-invisible">Trends</Button>
            </div>
            <div className="flex gap-3 justify-center items-center">
                <img src={profileIcon} width="20" height="5" />
                <Button variant="bg-invisible">Profile</Button>
            </div>
        </div>
    );
}