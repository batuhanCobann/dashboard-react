export default function Sidebar(isDarkMode){

    return(
        <>
            <div className="containers">
                <div className="div1">
                    <ul style={{display:"grid", gap:"20px", width:"80px", listStyle:"none", justifyContent:"space-between"}}>
                        <li>{isDarkMode ? <img src="dark-CompanyLogo.svg" alt="" /> : <img src="CompanyLogo.svg" alt="" />}</li>
                        <li><img src="Logo.svg" alt="" /></li>
                        <li><img src="Logo.svg" alt="" /></li>
                        <li><img src="Logo.svg" alt="" /></li>
                        <li><img src="Logo.svg" alt="" /></li>
                    </ul>
                </div>
                <div className="div2">
                    <p>slaşjghaslşj</p>
                    <p>slaşjghaslşj</p>
                    <p>slaşjghaslşj</p>
                    <p>slaşjghaslşj</p>
                    <p>slaşjghaslşj</p>
                    <p>slaşjghaslşj</p>
                    <p>slaşjghaslşj</p>
                </div>
            </div>
        </>
    )
} 