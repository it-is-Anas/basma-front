import FilterBtn from "../../../components/Buttons/filterBtn";
import TaskCard from "../compoenents/taskCard";
import useTask from '../hooks/useTask';

export default function Tasks(){
    
    const { tasks  } = useTask();
        return (
            <div className="grid grid-rows-[3em_1fr] overflow-y-scroll">            
                <div className="flex justify-start items-center overflow-x-scroll" >
                    <FilterBtn label='All' active={true} />
                    <FilterBtn label='Done' active={false} />
                    <FilterBtn label='In progress' active={false} />
                    <FilterBtn label='To do' active={false} />
                    <FilterBtn label='Groups' active={false} />
                </div>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(208px,1fr))] items-start">
                    {
                        tasks.map(task => <TaskCard key={task.id} id={task.id} title={task.title} desc={task.desc} priority={task.priority} deadline={task.deadline} createdAt={task.createdAt} catagory={task.catagory} user={task.user} /> )
                    }
                </div>
            </div>
        );
    
}