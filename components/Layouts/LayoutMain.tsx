import { ReactElement } from "react";

export default function LayoutMain({children}: {children: ReactElement}) {
    return(
        <div>
            <div>Layout Main</div>
            <div>Layout Main</div>
            {children}
        </div>
    )
}