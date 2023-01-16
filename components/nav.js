import { useRouter } from "next/router";
import {RxHamburgerMenu} from "react-icons/rx";

export default function Nav(){
    const route = useRouter();
    
    return(
        <div className="w-full font-poppins inline-flex p-4 bg-slate-800 shadow-xl">
            <button onClick= className="pr-4 align-bottom pt-1"><RxHamburgerMenu color="white" size="25px"/></button>
                <button onClick={()=> route.push("/")} className="mr-6 left-0 text-white">Dein Firmenlogo</button>
                <div className="">
                <form action="">
                    <input type="text" className="rounded-sm shadow-sm "></input>
                    <button className="ml-1 bg-slate-500 text-white pl-2 pr-2 rounded-md ">Suche</button>
                </form>
                </div>
        </div>
    );
}