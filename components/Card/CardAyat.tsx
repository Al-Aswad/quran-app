import Link from "next/link";



export default function CardAyat({ayat:{ar, idn,tr,nomor, surah}}:any) {
    return(
        <>
        <Link href='#'>
        <a className="text-white bg-[#20293a] rounded-md">
                <div className="border-b-2 border-slate-700 px-6 py-3">
                    <h2 className="text-primary-default">{surah}:{nomor}</h2>
                </div>
                <div className="card-body px-6 py-6">
                    <h2 className="text-right text-3xl mb-4 leading-[3] tracking-wide mt-6 text-slate-300">{ar}</h2>
                    <div className="mt-6 text-slate-300" dangerouslySetInnerHTML={createMarkup(tr)} />
                    
                    <h2 className="mt-2 text-slate-500">{idn}</h2>
                </div>
            </a>
        </Link>
        </>
    )
}

function createMarkup(html:any) {
    return {__html: `${html}`};
}