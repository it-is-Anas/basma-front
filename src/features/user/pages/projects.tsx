import FilterBtn from "../../../components/Buttons/filterBtn";
import useProject from '../hooks/useProject';
import ProjectCard from '../compoenents/projectCard';



export default function Projects(){
    const { projects } = useProject();
    return (
        <div className="grid grid-rows-[3em_1fr]  !overflow-y-scroll">            
            <div className="flex justify-start items-center overflow-x-scroll" >
                <FilterBtn label='All' active={true} />
                <FilterBtn label='Done' active={false} />
                <FilterBtn label='In progress' active={false} />
                <FilterBtn label='To do' active={false} />
                <FilterBtn label='Groups' active={false} />
            </div>
            <div className="overflow-x-hidden   ">
                {
                    projects.map(project=> <ProjectCard key={project.id} id={project.id} title={project.title} tasks={project.tasks} createdAt={project.createdAt} />)
                }
            </div>
        </div>
    );
}