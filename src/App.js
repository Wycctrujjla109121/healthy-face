import { useEffect, useState } from 'react';
import './App.css';

//  COMPONENTS
import Main from './components/pages/main/Main.jsx'


function App() {

  const [states, useStates] = useState([])
  const defaultState = states
  return (
    <div className="App">
      <Main states={states} useStates={useStates} defaultState={defaultState}/>
    </div>
  );
}

export default App;
