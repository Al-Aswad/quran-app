export default function CardSurah({surah: {arti, audio, deskripsi, jumlah_ayat,nama,nama_latin,nomor,tempat_turun}}:any) {
    console.log(arti, audio, deskripsi, jumlah_ayat,nama,nama_latin,nomor,tempat_turun);
    return(
       <div className="text-white p-10 bg-[#20293a] rounded-md">
            <h2>{nama_latin}</h2>
            <h2>Latin</h2>
            <h2>Arti</h2>
        </div>
    )
}