'use client'
import { useState } from "react"
export default function Color(){
 
    let [color,setColor] = useState("blue")
 
return(
    <>
    <div className="">

        <p  className={color ==="blue" ? "bg-blue-600" :"bg-red-700"}  >
            Color is : {color}</p>
        <br />
        <br />
        <button className="bg-gray-800 text-blue-300 " onClick={()=> {color ==="blue"? setColor("red") : setColor("blue") } } > Change color </button>
    </div>
    </>
)



}