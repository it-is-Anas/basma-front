import type { button } from '../../../types';


export default function FormButton({label='click me'}:button){
    return (
        <button className="bg-[var(--light-blue)] w-[150px] text-[var(--white)] rounded-[4px]  px-[10px] py-[5px] font-[600] mt-[10px] ">
            { label }
        </button>
    );
}