export default function CardSurah({surah: {arti, audio, deskripsi, jumlah_ayat,nama,nama_latin,nomor,tempat_turun}}:any) {
    return(
       <div className="text-white bg-[#20293a] rounded-md">
            <div className="border-b-2 border-slate-700 px-6 py-3">
                <h2 className="text-primary-default">{nomor}. {nama_latin}</h2>
            </div>
            <div className="card-body px-6 py-6">
                <h2 className="text-right text-3xl">{nama}</h2>
                <h2>{arti}</h2>
            </div>
        </div>
    )
}