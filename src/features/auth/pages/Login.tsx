import loginImg from '../../../assets/login.png';
import HeadLine from '../compoenents/HeadLine';
import FormButton from '../../../components/Buttons/formButton';
import InputFiled from '../../../components/Inputs/inputFiled';
import FormLink from '../../../components/Links/formLink';


export default function LogIn(){
    
    return (            
        <div className="flex items-center justify-around">
            <div className="relative  flex justify-center items-center max-[767px]:hidden">
                <img src={loginImg} alt="" className="w-[20em]" />
            </div>
            <div className=" flex flex-col justify-center items-center max-[767px]:col-[1/13] ">
                <HeadLine label='LOG IN' />
                <InputFiled label='Email' placeholder='john@example.com' />
                <InputFiled label='Password' placeholder='*********' type='password' />
                <FormButton label='Log In' />
                <FormLink label='You all ready have account ?!' to='/log' />
            </div>
        </div>
    );
}