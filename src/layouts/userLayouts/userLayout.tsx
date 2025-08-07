import { Outlet } from "react-router-dom";
import Header from "./components/header";
import SideBar from "./components/sideBar";



export default function UserLayout(){
    return (
        <div className="w-[100dvw] h-[100dvh] bg-[red] grid grid-rows-[4em_1fr]">
            <Header  />
            <div className="grid grid-cols-[3em_1fr] ">
                <SideBar  />
                <Outlet />
            </div>
        </div>
    );
}