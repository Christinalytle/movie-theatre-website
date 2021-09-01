// import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import TestCardPage from './components/TestCardPage'

import MenuBar from './components/MenuBar'

function App() {
  return (
      <div>
        <MenuBar/>
        <TestCardPage />
      </div>
   
      
  );
}

export default App;
