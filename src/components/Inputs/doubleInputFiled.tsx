import type { doubleInputFiled } from '../../types';

export default function doubleInputFiled({label='',placeholder='',type='text',label2='',placeholder2='',type2='text',inputCls='',cls='',inputBoxcls=''}: doubleInputFiled){
    return (
        <div className={"flex w-[300px] justify-between items-center mt-[10px] "+cls}>
            <div className={"bg-[] flex flex-col mr-[10px] "+inputBoxcls}>
                <label htmlFor="" className="font-[500]" >{ label }</label>
                <input className={"bg-[var(--gray)] w-[140px] px-[10px] py-[5px] rounded-[3px] my-[10px] border-none outline-none "+inputCls} type={type} placeholder={placeholder} />
            </div>
            <div className={"bg-[] flex flex-col ml-[10px] "+inputBoxcls}>
                <label htmlFor="" className="font-[500]" >{ label2 }</label>
                <input className={"bg-[var(--gray)] w-[140px] px-[10px] py-[5px] rounded-[3px] my-[10px] border-none outline-none "+inputCls} type={type2} placeholder={placeholder2} />
            </div>
        </div>
    );
}