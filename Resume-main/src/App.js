import HC from './HC.jpg';
import './App.css';
import dsl from './dashlg.png';
import historylg from './historylg.png';
import calanderlg from './calanderlg.png';
import appointmentlg from './appointmentlg.png';
import statisticslg from './statisticslg.png';
import chatlg from './chatlg.png';
import supportlg from './supportlg.png';
import settinglg from './settinglg.png';
import ntflg from './ntflg.png';
import humanbodyiamge from './humanbodyiamge.avif';
import lungsimg from './lungsimg.jpg';
import teethimg from './teethimg.webp';
import boneimg from './boneimg.jpg';
import  activitimg from './activitimg.jpg';
import React from 'react';
import profilelg from './profilelg.png';
import pluslg from './pluslg.png';
import Calendar from './Calendar';




function App() {
  return (  
<div className="container">
    <div className="sidebar">
      <div className="HcLg">
        <div className="hl"><strong>Health<span style={{ color :' rgb(55, 7, 96) '}}>care.</span></strong></div>
      <div> <img src={HC} className="HC" alt="logo" /></div>
      </div>

      <div className="gen">General</div>
      <div className="gen1"><br />
        <div><img src={dsl} className="dsl" alt="logo" /><span className="dsl1" style={{marginLeft: "10px", fontSize:"20px"}}>Dashboard</span></div><br /><br />
      <div><img src={historylg} className="historylg" alt="logo" /><span className="historylg1" style={{marginLeft: "10px", fontSize:"20px"}}>History</span></div><br /><br />
      <div><img src={calanderlg} className="calanderlg" alt="logo" /><span className="calanderlg1" style={{marginLeft: "10px", fontSize:"20px"}}>Calendar</span></div><br /><br />
      <div><img src={appointmentlg} className="appointmentlg" alt="logo" /><span className="appointmentlg1" style={{marginLeft: "10px", fontSize:"20px"}}>Appointments</span></div><br /><br />
       <div><img src={statisticslg} className="statisticslg" alt="logo" /><span className="statisticslg1" style={{marginLeft: "10px", fontSize:"20px"}}>Statistics</span></div><br /><br />
      </div>
      
      <div className="gen">Tools</div>
      <div className="gen1"><br />
      <div><img src={chatlg} className="chatlg" alt="logo" /><span className="chatlg1" style={{marginLeft: "10px", fontSize:"20px"}}>Chat</span></div><br /><br />
      <div><img src={supportlg} className="supportlg" alt="logo" /><span  className="supportlg1" style={{marginLeft: "10px", fontSize:"20px"}}>Support</span></div><br /><br /><br />
           <div><img src={settinglg} className="supportlg" alt="logo" /><span  className="supportlg1" style={{marginLeft: "10px", fontSize:"20px"}}>Setting</span></div>

      </div>
    </div>
    <div className="main">
      <div className="topbar">
        <div className='dashboaqrd'>    
        <div className='search-container'>
        
           <input type="text" placeholder= "🔍 Search" className="search-input"  />
            <img src={ntflg} className='cardntf ntflg' />
        
        
       
      </div>
      
        <div className='dsb'>Dashboard</div>
        </div>
        
        
      </div>
      <div className="dashboard">
        <div className="card">
          
              <div><img src={humanbodyiamge} className="hbi" alt="logo" /></div>

          
        </div>
        <div className="card">

          <div className="cardL">
            <div className='FL'><div className='partText'>Lungs</div><div><img src={lungsimg} className="lungsimg" alt="logo" /></div></div>
            <div style={{opacity:"0.5"}}>24-may-2025</div>
             <div class="progress-bar">
    <div class="progress-fill pfl">70%</div> </div>
            <div></div>
        </div>

         <div className="cardT">
            <div className='FL'><div className='partText'>Teeth</div><div><img src={teethimg} className="lungsimg" alt="logo" /></div></div>
            <div style={{opacity:"0.5"}}>24-may-2025</div>
            <div class="progress-bar">
    <div class="progress-fill pft">70%</div> </div>
            <div></div>
        </div>

         <div className="cardB">
            <div className='FL'><div className='partText'>Bone</div><div><img src={boneimg} className="lungsimg" alt="logo" /></div></div>
            <div style={{opacity:"0.5"}}>24-may-2025</div>
            <div class="progress-bar">
    <div class="progress-fill pfb">70%</div></div>
            <div></div>
        </div>

       
        </div>
   
      </div>
      <div className="dashboard">
        <div className="card">
          <div className='dsb'>Activity Graph</div>
          <div><img src={activitimg} className="activitimg" alt="logo" /></div>
          
        </div>
          </div>
        
    
      
    </div>
    <div className="cal">
        <div className="rightbar">
        
        <div className="lg"> <img src={profilelg} className="pflg" alt="logo" />
          <img src={pluslg} className="pflg" alt="logo" /></div>
       
      </div>
        <div className="card">
          <div><Calendar /></div>
        </div>

    </div>
  </div>
  );
}

export default App;