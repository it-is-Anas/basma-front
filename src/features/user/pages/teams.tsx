import FilterBtn from "../../../components/Buttons/filterBtn";

import useTeam from "../hooks/useTeam";
import TeamCard from '../compoenents/teamCard';
import type { team } from "../../../types";

export default function Teams (){
    const { teams } = useTeam();
    return (
        <div className="grid grid-rows-[3em_1fr] overflow-x-hidden overflow-y-scroll">            
            <div className="flex justify-start items-center overflow-x-scroll" >
                <FilterBtn label='All' active={true} />
                <FilterBtn label='Done' active={false} />
                <FilterBtn label='In progress' active={false} />
                <FilterBtn label='To do' active={false} />
                <FilterBtn label='Groups' active={false} />
            </div>
            <div className="">
                {
                    teams.map ( (team: team) => <TeamCard key={team.id} id={team.id} title={team.title}  tasks={team.tasks} members={team.members} user={team.user} createdAt={team.createdAt} />)
                }
            </div>
        </div>
    );
}