import React from "react";
import './Games.css';
import  admiral  from "../img/admiral.png"
import  gotospin  from "../img/gotospin.png"
import  admbet888  from "../img/admbet888.png"
import  admbet  from "../img/admbet.png"
import  dragon  from "../img/dragon.png"
import  egipt777  from "../img/egipt777.png"
import  pingnet  from "../img/pingnet.png"
import  playwin  from "../img/playwin.png"


export default function Games() {
return (
    <div className="centrado">
      {/* <img className='imag' src="https://media.tenor.com/i3qZzUkQT6AAAAAd/casino.gif" alt="gif" /> */}
      <div className="juegos">
        <h2>PLATAFORMAS</h2>
        <h3>Haga click en la plataforma que desea jugar:</h3>
        <br />
        <h4>Gotospin</h4>
        <a href={"http://gotospin.net/"} type="button"><img className="imgGames" src={gotospin} alt="" /></a>
        <br />
        <h4>Admiral</h4>
        <a href={"http://admiralcasino.biz/"} type="button"><img className="imgGames" src={admiral} alt="" /></a>
        <br />
        <h4>Admbet</h4>
        <a href={"http://admbet.com/"} type="button"><img className="imgGames" src={admbet} alt="" /></a>
        <br />
        <h4>Admbet888</h4>
        <a href={"http://admbet888.com/"} type="button"><img className="imgGames" src={admbet888} alt="" /></a>
        <br />
        <h4>Egypt777</h4>
        <a href={"http://egypt777.com/"} type="button"><img className="imgGames" src={egipt777} alt="" /></a>
        <br />
        <h4>Lucky Dragon</h4>
        <a href={"http://lucky-dragon.net/"} type="button"><img className="imgGames" src={dragon} alt="" /></a>
        <br />
        <h4>Ping2 Win</h4>
        <a href={"http://ping2win.com/"} type="button"><img className="imgGames" src={pingnet} alt="" /></a>
        <br />
        <h4>Playwplay</h4>
        <a href={"http://playwplay.com/"} type="button"><img className="imgGames" src={playwin} alt="" /></a>
        <br />
      </div>
      <br />
    </div>
)}
