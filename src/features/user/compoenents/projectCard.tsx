import type { project } from '../../../types';
import TaskCard from './taskCard';


export default function ProjectCard({id,title,tasks,createdAt}:project){
    if(id && title?.length && tasks?.length){
        return (
            <div className="w-[calc(100%-10px)]  mx-[auto] mb-[10px]">
                <p className="font-[700] text-[1.1em] text-[var(--dark-blue)]">{ title }</p>
                <div className="w-[100%] flex justify-start items-center overflow-x-scroll">
                    {
                        tasks.map(task => <TaskCard cls='!mx-[10px] !flex-[1] min-w-[13em]' key={task.id} id={task.id} title={task.title} desc={task.desc} priority={task.priority} deadline={task.deadline} createdAt={task.createdAt} catagory={task.catagory} user={task.user} /> )
                    }
                </div>
                <p style={{textAlign: 'right'}} className="text-[.7em] font-[500]">{ createdAt }</p>
            </div>
        );
    }
}