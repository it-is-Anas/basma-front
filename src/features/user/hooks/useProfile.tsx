import { useRef, useState } from "react";

import IconBtn from '../../../components/IconBtn';
import projectImg from '../../../assets/cubeIcon.png';
import taskImg from '../../../assets/taskIcon.png';
import userImg from '../../../assets/userIcon.png';
import useTask from "./useTask";
import TaskCard from '../compoenents/taskCard';
import useProject from "./useProject";
import ProjectCard from '../compoenents/projectCard';
import useTeam from '../hooks/useTeam';
import type { team } from '../../../types';
import TeamCard from '../compoenents/teamCard';



export default function useProfile(){
    const { tasks  } = useTask();
    const { projects } = useProject();
    const { teams } =useTeam();
    const [filter,setFilter] = useState<string>('aboutMe');
    
    const aboutMeSection =(<div className="w-[calc(100%-5em)] mx-[auto] flex flex-col justify-center items-center"> <div className="my-[2em] flex items-center justify-around bg-[var(--gray)] rounded-[10px] h-[5em] w-[20em]"> <IconBtn img={projectImg} label='9' clsLabel='text-[var(--light-blue)]' /> <IconBtn img={taskImg} label='9' clsLabel='text-[var(--light-blue)]' /> <IconBtn img={userImg} label='9' clsLabel='text-[var(--light-blue)]' /> </div> <div className="my-[2em] flex items-center justify-center bg-[var(--gray)] rounded-[10px] h-[5em] w-[20em]"> <span className="font-[700] text-[1.3em] mr-[10px]"> {':)'}</span> Maria joined Basma on 1/2/2002 </div> </div>);
    const taskSection = (<div className="w-[calc(100%-5em)] mx-[auto] grid grid-cols-[repeat(auto-fill,minmax(208px,1fr))] items-start"> { tasks.map(task => <TaskCard key={task.id} id={task.id} title={task.title} desc={task.desc} priority={task.priority} deadline={task.deadline} createdAt={task.createdAt} catagory={task.catagory} user={task.user} /> ) } </div>);
    const projectSection = (<div className="w-[calc(100vw-5em)] mx-[auto] "> { projects.map(project=> <ProjectCard key={project.id} id={project.id} title={project.title} tasks={project.tasks} createdAt={project.createdAt} />) } </div>);
    const teamSection = (<div className="w-[calc(100%-5em)] mx-[auto] "> { teams.map ( (team: team) => <TeamCard key={team.id} id={team.id} title={team.title}  tasks={team.tasks} members={team.members} user={team.user} createdAt={team.createdAt} />) } </div>);
    
    const section = useRef(aboutMeSection);

    
    // section.current = aboutMeSection;
    
    const updateFilter = (filt:string,index:number)=>{
        setFilter(filt);
        if(index === 0){
            section.current = aboutMeSection;
        }else if(index === 1){
            section.current = taskSection;
        }else if(index === 2){
            section.current = projectSection;
        }else if( index === 3){
            section.current = teamSection;
        }
    }; 


    return{
        filter,
        updateFilter,
        section: section.current
    };
}