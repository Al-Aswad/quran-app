import { ReactElement } from "react"
import LayoutAuth from "../../components/Layouts/LayoutAuth"

const SignUp=()=>{
    return(
        <div>
            <h1>SignUp</h1>
        </div>
    )
}

SignUp.getLayout = function getLayout(page: ReactElement) {
    return (
      <LayoutAuth>
        {page}
      </LayoutAuth>
    )
}

export default SignUp