import MiniAppLogo from "../../../components/miniAppLogo";
import IconBtn from "../../../components/IconBtn";
import InputSearch from "./inputSearch";
import plusIcon from '../../../assets/plusIcon.png';
import notiIcon from '../../../assets/notiIcon.png';
import pofileIcon from '../../../assets/profileIcon.png';
import searchIcon from '../../../assets/searchIcon.png';


export default function Header(){
    return (
        <header className="bg-[var(--gray)] flex justify-start items-center">
            <MiniAppLogo />
            <InputSearch />
            <div className=" max-[767px]:ml-auto flex items-center">
                <IconBtn key='search' img={searchIcon} cls='hidden max-[767px]:block w-[1.4em]' />
                <IconBtn key='plus' img={plusIcon} cls='w-[1.4em]' />
                <IconBtn key='noti' img={notiIcon} label="9" />
                <IconBtn key='profile' img={pofileIcon} />
            </div>
        </header>
    );
}