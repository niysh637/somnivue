import somniIcon from '../assets/somni_icon.png';
import { Button } from './Button';


type HeaderProps = {
    loggedIn: boolean;
};

export function Header({ loggedIn }:HeaderProps) {
    return (
        getHeaderHTML(loggedIn)
    );
}

function getHeaderHTML(loggedIn:boolean) {
    if (!loggedIn) {
        return (
            <div className="flex justify-between px-2 py-3 pl-12">
                <div className="flex gap-8">
                    <img src={somniIcon} width="40" height="35" />
                    <span className="text-4xl font-bold text-neutral-700">SomniVue</span>
                </div>
                <div className="flex gap-4">
                    <Button variant='light' className='w-24'>Login</Button>
                    <Button variant='dark' className='w-24'>Register</Button>
                </div>
            </div>
        );
    } else {
        return null;
    }
}