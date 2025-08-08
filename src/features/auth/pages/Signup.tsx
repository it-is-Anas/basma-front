import signupImg from '../../../assets/Signup.png';
import HeadLine from '../compoenents/HeadLine';
import DoubleInputFiled from '../compoenents/doubleInputFiled';
import FormButton from '../../../components/Buttons/formButton';
import InputFiled from '../compoenents/inputFiled';
import FormLink from '../compoenents/formLink';


export default function SignUp(){

    return (
        <>
            <div className="flex items-center justify-around">
                <div className=" flex flex-col justify-center items-center max-[767px]:col-[1/13] ">
                    <HeadLine label='SIGN UP' />
                    <DoubleInputFiled label='First name' placeholder='Jhon' placeholder2='Taqseem' label2='last name'/>
                    <InputFiled label='Email' placeholder='john@example.com' />
                    <InputFiled label='Password' placeholder='*********' type='password' />
                    <FormButton label='Sign Up' />
                    <FormLink label='You all ready have account ?!' to='/log/log-in' />
                </div>
                <div className="relative  flex justify-center items-center max-[767px]:hidden">
                    <img src={signupImg} alt="" className="w-[25em]" />
                </div>
            </div>
        </>
    );
}