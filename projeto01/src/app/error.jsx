'use client'

import FigureError from "@/components/FigureError"
import { useEffect } from "react"

export default function Error({error, retry}){
    useEffect(() =>{
        console.error(error)
    }, [error]
)
    return(
            <>
                <div className="container-notfound">
                    <div className="flex-notfound">
                        {/* <button onClick={()=> retry}></button> */}
                        <FigureError/>
                    </div>
                </div>
            </>
        )
}