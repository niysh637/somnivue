import { useAuth0 } from '@auth0/auth0-react';
import somniIcon from '../assets/somni_icon.png';
import { LoginButton } from './LoginButton';
import { LogoutButton } from './LogoutButton';


export function Header() {
    const { isAuthenticated } = useAuth0();
    return (
        getHeaderHTML(isAuthenticated)
    );
}

function getHeaderHTML(isAuthenticated:boolean) {
    if (!isAuthenticated) {
        return (
            <div className="flex justify-between px-2 pb-4 py-3 pl-12">
                <div className="flex gap-8">
                    <img src={somniIcon} width="40" height="35" />
                    <span className="text-4xl font-bold text-neutral-700">SomniVue</span>
                </div>
                <div className="flex gap-4">
                    <LoginButton variant="Login-noBorder">Login</LoginButton>
                    <LoginButton variant="Register">Register</LoginButton>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex bg-neutral-200 justify-between px-2 pb-4 py-3 pl-12 border-b border-neutral-300">
                <div className="flex gap-8">
                    <img src={somniIcon} width="40" height="35" />
                    <span className="text-4xl font-bold text-neutral-700">SomniVue</span>
                </div>
                <div className="flex gap-4">
                    <LogoutButton />
                </div>
            </div>
        );
    }
}