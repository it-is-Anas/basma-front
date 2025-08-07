import IconBtn from "../../../components/IconBtn";
import cubeIcon from '../../../assets/cubeIcon.png';
import taskIcon from '../../../assets/taskIcon.png';
import userIcon from '../../../assets/userIcon.png';

interface props {
    cls?: string,
};

export default function SideBar({cls=''}: props){
    return(
        <aside className={"bg-[var(--gray)] flex flex-col justify-start items-center " +cls}>
            <IconBtn img={taskIcon} cls="mb-[1em] mt-[1em] w-[1.5em]" />
            <IconBtn img={cubeIcon} cls="mb-[1em] mt-[1em] w-[1.5em]" />
            <IconBtn img={userIcon} cls="mb-[1em] mt-[1em] w-[1.5em]" />
        </aside>
    );
}