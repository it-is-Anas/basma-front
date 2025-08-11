import type { inputFiled } from '../../types';

export default function InputFiled({label='',placeholder='',type='text',inputCls='',cls=''}: inputFiled){
    return (
        <div className={" flex flex-col p-[10px] "+cls}>
            <label htmlFor="" className="font-[500]" >{ label }</label>
            <input className={"bg-[var(--gray)] w-[300px] px-[10px] py-[5px] rounded-[3px] my-[10px] border-none outline-none "+inputCls } type={type} placeholder={placeholder} />
        </div>
    );
}