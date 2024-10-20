import { useState } from "react";
function App() {
  const [light,setLight]=useState(true);
  return(<div>
     <Light light={light} setLight={setLight}/>
     {/* least common ancestor */}
  </div>);
}
function Light({light,setLight}){//we have to pass a extra props here which doesn't need this light setLight veriable at all .Rather it just passes the props to it decendent
  
  return (<div>
    <LightBulb light={light}/>
    <LightSwitch setLight={setLight}/>
  </div>);
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
