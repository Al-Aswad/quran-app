import Navbar from "./Navbar"

export default function Header(){
    return(
        <div>
            <div className="flex justify-center items-center p-6 sm:p-20">
                <input 
                    className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full sm:max-w-sm text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 sm:py-3 ring-1 ring-slate-200 shadow-sm px-4"
                    placeholder="Search"
                    type="text" />
            </div>
        </div>
    )
}