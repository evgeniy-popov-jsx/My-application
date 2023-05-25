import React from "react";
import { useState } from "react";
import { Weather } from "../weather/weather";

const MemoizedWeather = React.memo(Weather);

export const Sidebar: React.FC = () => {
    const [activeState, setActiveState] = useState<boolean>(true)
    const isToggle = () => setActiveState((prev) => !prev);
    
    return (
        <div className="shell">
            <div className={`sidebar ${activeState ? 'active' : ''}`}>
                <div className="logo_content">
                    <div className="logo">
                        <i className='bx bxl-netlify'></i>
                        <div className="logo_name">Application</div> 
                    </div>
                    <i className='bx bx-menu' onClick={isToggle} id="btn"></i>
                </div>  
                <ul className="nav_list">
                    <li>
                        <a href="#">
                            <i className='bx bx-cloud-lightning' ></i>
                            <span className="links_name">Weather Api</span>
                        </a>
                        <span className="tooltip">Weather</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-message' ></i>
                            <span className="links_name">Develop</span>
                        </a>
                        <span className="tooltip">Develop</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-bar-chart-square' ></i>
                            <span className="links_name">Develop</span>
                        </a>
                        <span className="tooltip">Develop</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-stats' ></i>
                            <span className="links_name">Develop</span>
                        </a>
                        <span className="tooltip">Develop</span>
                    </li>
                </ul>
                <div className="profile_content">
                    <div className="profile">
                        <div className="profile_details">
                            <img src='assets/profile.jpg' alt='' />
                            <div className="name_job">
                                <div className="Name">Anastasia Petrova</div>
                                <div className="job">Web Designer</div>
                            </div>
                        </div>
                        <i className='bx bx-log-out' id='log_out'></i>
                    </div>
                </div>
            </div>
            <div className="home_content">
                <div className="header"></div>
                <div className="text">
                    Weather
                </div>
               <MemoizedWeather />
            </div>
        </div>
    )
}