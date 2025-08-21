import type React from 'react';

type FormButtonProps = {
    label?: string,
    cls?: string,
    click?: (e: React.MouseEvent<HTMLButtonElement>) => void,
};

export default function FormButton({label='click me', cls='', click}: FormButtonProps){
    return (
        <button onClick={click} className={"bg-[var(--light-blue)] w-[150px] text-[var(--white)] rounded-[4px]  px-[10px] py-[5px] font-[600] mt-[10px] "+cls}>
            { label }
        </button>
    );
}