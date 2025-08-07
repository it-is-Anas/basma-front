import { Link } from "react-router-dom";
import type { link } from '../../../types';

export default function FormLink({ label='' , to='/' }: link){
    return (
        <Link className='my-[16px] font-[400] text-[.9em]' to={to} >{label}</Link>
    );
}