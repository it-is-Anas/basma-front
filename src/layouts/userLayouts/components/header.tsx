import MiniAppLogo from "../../../components/miniAppLogo";
import IconBtn from "../../../components/IconBtn";
import InputSearch from "./inputSearch";
// import plusIcon from '../../../assets/plusIcon.png';
import pofileIcon from '../../../assets/profileIcon.png';
import searchIcon from '../../../assets/searchIcon.png';
import AppLogo from "../../../components/appLogo";
import NotificationPopUp from "../PopUps/Notification";
import CreateProductPopUp from "../PopUps/CreateProduct";


export default function Header(){
    return (
        <header className="bg-[var(--gray)] flex justify-start items-center">
            <span className="ml-[1em] max-[767px]:hidden">
                <AppLogo />
            </span>
            <span className="hidden max-[767px]:block">
                <MiniAppLogo />
            </span>
            <InputSearch />
            <div className=" max-[767px]:ml-auto flex items-center">
                <IconBtn key='search' img={searchIcon} cls='hidden max-[767px]:block w-[1.4em]' />
                {/* <IconBtn key='plus' img={plusIcon} cls='w-[1.2em]' /> */}
                <CreateProductPopUp />
                <NotificationPopUp />
                <IconBtn key='profile' unactive={false} link="/user/profile" img={pofileIcon} cls=" rounded-[50%]" />
            </div>
        </header>
    );
}