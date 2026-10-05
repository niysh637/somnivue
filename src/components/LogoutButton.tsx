import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";


export function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
        <Button onClick={() => logout()} variant="bg-invisible" className="w-24">Logout</Button>
        )
    );
}