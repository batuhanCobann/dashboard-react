import { Chart, registerables } from "chart.js";
import "../styles/header.css";
import { Bar } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import FooterCard from "./footerCard";


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




export default function Header(){

  
    return (
        <>


        
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
{/* ------------------------------------------------------------------------------------------------- */}
<div className="body-conteiner">
           <div className="body-mini-conteiner-one">
               <div className="mini-headline">
                   <p>Revenue</p>
                   <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
               </div>
               <div className="mini-headline-2 gap-4 d-flex align-items-center justify-content-between">
                   <div className="mini-headline-content">
                       <h1>$390</h1>
                       <div className="mini-headline-content-content">
                           <b>New</b>
                           <p>monthly growth</p>
                       </div>
                   </div>
                   <div className="mini-headline-chart">
                       <img src="Chart.svg" alt="" />
                   </div>
               </div>
           </div><div className="body-mini-conteiner-one">
               <div className="mini-headline">
                   <p>Expenses</p>
                   <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
               </div>
               <div className="mini-headline-2 d-flex align-items-center justify-content-between">
                   <div className="mini-headline-content">
                       <h1>$680</h1>
                       <div className="mini-headline-content-content">
                           <b>global</b>
                           <p>monthly growth</p>
                       </div>
                   </div>
                   <div className="mini-headline-chart">
                       <img src="Chart.svg" alt="" />
                   </div>
               </div>
           </div><div className="body-mini-conteiner-one">
               <div className="mini-headline">
                   <p>Expenses</p>
                   <button className="mini-btn"><img src="Dropdownbutton.svg" alt="" /></button>
               </div>
               <div className="mini-headline-2 d-flex align-items-center justify-content-between">
                   <div className="mini-headline-content">
                       <h1>$390</h1>
                       <div className="mini-headline-content-content">
                           <b>intuitive</b>
                           <p>monthly growth</p>
                       </div>
                   </div>
                   <div className="mini-headline-chart">
                       <img src="Chart.svg" alt="" />
                   </div>
               </div>
           </div>
       </div>


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


        <FooterCard isDarkMode={isDarkMode} />


</div>
        </>




        
    )
}


