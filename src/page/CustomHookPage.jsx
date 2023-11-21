import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";



export default function CustomHookPage(){

    const btnValue = useButtonClick('아직 안누름');

    


    const handleClick = () => {
        // useButtonClick 훅 호출
        useButtonClick('a');
        // ...
      };

    return (
        <div class="body">
           <span>{btnValue}</span>
           <button onClick={handleClick}>버튼</button>
        </div>
    );
}


function useButtonClick(v){
    const [value, setValue] = useState(v);

    useCallback(()=>{setValue(v);},[value]);

    return value;
}


