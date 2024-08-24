
export default function FooterCard( isDarkMode){
    return(
<div className="main-chart-conteiner">
               <div className="header-conteiner-two mt-2">
                   <div className="content-and-buttons">
                       <div className="content">
                           <h1>Brian Ford</h1>
                       </div>
                       <div className="buttons">
                           <div className="edit-and-add mt-3">
                               <button className="edit-btn">Edit section</button>
                               <button className="add-btn">Add item</button>
                           </div>
                           <button className="dropdown-btn" ><img src="Dropdown.svg" alt="" /></button>
                       </div>
                   </div>
               </div>
   <div className="containers my-3 justify-content-center mx-5">
       <div className="row cardss">
           {/* İlk Kart */}
           <div className="col-md-6 col-lg-4 mb-4">

               <div className="card">   {/* düzenlendi */}
               

                   <ul className="list-group-ul list-group list-group-flush"> {/* düzenlendi */}

                       <li className="list-group-item-header d-flex align-items-center justify-content-between"  >
                           Lookscout Team <img src="Dropdownbutton.svg" alt="" />
                       </li>

                       <li className="list-group-item-li list-group-item d-flex align-items-center justify-content-between gap-4" > {/* düzenlendi */}
                           <div className="d-flex gap-3">

                               <div>
                                   <img src="avatar1.png" alt="" className="rounded-circle"/>
                               </div>

                               <div>
                                   <b>Latoya Langosh</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>Dynamic</p>
                               </div>

                           </div>

                           <div className="d-flex gap-2">
                               <p style={{backgroundColor:"#F5FAFF", padding:"1px 3px", borderRadius:"5px"}} className=" text-primary">Online </p>
                               <span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                           </div>
                       </li> 


                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                               <div>
                                   <img src="avatar2.png" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Abel Mohr</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>Dynamic</p>
                               </div>
                           </div>
                           <div className="d-flex gap-2">
                               <p style={{backgroundColor:"#F5FAFF", padding:"1px 3px", borderRadius:"5px"
                               }} className="d-flex gap-3 text-primary">Online </p><span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                           </div>
                       </li> 

                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                               <div>
                                   <img src="avatar3.png" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Shari Stamm</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>Chief</p>
                               </div>
                           </div>
                           <div className="d-flex gap-2">
                               <p style={{backgroundColor:"#F7F7F8", padding:"1px 3px", borderRadius:"5px"
                               }} className="d-flex gap-3 text-dark">Offline</p> <span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                           </div>
                       </li> 


                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                               <div>
                                   <img src="avatar4.png" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Earl Johnson</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>National</p>
                               </div>
                           </div>
                           <div className="d-flex gap-2">
                               <p style={{backgroundColor:"#F7F7F8", padding:"1px 3px", borderRadius:"5px"
                               }} className="d-flex gap-3 text-dark">Offline </p><span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                           </div>
                       </li> 

                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                               <div>
                                   <img src="avatar5.png" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Erick Champlin</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>Central</p>
                               </div>
                           </div>
                           <div className="d-flex gap-2">
                               <p style={{backgroundColor:"#F5FAFF", padding:"1px 3px", borderRadius:"5px"
                               }} className="d-flex gap-3 text-primary">Online </p><span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                           </div>
                       </li> 

                       <button className="viewall-btn btn btn-primary m-3">View All</button>
                   </ul>
               </div>
           </div>

           {/* İkinci Kart */}
           <div className="col-md-6 col-lg-4 mb-4">
               <div className="card" style={{ width: "316px", border:" 1px solid var(---border)"}}>
                   <ul className="list-group list-group-flush"  style={{border:"white", backgroundColor:"var(---bg-div)"}}>
                       <li className="list-group-item d-flex align-items-center justify-content-between" style={{backgroundColor:"var(---bg-div)", color:"var(---list-header-font)", border:"1px solid var(---list-border)"}}>
                       Updated Materials <img src="Dropdownbutton.svg" alt="" />
                       </li>

                       <li className="list-group-item d-flex align-items-center justify-content-between" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-3">
                               <div>
                                   <img src="pdf1.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Lookscout Resources</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>80.69 mb</p>
                               </div>
                           </div>
                           <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                       </li> 

                       <li className="list-group-item d-flex align-items-center justify-content-between" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-3">
                               <div>
                                   <img src="pdf1.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Lookscout Updates</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>320.32mb</p>
                               </div>
                           </div>
                           <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                       </li> 

                       <li className="list-group-item d-flex align-items-center justify-content-between " style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-3">
                               <div>
                                   <img src="pdf3.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Lookscout Guides</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>320.32 mb</p>
                               </div>
                           </div>
                           <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                       </li> 

                       <li className="list-group-item d-flex align-items-center justify-content-between "style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-3">
                               <div>
                                   <img src="pdf4.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Lookscout Design System</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>320.32 mb</p>
                               </div>
                           </div>
                           <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                       </li> 

                       <li className="list-group-item d-flex align-items-center justify-content-between " style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-3">
                               <div>
                                   <img src="pdf5.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                               </div>
                               <div>
                                   <b>Lookscout Guides</b>
                                   <p className="fs-6" style={{color:"var(---gray-font)"}}>120.05 mb</p>
                               </div>
                           </div>
                           <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                       </li> 

                       <li className="list-group-item d-flex justify-content-between gap-2 p-3" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <button className="cancel-btn btn btn-primary w-100">Cancel</button>
                           <button className="upload-btn btn btn-light w-100" >Upload</button>
                       </li> 

                       

                   </ul>
               </div>
           </div>


           <div className="col-md-6 col-lg-4 mb-4">
               <div className="card"  style={{ width: "312px", border:" 1px solid var(---border)"}}>
                   <ul className="list-group list-group-flush" style={{border:"white", backgroundColor:"var(---bg-div)"}}>
                       <li className="list-group-item d-flex align-items-center justify-content-between p-2" style={{backgroundColor:"var(---bg-div)", color:"var(---list-header-font)", border:"1px solid var(---list-border)"}}>
                       Recent Transactions
                       </li>

                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                                   <div>
                                       <img src="pinterest.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                                   </div>
                                   <div>
                                       <b>Pinterest Team</b>
                                       <p className="fs-6"  style={{color:"var(---gray-font)"}}>Jan 23 2022</p>
                                   </div>
                           </div>
                               <p style={{backgroundColor:"var(---done-bg-btn)", borderRadius:"5px", padding:"2px 8px", color:"var(---done-text-btn)"}} className="d-flex gap-3">Done</p>
                       </li> 
                       
                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                                   <div>
                                       <img src="elmas.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                                   </div>
                                   <div>
                                       <b>Sketch Team</b>
                                       <p className="fs-6"  style={{color:"var(---gray-font)"}}>Jun 15 2022</p>
                                   </div>
                           </div>
                               <p style={{backgroundColor:"var(---failed-bg-btn)", borderRadius:"5px", padding:"2px 8px", color:"var(---failed-text-btn)"}} className="d-flex gap-3">Failed</p>
                       </li> 

                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                                   <div>
                                       <img src="gitlab.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                                   </div>
                                   <div>
                                       <b>Gitlab Team</b>
                                       <p className="fs-6" style={{color:"var(---gray-font)"}}>Jan 215 2022</p>
                                   </div>
                           </div>
                               <p style={{backgroundColor:"var(---done-bg-btn)", borderRadius:"5px", padding:"2px 8px", color:"var(---done-text-btn)"}} className="d-flex gap-3">Done</p>
                       </li> 
                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4"  style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                                   <div>
                                       <img src="clickup.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                                   </div>
                                   <div>
                                       <b>Clickup</b>
                                       <p className="fs-6" style={{color:"var(---gray-font)"}}>Jan 15 2022</p>
                                   </div>
                           </div>
                               <p style={{backgroundColor:"var(---failed-bg-btn)", borderRadius:"5px", padding:"2px 8px", color:"var(---failed-text-btn)"}} className="d-flex gap-3">Failed</p>
                       </li> 
                       <li className="list-group-item d-flex align-items-center justify-content-between gap-4" style={{backgroundColor:"var(---bg-div)", border:"1px solid var(---list-border)"}}>
                           <div className="d-flex gap-4">
                                   <div>
                                       <img src="deliveri.svg" alt="" className="rounded-circle" style={{ width: "40px", height: "40px" }} />
                                   </div>
                                   <div>
                                       <b>Deliverooo</b>
                                       <p className="fs-6" style={{color:"var(---gray-font)"}}>Jan 15 2022</p>
                                   </div>
                           </div>
                               <p style={{backgroundColor:"var(---done-bg-btn)", borderRadius:"5px", padding:"2px 8px", color:"var(---done-text-btn)"}} className="d-flex gap-3">Done</p>
                       </li> 

                       <div className="p-3">
                           <p className="d-flex gap-2 text-primary">Open <img src="externalLink.svg" alt="" /></p>
                       </div>
                   </ul>
               </div>
           </div>
       </div>
   </div>
</div>
    )
}