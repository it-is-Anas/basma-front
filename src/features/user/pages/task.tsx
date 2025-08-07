import FilterBtn from "../../../components/Buttons/filterBtn";
import TaskCard from "../compoenents/taskCard";


export default function Task(){
    return (
        <div className="grid grid-rows-[3em_1fr] bg-[green] overflow-y-scroll">            
            <div className="bg-[yellow] flex justify-start items-center overflow-x-scroll" >
                <FilterBtn label='All' active={true} />
                <FilterBtn label='Done' active={false} />
                <FilterBtn label='In progress' active={false} />
                <FilterBtn label='To do' active={false} />
                <FilterBtn label='Groups' active={false} />
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
                {
                    [1,2,3,4,5,5,4,3,2,221,1,1,11,1,9].map(ele => <TaskCard /> )
                }
            </div>
        </div>
    );
}