import { useRouter } from "next/router";
export default function Nav(){
    const route = useRouter();
    
    return(
        <div className="w-full font-poppins inline-flex p-4 bg-gray-500">
            
                <button onClick={()=> route.push("/")} className="mr-6 left-0">Dein Firmenlogo</button>
                <form action="">
                    <input type="text" className="rounded-sm shadow-sm right-0"></input>
                    <button className="ml-1 bg-gray-800 text-white pl-2 pr-2 rounded-md ">Suche</button>
                </form>
            
        </div>
    );
}