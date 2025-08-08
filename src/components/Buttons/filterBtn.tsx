
import type { filterButton } from '../../types';

export default function FilterBtn({label= 'button' ,active= false,}: filterButton){
    if(active)
        return (
            <button className="text-[11px] px-[.8em] py-[.3em] mx-[.3em] rounded-[4px] text-[.8em] font-[700] bg-[var(--dark-blue)] text-[var(--white)]">{ label }</button>
        );
    return (
        <button className="text-[11px] px-[.8em] py-[.3em] mx-[.3em] rounded-[4px] text-[.8em] font-[700] bg-[var(--gray)] text-[var(--dark-blue)]">{ label }</button>
    );
}