import React from 'react';
import './Home.css';
import { useState, useEffect, useRef } from 'react';


export default function Home() {
const [personas, setPersonas] = useState(61)
const [crece,  setCrece] =useState(true)
const[creceSeg, setCreceSeg] =useState(true)
 
useEffect(()=>{
  let intervalo = null;


  if(personas >= 48 && crece){
  intervalo = setInterval(() => { 
  setPersonas(personas => personas + 1);
  }, 9000);
  if(personas === 72){
  setCrece(false)
  }
} 


if(personas <= 73 && !crece && !creceSeg){
  if(personas === 65){
    setCrece(true)
    setCreceSeg(true)
    }

  intervalo = setInterval(() => { 
  setPersonas(personas => personas - 1);
  }, 9000); 
}

if(personas <= 73 && !crece && creceSeg){
  if(personas === 59){
    setCrece(true)
    setCreceSeg(false)
    }
  intervalo = setInterval(() => { 
  setPersonas(personas => personas - 1);
  }, 9000); 
}

  return () => clearInterval(intervalo);

}, [personas]);

  return (
    <div className='home'>
    
      <img className='image' src="https://mendozatoday.com.ar/wp-content/uploads/2021/07/Casino.gif" alt="gif" />
      {/* { <video controls>
          <source src="https://player.vimeo.com/video/338795767?h=9e40727958&amp;muted=1&amp;autoplay=1&amp;loop=1&amp;transparent=0&amp;background=1&amp;app_id=122963" />
        </video> }  */}
              <br/>
        <h1 className='texto'>Casino Diamante LQ</h1>
        <div style={{ display:"flex", position:"relative", justifyContent:"flex-end", margin:"2%"}}>
        <div className='conect'>  
        {personas} personas conectadas
        <img className='imgcon' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLdhbWjBAw8YhmkaUj_O6NgzjJ2kkGFh9bA&usqp=CAU" alt="img" />
      </div>
      </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

        <div className='bienvenido'>
          <div className='subbienv' >
            <h2>Registrar</h2>
            <h8>Registrate o envianos un whatsapp.</h8>
          </div>
          <div className='subbienv'>
            <h2>Activate</h2>
            <h8>Te enviamos tu usuario</h8>
              <h8> y clave para comenzar.</h8>
          </div>
          <div className='subbienv'>
            <h2>Deposita</h2>
            <h8>Realiza un primer deposito.</h8>
          </div>
          <div className='subbienv'>
           <h2>Divertite</h2>
           <h8>Empeza a jugar y ganá!</h8>
          </div>
          <br/>
        </div>
        <div className='fondo'>
        <div className="pagos">
          <h3>Metodos aceptados:</h3>
            </div>
          
          <div className='metpag'>
            <div className='dospag'> 
              <img className='tb' src="https://www.codere.bet.ar/_catalogs/masterpage/codere/images/mercado-pago.svg" alt="imagenmp" />
              <img className='tb' src="https://www.codere.bet.ar/_catalogs/masterpage/codere/img/Logo_TransferenciaBancariacolor.png" alt="imagentansferencia" />
              <img className='tj' src="https://www.bodog.com/cms/BDG/TBvSuab9Qvyj5dczL03oFQ//american-express-bodog.png" alt="imagenamerican" />
              <img className='tj' src="https://www.bodog.com/cms/BDG/MntYnxPqQVeNdn1G8H52YA//master-card-bodog.png" alt="imagenmaster" />
              <img className='tj' src="https://www.bodog.com/cms/BDG/WZpFmUOhQgmSxSw97Z1ytg//visa-bodog.png" alt="imagenvisa" />
            </div>
          
        </div>
        </div>
        <br />
        <br/>
        <br/>
        <br/>
        <br/>
                <br/>
        <br/>
        <br/>

 
        <div className='piePagin'>
        <div style={{backgroundColor: "#0000009a" }}>
                 <br />
        <div style={{display: "flex", position: "relative", justifyContent:"center" }}>
          Whatsapp: (011) 15 7635 1958
        </div>
        <div style={{display: "flex", position: "relative", justifyContent:"center" }}>
          Correo: casdiamantelq@gmail.com
        </div>
        <div style={{display: "flex", position: "relative", justifyContent:"center" }}>
          Jugar compulsivamente es perjuducial para la salud
        </div>
        <br />        
       </div>
        </div>
        </div> 

        );
}



