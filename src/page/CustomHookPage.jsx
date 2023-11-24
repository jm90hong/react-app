import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";



export default function CustomHookPage(){

<<<<<<< HEAD
    const [btnValue,setBtnValue] = useButtonClick('아직 안누름');

    const handleClick = () => {
        // useButtonClick 훅 호출
        setBtnValue('누름');   
    };
=======
    const btnValue = useButtonClick('아직 안누름');

    


    const handleClick = () => {
        // useButtonClick 훅 호출
        useButtonClick('a');
        // ...
      };
>>>>>>> 4cd8f9d46e1083a16c5e87c95276435f4ba174a2

    return (
        <div class="body">
           <span>{btnValue}</span>
           <button onClick={handleClick}>버튼</button>
        </div>
    );
}


<<<<<<< HEAD
function useButtonClick(initialValue){
    const [value, setValue] = useState(initialValue);
    var handler = useCallback((newValue)=>{setValue(newValue);},[value]);

    return [value, handler];
=======
function useButtonClick(v){
    const [value, setValue] = useState(v);

    useCallback(()=>{setValue(v);},[value]);

    return value;
>>>>>>> 4cd8f9d46e1083a16c5e87c95276435f4ba174a2
}


