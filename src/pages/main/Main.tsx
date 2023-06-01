import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Weather } from "../../components/weather/weather";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { AppRoute } from "../../const/const";
import { CardList } from "../../components/cards/Card-list";

const MemoizedWeather = React.memo(Weather);

export const Main: React.FC = () => {

    
    return (
    <BrowserRouter>
        <div className="shell">
            <Sidebar />
            <div className="home_content">
                <div className="header"></div>
                <div className="main_content">
                    <Routes>

                        <Route
                        path={AppRoute.Weather}
                        element={<MemoizedWeather />}
                        />

                        <Route
                        path={AppRoute.Users}
                        element={<CardList />}
                        />
                    
                    </Routes>
                </div>
            </div>
        </div>
    </BrowserRouter>
    )
}