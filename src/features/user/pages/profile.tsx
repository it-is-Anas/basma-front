import profileIcon from '../../../assets/profileIcon.png';
import FilterBtn from '../../../components/Buttons/filterBtn';
import coverImg from '../../../assets/cover.jpg';

import useProfile from '../hooks/useProfile';

export default function Profile(){

    const { filter, updateFilter , section } = useProfile();
    return (
        <div className=" grid grid-rows-[50%_1fr] overflow-x-scroll">
            <div className="bg-[var(--light-green)] relative">
                <img loading='lazy' src={coverImg} alt="" className="w-[100%] h-[100%] object-cover absolute top-0 left-0" />
                <img loading='lazy' src={profileIcon} alt="" className="absolute bottom-0 left-[1em] w-[10em] h-[10em] rounded-[50%]  " />
                <div style={{transform: 'translate(0%,-100%)'}} className="absolute bottom-[0em] left-[12em]">
                    <p className="font-[700] text-[1.3em]" >Maria Sharapove</p>
                    <p className="font-[500] text-[.7em]">Email@example.com</p>
                </div>
            </div>
            <div className="w-[100%] ">
                <div className="ml-[2em] p-[.5em] flex justify-start items-center overflow-x-scroll" >
                    <FilterBtn label='About me' click={()=>updateFilter('aboutMe',0)} active={filter === 'aboutMe'} />
                    <FilterBtn label='Tasks' click={()=>updateFilter('tasks',1)} active={filter === 'tasks'} />
                    <FilterBtn label='Projects' click={()=>updateFilter('projects',2)} active={filter === 'projects'} />
                    <FilterBtn label='Teams' click={()=>updateFilter('teams',3)} active={filter === 'teams'} />
                </div>
            </div>
            { section }
            
            
        </div>
    );
}