import { useState } from "react"

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
                            <i className='bx bx-user-circle' ></i>
                            <span className="links_name">User</span>
                        </a>
                        <span className="tooltip">User</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-message' ></i>
                            <span className="links_name">Messaage</span>
                        </a>
                        <span className="tooltip">Messaage</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-bar-chart-square' ></i>
                            <span className="links_name">Chart</span>
                        </a>
                        <span className="tooltip">Chart</span>
                    </li>
                    <li>
                        <a href="#">
                            <i className='bx bx-stats' ></i>
                            <span className="links_name">Stats</span>
                        </a>
                        <span className="tooltip">Stats</span>
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
                    Weather content
                </div>
                <div className="main_content">
                    <div className="weather_card">
                        <div className="date">28 Apr, 13:22am</div>
                        <div className="city">Moscow, Russia</div>
                        <div className="card_container">
                           <i className='bx bxs-sun'></i>
                           <div className="degrees">20 &deg;C</div> 
                        </div>
                        <div className="feels">Feels like 14°C. Overcast clouds. Gentle Breeze</div>
                        <div className="discriptions">
                            <div className="left_block">
                                <div className="card_container">
                                    <i className='bx bxs-navigation'></i>
                                    <div className="wind">4.6 m/s WSW</div>
                                </div>
                                <div className="humidity">Humidity: 86%</div>
                                <div className="dew_point">Dew point: 12&deg;C</div>
                            </div>
                            <div className="right_block">
                                <div className="card_container">
                                   <i className='bx bxs-thermometer'></i>
                                   <div className="pressure">1009 hPa</div> 
                                </div>
                                <div className="uv">UV: 2</div>
                                <div className="visibility">Visibility: 10.0 km</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}