import IconBtn from "../../../components/IconBtn";
import plus from '../../../assets/plusIcon.png';
import { useEffect, useRef, useState } from "react";
import InputFiled from "../../../components/Inputs/inputFiled";
import FormButton from "../../../components/Buttons/formButton";
import { useLocation } from "react-router-dom";


export default function CreateTeamPopUp(){

    const [opened,setOpen] = useState<boolean>(false);
    const popup = useRef<HTMLDivElement | null>(null);

    const locate = useLocation().pathname === '/user/teams';

    const openPopUp = ()=>{
        setOpen(true);
    };
    const closePopUp = ()=>{
        setOpen(false);
    };
    
    // close when clicking outside the popup
    useEffect(() => {
        const handleDocumentMouseDown = (event: MouseEvent) => {
            if (!opened) return;
                const targetNode = event.target as Node | null;
            if (popup.current && targetNode && !popup.current.contains(targetNode)) {
                closePopUp();
            }
        };
            document.addEventListener('mousedown', handleDocumentMouseDown);
        return () => {
            document.removeEventListener('mousedown', handleDocumentMouseDown);
        };
    }, [opened]);


    if(locate)
        return (
            <div>
                <IconBtn click={openPopUp} key='createproject' img={plus} />
                {
                    opened &&
                    <div ref={popup} style={{transform:'translate(-50%,-50%)'}}  className="fixed bg-[var(--gray)] shadow-[0px_0px_20px_.2px_var(--light-blue)] rounded-[10px] top-[50%] left-[50%] max-w-[80%]  w-[27em] ">
                        <div className="w-[100%]  px-[1em] py-[.4em] flex justify-between items-center">
                            <p className="font-[500] text text-[1.3em]">Create a team</p>
                        </div>
                        <InputFiled cls='mx-[auto]  !w-[90%]' label="team name" placeholder="laptop ..." inputCls="bg-[var(--white)] !w-[100%]" />
                        <div className="w-[90%] mx-[auto]  px-[10px] mb-[10px] flex items-center justify-end">
                            <FormButton label='Cancel' cls='mt-[0] text-[14px]  w-[auto] mr-[10px] bg-[var(--white)] !text-[var(--light-blue)]' />
                            <FormButton label='Create' cls='mt-[0] text-[14px] w-[auto]' />
                        </div>
                    </div>
                }
            </div>
        );
    return <></>;
}