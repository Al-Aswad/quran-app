import { useRouter } from "next/router"
import { ReactElement, useEffect, useState } from "react"
import HeaderDetail from "../../components/Header/HeaderDetail"
import LayoutDetailSurah from "../../components/Layouts/LayoutDetailSurah"
import { getDetailSurah } from "../../services/Surah"

const DetailSurah=()=>{
  const [surah, setSurah]:any = useState({})
  const router = useRouter()
  const { id } = router.query

  const getDetail = async () => {
    const res = await getDetailSurah(id)
    setSurah(res.data)
  }

  useEffect(() => {
    getDetail()
  },[]);

  console.log(id)
    return(
        <div>
            <div>
              <div className="flex justify-center items-center p-6 sm:p-20 text-primary-default flex-col">
                  <h1 className="text-4xl">{surah.nama_latin}-
                    <span>
                      {surah.nama}
                    </span></h1>
                  <h2 className="text-xl">
                    {surah.arti}-{surah.jumlah_ayat}
                  </h2>
                  <h2 className="text-sm capitalize">
                    {surah.tempat_turun}
                  </h2>
              
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
  