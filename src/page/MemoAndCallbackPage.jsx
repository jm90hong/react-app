
import React from "react";
import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";



export default function MemoAndCallbackPage(){

    const [ex1, setEx1] = useState(0);
    const [ex2, setEx2] = useState(0);


    useEffect(()=>{console.log(ex1)},[ex1]);


    return (
        <>  
            <span>ex1 : {ex1}</span>
            <span>ex2 : {ex2}</span>
            <button onClick={()=>{setEx1((cur)=>(cur+1))}}>ex1</button>
            <button onClick={()=>{setEx2((cur)=>(cur+1))}}>ex2</button>
        </>
    )

}