import { ReactElement } from "react";

export default function LayoutAuth({children}: {children: ReactElement}) {
    return(
        <div>
            <div>Auth</div>
            <div>Auth</div>
            <div>{children}</div>
        </div>
    )
}