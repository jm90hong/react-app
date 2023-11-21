
import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from './page/HomePage';
import LoginPage from './page/LoginPage';
import StateTestPage from './page/StateTestPage';
import RestTestPage from './page/RestTestPage';
import MemoAndCallbackPage from './page/MemoAndCallbackPage';
import CustomHookPage from './page/CustomHookPage';

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                {/* Home */}
                <Route path="/" element={<HomePage />} />
                
                {/* Login */}
                <Route path="/login" element={<LoginPage />} />

                {/* StageTest */}
                <Route path="/state_test" element={<StateTestPage />} />

                {/* RestTest */}
                <Route path="/rest_test" element={<RestTestPage />} />


                {/* custom hook */}
                <Route path="/custom_hook" element={<CustomHookPage />} />


                {/* Memo and Callback */}
                <Route path="/memo_callback" element={<MemoAndCallbackPage />} />
            </Routes>
        </BrowserRouter>
    );
          
}



