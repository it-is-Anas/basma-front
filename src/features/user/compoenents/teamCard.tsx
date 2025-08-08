import profileImg from '../../../assets/profileIcon.png';

import type { team } from '../../../types';


export default function TeamCard({id,createdAt,members,tasks,title,user}:team){
    if(id)
        return (
            <div className="w-[90%]  p-[10px] rounded-[10px] my-[10px] mx-[auto] bg-[var(--gray)] flex items-center justify-around">
                <div className=" mx-[10px] mr-[auto] mt-[10px] flex justify-start items-start">
                    <img src={profileImg} alt="" className="w-[2.5em]" />
                    <div className="h-[100%] ml-[10px]">
                        <p className="font-[600]">{ user.firstName } { user.lastName }</p>
                        <p className="font-[500] text-[.8em]">{ createdAt }</p>
                    </div>
                </div>
                <p className="font-[700] mr-[auto] ">{ title }</p>
                <div className="mx-[auto] rounded-[5px] p-[5px] flex justify-between items-center">
                    <p className="font-[500]">Tasks: </p>
                    <p className="font-[700] ml-[5px]">{ tasks }</p>
                </div>
                <div className="ml-[auto]  rounded-[5px] p-[5px] flex justify-between items-center">
                    <p className="font-[500]">Memebers: </p>
                    <p className="font-[700] ml-[5px]">{ members }</p>
                </div>
            </div>
        );

    return <></>;
}