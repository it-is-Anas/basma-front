import notFound404 from '../../../assets/notfound404.png';



export default function NotFound404(){


    return (
        <div className="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center">
            <img src={notFound404} alt="" className="w-[20em] h-[20em]" />
            <p className="font-[600] text-[var(--light-blue)] text-[1.3em]">Error 404 not found</p>
        </div>
    );

}