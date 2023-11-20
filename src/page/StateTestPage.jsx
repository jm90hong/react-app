
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


export default function StateTestPage(){

    const [value, setValue] = useState('a')


    useEffect(()=>{
        console.log('초기화 로직');
    },[])

    useEffect(()=>{
         console.log('value 변경됨.');
    },[value])

    function onClick(){
        setValue('b');
    }
    
    return(
        <div class="body">
            <span>{value}</span>
            <button onClick={onClick}>버튼</button>
        </div>
    );
}



