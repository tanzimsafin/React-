import { useState } from "react";


function App() {
  return(<div>
     <Light/>
  </div>);
}
function Light(){
  const [bulbState,SetbulbState]=useState(true);
  const [light,setLight]=useState(true);
  return (<div>
    <LightBulb light={light}/>
    <LightSwitch setLight={setLight}/>
  </div>)
}
function LightBulb({light}){
  return (<div>
    {light?"light is on":"light is off"}
  </div>)
}
function LightSwitch({setLight}){
  function togoleSwitch(){
    setLight(light=>!light);
  }; 
    return(<div>
      <button onClick={togoleSwitch}>LightSwitch</button>
    </div>)
    
}

export default App
