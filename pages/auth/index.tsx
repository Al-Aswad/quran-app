import { ReactElement } from "react"
import LayoutAuth from "../../components/Layouts/LayoutAuth"

const Login=()=>{
    return(
        <div>
            <h1>Login</h1>
        </div>
    )
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
      <LayoutAuth>
        {page}
      </LayoutAuth>
    )
}

export default Login