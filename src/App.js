// import { BrowserRouter as Router, Route } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'
import './App.css';
import TestCardPage from './components/TestCardPage'
import Counter from './components/Counter'
import MenuBar from './components/MenuBar'
import Hero from './components/Hero'

function App() {
  return (
      <div>
        <MenuBar/>
        <Hero/>
        <TestCardPage />
        <Counter />
      </div>
   
      
  );
}

export default App;
