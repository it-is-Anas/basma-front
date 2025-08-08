
import profileImg from '../../../assets/profileIcon.png'
import FormButton from '../../../components/Buttons/formButton';
import type { task } from '../../../types';

export default function TaskCard({ id,title,desc,priority,catagory,user , createdAt , deadline ,cls=''}: task){
    const shortDesc = desc.length > 30? desc.slice(0,32) + ' ...':desc;
    if(id)
        return (
            <div className={"m-[10px] w-[90%] mx-[auto] bg-[var(--gray)] rounded-[10px]  p-[5px] "+cls}>
                <div className="w-[100%] mt-[10px] flex justify-start items-start">
                    <img src={profileImg} alt="" className="w-[2.5em]" />
                    <div className="h-[100%] ml-[10px]">
                        <p className="font-[600]">{ user.firstName } { user.lastName }</p>
                        <p className="font-[500] text-[.8em]">{ createdAt }</p>
                    </div>
                </div>
                <p className="w-[100%] px-[5px] pt-[5px] text-[1.2em] font-[600]">{title}</p>
                <p className="font-[500] px-[5px] text-[.8em] text-[var(--light-blue)]"> { priority } <span className="text-[var(--light-green)]">Done</span></p>
                <p className="p-[5px] font-[500] text-[.7em]">
                    { shortDesc }
                </p>
                <p className="p-[5px] font-[500] text-[.8em]">Deadline:  <span className="text-[var(--light-blue)]"> { deadline }</span></p>
                <div className="px-[5px] flex justify-start items-center">
                    {
                        catagory.map((ele,index) => <p key={ele+index} className="text-[11px] px-[5px] py-[.3em] mr-[5px] rounded-[4px] text-[.8em] font-[700] bg-[var(--white)] text-[var(--dark-blue)]">{ele}</p>)
                    }
                </div>
                <div className="flex ">
                    <FormButton cls='text-[.7em] w-[80%] my-[10px] mx-[auto] bg-[var(--light-green)]' label='Set comment'  />
                </div>
            </div>
        );
    return (
        <></>
    );
}