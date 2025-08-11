import type { inputFiled } from '../../types';

export default function TextFiled({label='',placeholder='',inputCls='',cls=''}: inputFiled){
    return (
        <div className={" flex flex-col p-[10px] "+cls}>
            <label htmlFor="" className="font-[500]" >{ label }</label>
            <textarea style={{resize: 'unset'}} className={"bg-[var(--gray)] w-[300px] px-[10px] py-[5px] rounded-[10px]  my-[10px] border-none outline-none "+inputCls } placeholder={placeholder}  name="" id=""></textarea>
        </div>
    );
}