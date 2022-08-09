import Link from "next/link";

export default function Navbar() {
    return (
        <div className="h-[70px] bg-[#111729] text-[#4ba3e3] flex items-center justify-between px-6 sm:px-20">
            <div className="flex gap-4">
                <Link href='/'>
                <a className="bg-pink-500 rounded-md p-1 flex justify-center items-center cursor-pointer">
                    <h1 className="text-3xl font-semibold text-white">Quran</h1>
                </a>
                </Link>
                {/* <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..."></input> */}
            </div>
            <div className="flex gap-4 items-center">
                <button>
                    Login
                </button>
                <button className="py-2 px-4 outline-none ring-1 ring-[#4ba3e3] rounded-md hover:bg-[#4ba3e3] hover:text-white">
                    Create Account
                </button>
            </div>
        </div>
    )
}