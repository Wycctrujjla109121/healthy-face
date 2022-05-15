import { useEffect, useState } from 'react';
import './App.css';

//  COMPONENTS
import Main from './components/pages/main/Main.jsx'


function App() {

  const defaultState = []
  const [states, useStates] = useState(defaultState)

  return (
    <div className="App">
      <Main states={states} useStates={useStates} defaultState={defaultState}/>
    </div>
  );
}

export default App;
