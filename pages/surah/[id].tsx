import { ReactElement } from "react"
import LayoutDetailSurah from "../../components/Layouts/LayoutDetailSurah"

const DetailSurah=()=>{
    return(
        <div>
            detail
        </div>
    )
}

DetailSurah.getLayout = function getLayout(page: ReactElement) {
    return (
      <LayoutDetailSurah>
        {page}
      </LayoutDetailSurah>
    )
  }
  
  export default DetailSurah
  