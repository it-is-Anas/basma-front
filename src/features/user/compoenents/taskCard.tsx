
import { useNavigate } from 'react-router-dom';
import profileImg from '../../../assets/profileIcon.png'
import FormButton from '../../../components/Buttons/formButton';
import type { task } from '../../../types';

export default function TaskCard({ id,title,desc,priority,catagory,user , createdAt , deadline ,cls='', type='',toComment=true}: task){
    const shortDesc = desc.length > 155? desc.slice(0,155 ) + ' ...':desc;
    const navigate = useNavigate();
    const clickHandler = ()=>{
        if(id && toComment)
            navigate('/user/comment/'+id);
    };
    if(id)
        return (
    //h-[15.5em]
            <div onClick={clickHandler} className={" m-[10px]   w-[90%] mx-[auto] bg-[var(--gray)] rounded-[10px]  p-[5px] "+cls}>
                <div className=" w-[100%] h-[3em] flex justify-start items-center">
                    <img loading='lazy' src={profileImg} alt="" className="w-[2em] h-[2em] rounded-[50%] object-cover " />
                    <div className="h-[100%] w-[100%] ml-[5px] flex flex-col justify-center">
                        <p className="font-[500] text-[.7em]">{ user.firstName } { user.lastName }</p>
                        <p className="font-[500] text-[.5em]">{ createdAt }</p>
                    </div>
                    <div className="">
                        <p className="font-[500] text-[.5em] mt-[10px] mb-[auto]"> { deadline }</p>
                        <p className=" font-[500] text-[.5em]  text-[var(--light-blue)]">{priority}</p>
                    </div>
                </div>
                <div className=" h-[1.5em] flex justify-start items-center">
                    <p className=" w-[100%] text-[1em] font-[600]">{title}</p>
                    <p className="text-[.6em] font-[600] text-[var(--light-blue)]">Done</p>
                </div>
                <p className=" h-[8em] py-[.5em] font-[500] text-[.7em] ">
                    { shortDesc }
                </p>
                <div className=" h-[2em] px-[5px] flex justify-start items-center">
                    {
                        catagory.map((ele,index) => <p key={ele+index} className="text-[10px] px-[5px] py-[.3em] mr-[5px] rounded-[4px] text-[.8em] font-[700] bg-[var(--white)] text-[var(--dark-blue)]">{ele}</p>)
                    }
                </div>
                    {
                        type !== 'commentPage'  &&
                        <div className="  h-[3em] flex justify-end items-center ">
                            <FormButton click={(e)=>{e.preventDefault();e.stopPropagation()}} cls='text-[.7em] w-[auto] !py-[2px] bg-[var(--white)] !text-[var(--light-blue)] border border-[var(--light-blue)] border-[2px] !m-[0] !mx-[5px]' label='Status'  />
                            <FormButton click={(e)=>{e.preventDefault();e.stopPropagation()}} cls='text-[.7em] w-[auto] !py-[2px] !m-[0] !mx-[5px] border border-[var(--light-blue)] border-[2px]' label='Set comment'  />
                        </div>
                    }
            </div>
        );
    return (
        <></>
    );
}