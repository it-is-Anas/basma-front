import profileImg from '../../../assets/profileIcon.png';
import FormButton from '../../../components/Buttons/formButton';
import CommentCard from '../compoenents/commentCard';
import TaskCard from '../compoenents/taskCard';
import useTask from '../hooks/useTask';

export default function Comment(){
    const { tasks  } = useTask();
    return (
        <div className="px-[10px] overflow-y-scroll">
            <div className="h-[3em] flex justify-start items-center text-[25px]">
                <img loading='lazy' src={profileImg} alt="" className="w-[2em] h-[2em] rounded-[50%] object-cover " />
                <div className="h-[100%] w-[100%] ml-[5px] flex flex-col justify-center">
                    <p className="font-[500] text-[.7em]">Maria Sharapova </p>
                    <p className="font-[500] text-[.5em]">3h ago</p>
                </div>
                <div className="flex justify-center items-center flex-col w-[auto]">
                    <p style={{whiteSpace:'nowrap'}} className="font-[500] text-[.5em]  "> 2 dayes</p>
                    <p className=" font-[500] text-[.5em]  text-[var(--light-blue)]">High</p>
                </div>                
            </div>
            <div className="text-[25px]">
                <div className="   flex justify-start items-center">
                    <p className=" w-[100%] text-[1em] font-[600]">The Last Of Us</p>
                    <p className="text-[.6em] font-[600] text-[var(--light-blue)]">Done</p>
                </div>
                <p className="  py-[.5em] font-[500] text-[.7em] ">
                    Hello, it's me
                    I was wondering if after all these years you'd like to meet
                    To go over everything
                    They say that time's supposed to heal ya, but I ain't done much healing
                    Hello, can you hear me?
                    I'm in California dreaming about who we used to be
                    When we were younger and free
                    I've forgotten how it felt before the world fell at our feet
                    There's such a difference between us
                    And a million miles                
                    Hello from the other side
                    I must've called a thousand times
                    To tell you I'm sorry for everything that I've done
                    But when I call, you never seem to be home
                    Hello from the outside
                    At least I can say that I've tried
                    To tell you I'm sorry for breaking your heart
                    But it don't matter, it clearly doesn't tear you apart anymore
                    Hello, how are you?
                    It's so typical of me to talk about myself, I'm sorry
                    I hope that you're well
                    Did you ever make it out of that town where nothing ever happened?
                </p>
                <div className="h-[2em] px-[5px] flex justify-start items-center !text-[16px] py-[1.5em]">
                    <p className=" px-[5px] py-[.3em] mr-[5px] rounded-[4px] text-[.8em] font-[700] bg-[var(--gray)] text-[var(--dark-blue)]">Personaly</p>
                    <p className=" px-[5px] py-[.3em] mr-[5px] rounded-[4px] text-[.8em] font-[700] bg-[var(--gray)] text-[var(--dark-blue)]">Work</p>
                </div>
                <div className="grid grid-cols-[70%_30%] max-[767px]:grid-cols-1">
                    <div className="w-[100%] ">
                        <div className=" w-[100%] h-[3em] p-[5px] flex justify-start items-center">
                            <input placeholder='set a comment ...' type="text" className="h-[2.2em] bg-[var(--gray)] text-[14px] px-[5px] boredr-none outline-none rounded-[5px] w-[100%]" />
                            <FormButton cls='text-[.7em] w-[auto]  text-[16px] !px-[20px] !py-[3px] font-[400] !m-[0] !mx-[5px]' label='Send'  />
                        </div>  
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                        <CommentCard />
                    </div>
                    <div className="text-[12px]">
                        <p className="font-[600] text-[1.5em] m-[5px]">Other Tasks</p>
                        {
                            tasks.map(task => <TaskCard cls='w-[18em] max-w-[80%]' type='commentPage' key={task.id} id={task.id} title={task.title} desc={task.desc} priority={task.priority} deadline={task.deadline} createdAt={task.createdAt} catagory={task.catagory} user={task.user} /> )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}