import { useState, createContext, useContext } from "react";
const Bulbcontext = createContext();//create a context
function App() {
  const [light, setLight] = useState(true);
  return (
    <div>
     <Bulbcontext.Provider value={{light:light,setLight:setLight}}>
          <Light />
     </Bulbcontext.Provider>{/* wrapped in inside a provider / */}
      
      {/* least common ancestor */}
    </div>
  );
}
function Light() {
  //we have to pass a extra props here which doesn't need this light setLight veriable at all .Rather it just passes the props to it decendent

  return (
    <div>
      <LightBulb />
      <LightSwitch  />
    </div>
  );
}
function LightBulb() {
  const {light}=useContext(Bulbcontext);//consume the context
  return <div>{light ? "light is on" : "light is off"}</div>;
}
function LightSwitch() {
  const {setLight}=useContext(Bulbcontext);
  function togoleSwitch() {
    setLight((light) => !light);
  }
  return (
    <div>
      <button onClick={togoleSwitch}>LightSwitch</button>
    </div>
  );
}

export default App;
