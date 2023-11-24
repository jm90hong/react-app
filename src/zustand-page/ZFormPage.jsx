
import React from "react"
import { useState } from "react";
import { useTestStore } from "../store/TestStore";
import { useNavigate } from "react-router-dom";





export default function ZFormPage(){

    let navigate = useNavigate();
    const [value, setValue] = useState('');
    const testStore = useTestStore();
    
    function handlerInputChanged(e){
        setValue(e.target.value);
    }

    
    function handlerClick(){
        //zustand 함수 호출로 데이터 변경.
        testStore.setValue(value);
        navigate('/zresult');
    }


    return (
        <div>
            <input onChange={handlerInputChanged} value={value} placeholder="전달 할 값 입력"/>
            <button onClick={handlerClick}>결과 페이지로 이동</button>
        </div>
    )
}