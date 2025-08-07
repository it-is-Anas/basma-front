import { Outlet } from "react-router-dom";
import AppLogo from "../components/appLogo";



export default function AuthLayout(){
    return (
        <div className="w-[100dvw] h-[100dvh]  grid grid-rows-[3em_1fr]">
            <header className="flex justify-flex items-center p-[1em]">
                <AppLogo />
            </header>
            <Outlet />
        </div>
    );
}