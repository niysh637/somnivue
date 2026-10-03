import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./Button";
import type { Variant } from "./Button";
import type { ComponentProps } from "react";


type LoginVariants = "Register" | "Login-noBorder" | "Login-border" | "Get Started";

type LoginButtonProps = {
    variant?: LoginVariants;
} & ComponentProps<"button">;

export function LoginButton({ variant="Register", ...props }:LoginButtonProps) {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const buttonInfo = getLoginButtonClassNames(variant);
    return (
        !isAuthenticated && (
        <Button {...props} onClick={() => loginWithRedirect()} variant={buttonInfo[0] as Variant} className={buttonInfo[1]} />
        )
    );
}

function getLoginButtonClassNames(variant:LoginVariants) {
    switch(variant) {
        case "Register":
            return ["dark", "w-24"];
        case "Login-noBorder":
            return ["light", "w-24"];
        case "Login-border":
            return ["light", "w-32 border-1 border-neutral-700"];
        case "Get Started":
            return ["dark", "w-34"];
        default:
            return ["", ""];
    }
}