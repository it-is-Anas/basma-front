
import { useLocation, useNavigate } from 'react-router-dom';
import type { iconBtn } from '../types';

export default function IconBtn({img='' , alt='' , cls = '',label='',link='',clsLabel,unactive=true,click}:iconBtn){
    const navigate = useNavigate();
    const location = useLocation().pathname;
    if(link.length){
        const clickHandler = ()=>{
            navigate(link);
        };
        let actived: string = '';
        if(location === link && unactive){
            actived = 'bg-[var(--white)] border border-[1.5px] border-[var(--light-blue)] rounded-[3px]';
        }
        return (
            <div onClick={clickHandler} className={"relative mx-[5px] "}>
                <img loading='lazy' src={img} alt={alt} className={"w-[2em]  cursor-pointer "+actived+' '+cls} />
                <div className={"absolute top-[-10px] font-[800] text-[tomato] right-0 "+clsLabel}>{label}</div>
            </div>
        );
    }
    if(click)
        return (
            <div onClick={click} className="relative  cursor-pointer  mx-[5px]">
                <img loading='lazy' src={img} alt={alt} className={"w-[2em]  "+cls} />
                <div className={"absolute top-[-10px] font-[800] text-[tomato] right-0 "+clsLabel}>{label}</div>
            </div>
        );
    return (
        <div  className="relative mx-[5px]">
            <img loading='lazy' src={img} alt={alt} className={"w-[2em]  "+cls} />
            <div className={"absolute top-[-10px] font-[800] text-[tomato] right-0 "+clsLabel}>{label}</div>
        </div>
    );

}