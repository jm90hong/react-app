
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

export default function RestTestPage(){

    //https://jsonplaceholder.typicode.com/todos/1 요청하여 데이터 받아오기.

    async function fetchData(){
        var url ='https://jsonplaceholder.typicode.com/todos/1';

        var response = await axios(url, {
            method: "get", //post, put, delete 등등
            headers: {},
            data: {},
          });
        console.log(response.data);  
    }
    
    return(
        <div class="body">
            <button onClick={fetchData}>요청하기</button>
        </div>
    );
}



