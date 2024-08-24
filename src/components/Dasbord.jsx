import { Chart, registerables } from "chart.js";
import "../App.css";
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from "react";


Chart.register(...registerables);

const data = {
  labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Interfaces',
      backgroundColor: '#5CB1FF', // Renk kodu güncellendi
      borderColor: '#5CB1FF', // Renk kodu güncellendi
      borderWidth: 1,
      data: [25, 50, 75, 100, 50, 75, 100, 50, 75, 100, 25, 75],
    },
    {
      label: 'Build-ups',
      backgroundColor: '#437EF7', // Renk kodu güncellendi
      borderColor: '#437EF7', // Renk kodu güncellendi
      borderWidth: 1,
      data: [35, 65, 80, 95, 45, 70, 85, 60, 80, 95, 30, 85],
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      top: 10,
      bottom: 10,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        callback: function(value) {
            return `${value}%`;
        }
      },
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
      }
    },
    x: {
      grid: {
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1
      },
      // Sütunlar arasındaki boşluğu mobilde ayarlamak için
      ticks: {
        autoSkip: false,
        maxRotation: 0, // Etiketleri yatay olarak tut
        minRotation: 0,
        callback: function(value) {
          return value;
        }
      },
      // Mobil görünümde sütunlar arasındaki boşluğu artırmak için
      barPercentage: 0.5, // Sütun genişliği
      categoryPercentage: 1.0 // Kategori genişliği
    }
  },
  plugins: {
    legend: {
      display: true,
    },
    tooltip: {
      callbacks: {
        label: function(context) {
          let label = context.dataset.label || '';
          if (label) {
            label += ': ';
          }
          if (context.parsed.y !== null) {
            label += `${context.parsed.y}%`; // Yüzdelik olarak gösterim
          }
          return label;
        }
      }
    }
  }
};




