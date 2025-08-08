import IconBtn from "../../../components/IconBtn";
import notiIcon from '../../../assets/notiIcon.png';
import { useRef, useState } from "react";



export default function NotificationPopUp(){

    const [opened,setOpen] = useState<boolean>(false);
    const popup = useRef(null);


    const openPopUp = ()=>{
        setOpen(true);
    };
    // const closePopUp = ()=>{
    //     setOpen(false);
    // };
    
    // fix this 
    // useEffect(()=>{
    //     document.addEventListener('click',(event)=>{ 
    //         if(popup.current && (!event.target === popup.current || !popup.current?.contains(event.target))){
    //             setOpen(false);
    //             console.log('pop up')
    //         }
    //     });
    //     return ()=>{
    //         document.removeEventListener('click',(event)=>{ 
    //             if(opened && (!event.target === popup.current || !popup.current?.contains(event.target))){
    //                 setOpen(false);
    //             }
    //         });
    //     };
    // },[]);



    return (
        <div className="relative">
            <IconBtn click={openPopUp} key='noti' img={notiIcon} label="9" />
            {
                opened &&
                <div ref={popup} style={{transform:'translateX(-100%)'}} className="absolute bg-[var(--gray)] shadow-[0px_0px_20px_.2px_var(--light-blue)] rounded-[10px] top-[50%] left-[50%]  w-[20em] max-h-[20em] overflow-y-scroll">
                    <div className="w-[100%]  px-[1em] py-[.4em] flex justify-between items-center">
                        <p className="font-[500] text text-[1.3em]">Notifications</p>
                        <p className="font-[500] text-[red] text-[1.3em]">11</p>
                    </div>
                    <p className="w-[100%] font-[500] cursor-pointer rounded-[10px] px-[1em] py-[.4em] flex justify-between items-center ">Welcome to Basma</p>
                    <p className="w-[100%] font-[400]  rounded-[10px] px-[1em] py-[.4em] flex justify-between items-center ">Welcome to Basma</p>
                </div>

            }
        </div>
    );
}