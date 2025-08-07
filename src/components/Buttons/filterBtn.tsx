
import type { filterButton } from '../../types';

export default function FilterBtn({label= 'button' ,active= false,}: filterButton){
    if(active)
        return (
            <p className="text-[11px] px-[.8em] py-[.3em] mx-[.3em] rounded-[4px] text-[.8em] font-[700] bg-[var(--dark-blue)] text-[var(--white)]">{ label }</p>
        );
    return (
        <p className="text-[11px] px-[.8em] py-[.3em] mx-[.3em] rounded-[4px] text-[.8em] font-[700] bg-[var(--white)] text-[var(--dark-blue)]">{ label }</p>
    );
}