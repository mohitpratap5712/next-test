'use client'
import { useState } from "react"
export default function Likedisplay() {

    const [like, setLike] = useState("🤍")


    return (
        <>
            <div className="">
                <p>hello like counter

                </p>
                <div
                    onClick={() => setLike(like === "🤍" ? "❤️" : "🤍")}
                >
                    {like}
                </div>    
            </div>
        </>
    )
}