import React from 'react';
import './App.scss';
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import {HomePage} from "./Pages/HomePage";
import {ItemsPage} from "./Pages/ItemsPage";
import {BadPage} from "./Pages/404";

function App() {
    return (
        <div className="container">
            <div className="items">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>}/>;
                        <Route path={"todo"} element={<ItemsPage/>}/>;
                        <Route path={"*"} element={<BadPage/>}/>;
                    </Routes>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
