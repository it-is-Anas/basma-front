
interface props {
    label?: string,

};

export default function HeadLine({ label='' }: props){
    return (
        <p className="font-[700] text-[1.5em] mb-[10px]">{ label }</p>
    );
}