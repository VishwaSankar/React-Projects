import { useState } from "react";
export default function Toggle(){
    const [text,settext]=useState(true);
    return (
        <>
        <p class="text-toggle">{text?"You are Gay":"I'm not Gay"}</p>
        <button id="toggle" onClick={()=>(settext(!text))}>Click to change the text</button>
        </>
    )
}