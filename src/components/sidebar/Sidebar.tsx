import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Sidebar: React.FC = () => {
    const [activeState, setActiveState] = useState<boolean>(true)
    const isToggle = () => setActiveState((prev) => !prev);
    
    return (
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
                        <Link to={`/Weather`}>
                            <i className='bx bx-cloud-lightning' ></i>
                            <span className="links_name">Weather Api</span>
                        </Link>
                        <span className="tooltip">Weather</span>
                    </li>
                    <li>
                        <Link to={`/Users`}>
                            <i className='bx bx-user-circle' ></i>
                            <span className="links_name">Users</span>
                        </Link> 
                        <span className="tooltip">Users</span>
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
    )
}