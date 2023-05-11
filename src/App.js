import './App.css';
import diego from "./diego.jpg"
import Confetti from "react-confetti"
import {AiFillCloud} from "react-icons/ai"

function App() {
  return (
    <div className="App">
        <div className='wrapper'>
          <h1 className='diego'>DIEGO</h1>
           <img src={diego} className="image" alt={""}></img>
          <h1 className='text'>BiRTHDAY PARTY</h1>
          <h3>FESTEGGiAMO iL 1° COMPLEANNO Di DiEGO! <br/> <br/>
           FACCiAMO MERENDA iNSiEME E SPEGNiAMO LE CANDELiNE
          </h3>
          <div className='square'><p>21 Maggio 2023 <br/> Ore 16:30</p></div>
          <div className='square'><p>Strada della Chiesa 29 <br/> Bannone, Traversetolo (Pr) </p></div>
          <p className='cloud'>Se venite mandate un whatsapp a papà  <AiFillCloud style={{color:"black"}}/> </p>
          <Confetti/>
        </div>
    </div>
  );
}

export default App;
