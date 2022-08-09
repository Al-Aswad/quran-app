import { useRouter } from "next/router"
import { ReactElement, useEffect, useState } from "react"
import CardAyat from "../../components/Card/CardAyat"
import HeaderDetail from "../../components/Header/HeaderDetail"
import LayoutDetailSurah from "../../components/Layouts/LayoutDetailSurah"
import { getDetailSurah } from "../../services/Surah"

const DetailSurah=()=>{
  const [surah, setSurah]:any = useState({})
  const query= useRouter()

  const getDetail = async (query:any) => {
    const res = await getDetailSurah(query)
    setSurah(res.data)
  }

  useEffect(() => {
    if(query.query.id){
      getDetail(query.query.id)
    }
    // console.log(query.query.id)
  },[query.isReady]);

    return(
        <div>
            <div>
                <div className="flex justify-center items-center p-6 sm:px-20 sm:py-6 text-primary-default flex-col">
                        <h1 className="text-4xl">
                            {surah.nama_latin} - 
                            <span> {surah.nama}</span></h1>
                        <h2 className="text-xl text-slate-500">
                            {surah.arti} - {surah.jumlah_ayat}
                        </h2>
                        <h3 className="text-sm capitalize text-slate-500">
                            {surah.tempat_turun}
                        </h3>
                </div>

                <div className="mb-4">
                  <audio className="w-full rounded-sm" controls src={surah.audio}/>
                </div>

                <div className="grid grid-cols-1 gap-4 w-full mb-20 min-h-screen">
                   {
                    surah?.ayat?.map((value:any)=>{
                        return(
                            <CardAyat key={value.id} ayat={value}/>
                        )
                    })
                   }
                </div>
            

            </div>
        </div>
    )
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       // String variant:
//       '/surah/1',
//       // Object variant:
//       { params: { id: 'second-post' } },
//     ],
//     fallback: true,
//   }
// }

// export const getStaticProps = async ({ params: { id } }:any) => {
//   console.log("Slug ", id);

//   // const product = await client.fetch(query)
//   // const products = await client.fetch(productsQuery)

//   return {
//       props: {
//           // surah, detailSurah
//       },
//   }
// }

DetailSurah.getLayout = function getLayout(page: ReactElement) {
    return (
      <LayoutDetailSurah>
        {page}
      </LayoutDetailSurah>
    )
  }
  
  export default DetailSurah
  