export default function  Dasbord(){

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

    return (
        <div  className="mega-div">

            <div className="containers">
                <div className="d-flex h-100">
                    <div className="div1 d-grid align-content-between">
                        <div>
                            <ul className="sidebar-ul d-grid gap-4 py-4 px-4 ">
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
                                <h3 className="d-flex gap-2 btn streched-link">{isDarkMode ? <img src="dark-back-logo.svg" alt="" /> : <img src="light-back-logo.svg" alt="" />}Lookscout Dashboard</h3> 
                                <input className="sidebar-input mt-3" type="text" />
                            </div>
                            <div className="sidebar-content-body d-grid gap-3 mt-5">
                                <p className="d-flex gap-2 streched-link">{isDarkMode ? <img src="dark-sidebar-logo-1.svg" alt="" /> : <img src="light-sidebar-logo-1.svg" alt="" />}General</p>
                                <p className="d-flex gap-2 streched-link">{isDarkMode ? <img src="dark-sidebar-logo-2.svg" alt="" /> : <img src="light-sidebar-logo-2.svg" alt="" />}Messages</p>
                                <p className="d-flex gap-2 streched-link">{isDarkMode ? <img src="dark-sidebar-logo-3.svg" alt="" /> : <img src="light-sidebar-logo-3.svg" alt="" />}Notifications</p>
                                <p className="d-flex gap-2 streched-link">{isDarkMode ? <img src="dark-sidebar-logo-4.svg" alt="" /> : <img src="light-sidebar-logo-4.svg" alt="" />}Users</p>
                                <p className="d-flex gap-2 streched-link">{isDarkMode ? <img src="dark-sidebar-logo-5.svg" alt="" /> : <img src="light-sidebar-logo-5.svg" alt="" />}Events & Logs</p>
                                <p className="d-flex gap-2 streched-link">{isDarkMode ? <img src="dark-sidebar-logo-6.svg" alt="" /> : <img src="light-sidebar-logo-6.svg" alt="" />}Organization</p>
                                <p className="d-flex gap-2 streched-link">{isDarkMode ? <img src="dark-sidebar-logo-7.svg" alt="" /> : <img src="light-sidebar-logo-7.svg" alt="" />}Teams</p>
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
            </div>





            <div className="container-main">
                <div className="header-conteiner-mobil">
                    {isDarkMode ? <img src="dark-CompanyLogo.svg" alt="" /> : <img src="CompanyLogo.svg" alt="" />}
                    <button>{isDarkMode ? <img src="dark-hamburgerMenu.svg" alt="" /> : <img src="light-hamburgerMenu.svg" alt="" />}</button>
                </div> 
                            {/* ------------------------------------------------------------------------------------------------- */}


                <div className="header-conteiner">
                    <div className="header-conteiner-one">
                        <p className="d-flex align-items-center gap-2">Home <img src="right.svg" alt="" /></p>
                        <p className="d-flex align-items-center gap-2">Setting <img src="right.svg" alt="" /></p>
                        <p className="text-primary d-flex align-items-center gap-2">General <img src="right.svg" alt="" /></p>
                        <p onClick={toggleMode} className="">{isDarkMode ? 'Light' : 'Dark'} Mode</p>
                    </div>
                    <div className="header-conteiner-two">
                        <b className="back gap-1">{isDarkMode? <img src="dark-back.svg" alt="" /> : <img src="light-back.svg" alt="" />}Back {isDarkMode? <img src="dark-back.svg" alt="" /> : <img src="light-back.svg" alt="" />}<span onClick={toggleMode} className="">{isDarkMode ? 'Light' : 'Dark'} Mode</span></b>
                        
                        <div className="content-and-buttons">
                            <div className="content">
                                <h1>Hey there, Brian Ford!</h1>
                                <p>Welcome back, we're happy to have you here!</p>
                            </div>
                            <div className="buttons">
                                <div className="edit-and-add">
                                    <button className="edit-btn">Edit section</button>
                                    <button className="add-btn">Add item</button>
                                </div>
                                <button className="dropdown-btn"><img src="Dropdownbutton.svg" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div> 


                <div className="body-conteiner ">

                    <div className="body-mini-conteiner-one" >
                        <div className="mini-headline">
                            <p>Revenue</p>
                            <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
                        </div>
                        <div className="mini-headline-2 gap-2 d-flex align-items-center justify-content-between">
                            <div className="mini-headline-content">
                                <h1>$390</h1>
                                <div className="mini-headline-content-content-1">
                                    <b>New</b>
                                    <p>monthly growth</p>
                                </div>
                            </div>
                            <div className="mini-headline-chart">
                                <img className="w-50" src="blue-chart.svg" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="body-mini-conteiner-one ">
                            <div className="mini-headline">
                                <p>Expenses</p>
                                <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
                            </div>
                            <div className="mini-headline-2 d-flex align-items-center justify-content-between">
                                <div className="mini-headline-content">
                                    <h1>$680</h1>
                                    <div className="mini-headline-content-content-2">
                                        <b>global</b>
                                        <p>monthly growth</p>
                                    </div>
                                </div>
                                <div className="mini-headline-chart">
                                    <img className="w-50" src="red-chart.svg" alt="" />
                                </div>
                            </div>
                    </div>


                    <div className="body-mini-conteiner-one ">
                            <div className="mini-headline">
                                <p>Expenses</p>
                                <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
                            </div>
                            <div className="mini-headline-2 d-flex align-items-center justify-content-between">
                                <div className="mini-headline-content">
                                    <h1>$390</h1>
                                    <div className="mini-headline-content-content-3">
                                        <b>intuitive</b>
                                        <p>monthly growth</p>
                                    </div>
                                </div>
                                <div className="mini-headline-chart">
                                    <img  className="w-50"src="green-chart.svg" alt="" />
                                </div>
                            </div>
                    </div>
                </div>





                {/* ------------------------------------------------------------------------------------------------- */}
                {/* <div className="body-conteiner row  g-xxl-4 ">

                    <div className="body-mini-conteiner-one col-12 col-md-6  col-xxl-4 " >
                        <div className="mini-headline">
                            <p>Revenue</p>
                            <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
                        </div>
                        <div className="mini-headline-2 gap-4 d-flex align-items-center justify-content-between">
                            <div className="mini-headline-content">
                                <h1>$390</h1>
                                <div className="mini-headline-content-content-1">
                                    <b>New</b>
                                    <p>monthly growth</p>
                                </div>
                            </div>
                            <div className="mini-headline-chart">
                                <img src="blue-chart.svg" alt="" />
                            </div>
                        </div>
                    </div>


                    <div className="body-mini-conteiner-one col-12 col-md-6  col-xxl-4">
                        <div className="mini-headline">
                            <p>Expenses</p>
                            <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
                        </div>
                        <div className="mini-headline-2 d-flex align-items-center justify-content-between">
                            <div className="mini-headline-content">
                                <h1>$680</h1>
                                <div className="mini-headline-content-content-2">
                                    <b>global</b>
                                    <p>monthly growth</p>
                                </div>
                            </div>
                            <div className="mini-headline-chart">
                                <img src="red-chart.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="body-mini-conteiner-one col-12 col-md-6  col-xxl-4">
                        <div className="mini-headline">
                            <p>Expenses</p>
                            <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
                        </div>
                        <div className="mini-headline-2 d-flex align-items-center justify-content-between">
                            <div className="mini-headline-content">
                                <h1>$390</h1>
                                <div className="mini-headline-content-content-3">
                                    <b>intuitive</b>
                                    <p>monthly growth</p>
                                </div>
                            </div>
                            <div className="mini-headline-chart">
                                <img src="green-chart.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div> */}


{/* ------------------------------------------------------------------------------------------------- */}
   

                <div className="mega-chart-conteiner">
                    <div className="chart-conteiner">
                        <div className="mini-headline mini-headline-chart">
                            <p>Revenue</p>
                            <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
                        </div>
                        <div className="chart-content">
                            <h4>Advanced Graphic</h4>
                            <p className="text-muted">Total Transaction Revenue</p>
                            <h1>$135,450</h1>
                            <div className="chart-bar">
                                <Bar className="chart" data={data} options={options} /> 
                            </div>
                            <div className="chart-footer-content d-flex justify-content-between">
                                <h3 className="text-muted p-2">Data graph</h3>
                                <button className="open-btn d-flex align-items-center text-primary gap-2">Open <img src="externalLink.svg" alt="" /></button>
                            </div>
                        </div>
                    </div>
                </div>

{/* ------------------------------------------------------------------------------------------------- */}
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
                    <div className="my-3 justify-content-center mx-4">
                        <div className="row cardss">
                        {/* İlk Kart */}
                            <div className="col-md-6 col-lg-4 mb-4">

                            <div className="cards">   {/* düzenlendi */}
                                <ul className="list-group-ul list-group list-group-flush"> {/* düzenlendi */}
                                    <li className="list-group-item-header d-flex align-items-center justify-content-between p-2"  >
                                        Lookscout Team <img src="Dropdownbutton.svg" alt="" />
                                    </li>
                                    {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4" > {/* düzenlendi */}
                                        <div className="d-flex gap-3">
                                            <div>
                                                <img src="avatar1.png" alt="" className="rounded-circle"/> {/* düzenlendi */}
                                            </div>
                                            <div className="list-content">
                                                <b>Latoya Langosh</b>
                                                <p className="fs-6">Dynamic</p> {/* düzenlendi */}
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                            <p className=" text-primary">Online </p> {/* düzenlendi */}
                                            <span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4">
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src="avatar2.png" alt="" className="rounded-circle"/>
                                            </div>
                                            <div className="list-content">
                                                <b>Abel Mohr</b>
                                                <p className="fs-6">Dynamic</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                            <p className="d-flex gap-3 text-primary">Online </p><span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4" >
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src="avatar3.png" alt="" className="rounded-circle"  />
                                            </div>
                                            <div className="list-content">
                                                <b>Shari Stamm</b>
                                                <p className="fs-6">Chief</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                            <p className="d-flex gap-3 text-dark">Offline</p> <span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4">
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src="avatar4.png" alt="" />
                                            </div>
                                            <div className="list-content">
                                                <b>Earl Johnson</b>
                                                <p className="fs-6">National</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                            <p className="d-flex gap-3 text-dark">Offline </p><span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                    <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4" >
                                        <div className="d-flex gap-4">
                                            <div>
                                                <img src="avatar5.png" alt="" className="rounded-circle" />
                                            </div>
                                            <div className="list-content">
                                                <b>Erick Champlin</b>
                                                <p className="fs-6">Central</p>
                                            </div>
                                        </div>
                                        <div className="list-group-item-footer d-flex gap-2">
                                            <p className="d-flex gap-3 text-primary">Online </p><span>{isDarkMode? <img src="dark-icon.svg" alt="" /> : <img src="Icon.svg" alt="" />}</span>
                                        </div>
                                    </li> 
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                    <button className="viewall-btn btn btn-primary m-3">View All</button>
                                </ul>
                             </div>
                            </div>
                {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                            {/* İkinci Kart */}
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="cards">
                                    <ul className="list-group-ul list-group list-group-flush"  >
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-header d-flex align-items-center justify-content-between p-2" >
                                        Updated Materials <img src="Dropdownbutton.svg" alt="" />
                                        </li>
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between"  >
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf1.svg" alt="" className="rounded-circle"  />
                                                </div>
                                                <div className="list-content">
                                                    <b>Lookscout Resources</b>
                                                    <p className="fs-6">80.69 mb</p>
                                                </div>
                                            </div> 
                                            <p className="list-group-item-footer d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                                        </li> 
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between" >
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf1.svg" alt="" className="rounded-circle"  />
                                                </div>
                                                <div className="list-content">
                                                    <b>Lookscout Updates</b>
                                                    <p className="fs-6">320.32mb</p>
                                                </div>
                                            </div>
                                            <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                                        </li> 
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between " >
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf3.svg" alt="" className="rounded-circle"  />
                                                </div>
                                                <div className="list-content">
                                                    <b>Lookscout Guides</b>
                                                    <p className="fs-6" >320.32 mb</p>
                                                </div>
                                            </div>
                                            <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                                        </li> 
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between ">
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf4.svg" alt="" className="rounded-circle"  />
                                                </div>
                                                <div className="list-content">
                                                    <b>Lookscout Design System</b>
                                                    <p className="fs-6" >320.32 mb</p>
                                                </div>
                                            </div>
                                            <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                                        </li> 
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between " >
                                            <div className="d-flex gap-3">
                                                <div>
                                                    <img src="pdf5.svg" alt="" className="rounded-circle"  />
                                                </div>
                                                <div className="list-content">
                                                    <b>Lookscout Guides</b>
                                                    <p className="fs-6" >120.05 mb</p>
                                                </div>
                                            </div>
                                            <p className="d-flex gap-3 text-primary">{isDarkMode ? <img src="dark-download.svg" alt="" />: <img src="light-download.svg" alt="" />}</p>
                                        </li> 
                                    {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex justify-content-between gap-2 p-3" >
                                            <button className="cancel-btn btn btn-primary w-100">Cancel</button>
                                            <button className="upload-btn btn btn-light w-100" >Upload</button>
                                        </li> 
                                    </ul>
                                </div>
                            </div>
                            {/* üçüncü Kart */}
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="cards"  >
                                    <ul className="list-group-ul list-group list-group-flush" >
                                        <li className="list-group-item-header d-flex align-items-center justify-content-between p-2" >
                                        Recent Transactions
                                        </li>
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 " >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="pinterest.svg" alt="" className="rounded-circle" />
                                                    </div>
                                                    <div className="list-content">
                                                        <b>Pinterest Team</b>
                                                        <p className="fs-6"  >Jan 23 2022</p>
                                                    </div>
                                            </div>
                                                <p className="list-btn-done d-flex gap-3">Done</p>
                                        </li> 

                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 " >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="elmas.svg" alt="" className="rounded-circle"  />
                                                    </div>
                                                    <div className="list-content">
                                                        <b>Sketch Team</b>
                                                        <p className="fs-6"  >Jun 15 2022</p>
                                                    </div>
                                            </div>
                                                <p className="list-btn d-flex gap-3">Failed</p>
                                        </li> 



                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}


                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 " >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="gitlab.svg" alt="" className="rounded-circle"  />
                                                    </div>
                                                    <div className="list-content">
                                                        <b>Gitlab Team</b>
                                                        <p className="fs-6" >Jan 215 2022</p>
                                                    </div>
                                            </div>
                                                <p  className="list-btn-done d-flex gap-3">Done</p>
                                        </li> 
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 "  >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="clickup.svg" alt="" className="rounded-circle"  />
                                                    </div>
                                                    <div className="list-content">
                                                        <b>Clickup</b>
                                                        <p className="fs-6">Jan 15 2022</p>
                                                    </div>
                                            </div>
                                                <p  className="list-btn d-flex gap-3">Failed</p>
                                        </li> 
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <li className="list-group-item-li d-flex align-items-center justify-content-between gap-4 " >
                                            <div className="d-flex gap-4">
                                                    <div>
                                                        <img src="deliveri.svg" alt="" className="rounded-circle" />
                                                    </div>
                                                    <div className="list-content">
                                                        <b>Deliverooo</b>
                                                        <p className="fs-6">Jan 15 2022</p>
                                                    </div>
                                            </div>
                                                <p className="list-btn-done d-flex gap-3">Done</p>
                                        </li> 
                                        {/* ---------------------------------------------------------------------------------------------------------------------------- */}
                                        <div className="p-3">
                                            <p className="d-flex gap-2 text-primary">Open <img src="externalLink.svg" alt="" /></p>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


