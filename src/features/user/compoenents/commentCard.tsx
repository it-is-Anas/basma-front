import profileImg from '../../../assets/profileIcon.png';

export default function CommentCard(){
    return (
        <div className="w-[100%] p-[10px]">
            <div className=" w-[calc(100%-10px)] h-[3em] flex justify-start items-center text-[17px] mb-[10px]">
                <img loading='lazy' src={profileImg} alt="" className="w-[2em] h-[2em] rounded-[50%] object-cover " />
                <div className="h-[100%] w-[100%] ml-[5px] flex flex-col justify-center">
                    <p className="font-[500] text-[.7em]">Maria Sharapova </p>
                    <p className="font-[500] text-[.5em]">3h ago</p>
                </div>
            </div>
            <p className=" p-[5px] font-[500] w-[calc(100%-10px)] mx-[auto] rounded-[5px] bg-[var(--gray)] text-[.5em]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt suscipit esse itaque, quaerat quo beatae atque veritatis eaque nemo, unde vel nulla dicta? Doloremque deleniti iusto nemo sunt, ipsa neque!
            </p>
        </div>
    );
}