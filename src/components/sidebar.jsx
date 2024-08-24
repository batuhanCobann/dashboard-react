export default function Sidebar(isDarkMode){

    return(
        <>
            <div className="containers d-flex">
                <div className="div1">
                    <div>
                        <ul className="sidebar-ul d-grid gap-4 py-4 px-4">
                            <li>{isDarkMode ? <img src="dark-logo-1.svg" alt="" /> : <img src="light-logo-1.svg" alt="" />}</li>
                            <li>{isDarkMode ? <img src="dark-logo-2.svg" alt="" /> : <img src="light-logo-2.svg" alt="" />}</li>
                            <li>{isDarkMode ? <img src="dark-logo-3.svg" alt="" /> : <img src="light-logo-3.svg" alt="" />}</li>
                            <li>{isDarkMode ? <img src="dark-logo-4.svg" alt="" /> : <img src="light-logo-4.svg" alt="" />}</li>
                            <li>{isDarkMode ? <img src="dark-logo-5.svg" alt="" /> : <img src="light-logo-5.svg" alt="" />}</li>
                        </ul>
                    </div>
                    <div>
                        <ul className="sidebar-ul d-grid gap-4 py-4 px-4">
                            <li>{isDarkMode ? <img src="dark-logo-6.svg" alt="" /> : <img src="light-logo-6.svg" alt="" />}</li>
                            <li>{isDarkMode ? <img src="dark-logo-7.svg" alt="" /> : <img src="light-logo-7.svg" alt="" />}</li>
                        </ul>
                    </div>
                </div>
                {/* --------------------------------------------------------------------------- */}
                <div className="div2 p-4 d-grid align-content-between">
                    <div>
                        <div className="sidebar-content-header">
                            <h3 className="d-flex gap-2">{isDarkMode ? <img src="dark-back-logo.svg" alt="" /> : <img src="light-back-logo.svg" alt="" />}Lookscout Dashboard</h3> 
                            <input className="sidebar-input mt-3" type="text" />
                        </div>
                        <div className="sidebar-content-body d-grid gap-3 mt-5">
                            <p className="d-flex gap-2">{isDarkMode ? <img src="dark-sidebar-logo-1.svg" alt="" /> : <img src="light-sidebar-logo-1.svg" alt="" />}General</p>
                            <p className="d-flex gap-2">{isDarkMode ? <img src="dark-sidebar-logo-2.svg" alt="" /> : <img src="light-sidebar-logo-2.svg" alt="" />}Messages</p>
                            <p className="d-flex gap-2">{isDarkMode ? <img src="dark-sidebar-logo-3.svg" alt="" /> : <img src="light-sidebar-logo-3.svg" alt="" />}Notifications</p>
                            <p className="d-flex gap-2">{isDarkMode ? <img src="dark-sidebar-logo-4.svg" alt="" /> : <img src="light-sidebar-logo-4.svg" alt="" />}Users</p>
                            <p className="d-flex gap-2">{isDarkMode ? <img src="dark-sidebar-logo-5.svg" alt="" /> : <img src="light-sidebar-logo-5.svg" alt="" />}Events & Logs</p>
                            <p className="d-flex gap-2">{isDarkMode ? <img src="dark-sidebar-logo-6.svg" alt="" /> : <img src="light-sidebar-logo-6.svg" alt="" />}Organization</p>
                            <p className="d-flex gap-2">{isDarkMode ? <img src="dark-sidebar-logo-7.svg" alt="" /> : <img src="light-sidebar-logo-7.svg" alt="" />}Teams</p>
                        </div>
                    </div>

                    <div className="sidebar-content-footer">
                        <div className="avatar-div d-flex align-items-center justify-content-between mb-4">
                            <div className="d-flex align-items-center gap-3">
                                <img src="sidebar-avatar.jpg" alt="" />
                                <span>Birian Ford</span>
                            </div>
                               {isDarkMode ? <img src="dark-nokta.svg" alt="" /> : <img src="light-nokta.svg" alt="" />}   
                        </div>
                        <div className="sidebar-foter">
                            <img src="sidebar-footer-img.svg" alt="" />
                            <h1 className="mt-3">Subscription Plan</h1>
                            <p>Your Subscription plan will expire soon please upgrade!</p>
                            <b className="text-primary">Upgrade</b>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
} 