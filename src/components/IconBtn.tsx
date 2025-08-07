
import type { iconBtn } from '../types';

export default function IconBtn({img='' , alt='' , cls = '',label=''}:iconBtn){
    return (
        <div className="relative mx-[5px]">
            <img src={img} alt={alt} className={"w-[2em]  cursor-pointer "+cls} />
            <div className="absolute top-[-10px] font-[800] text-[tomato] right-0 ">{label}</div>
        </div>

    );
}