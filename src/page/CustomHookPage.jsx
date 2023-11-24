import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";



export default function CustomHookPage(){

    const [btnValue,setBtnValue] = useButtonClick('아직 안누름');

    const handleClick = () => {
        // useButtonClick 훅 호출
        setBtnValue('누름');   
    };

    return (
        <div class="body">
           <span>{btnValue}</span>
           <button onClick={handleClick}>버튼</button>
        </div>
    );
}


function useButtonClick(initialValue){
    const [value, setValue] = useState(initialValue);
    var handler = useCallback((newValue)=>{setValue(newValue);},[value]);

    return [value, handler];
}


