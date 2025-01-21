import './css/App.css';
import './css/props.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//components
import Home from './components/Home';
import {Treasury, Treasuryitems} from './components/Treasury/Treasury';
import Projects from './components/Projects/Projects';
import TItem from './components/Treasury/TItem';


function App() {
  return(
      <Router>
        <Routes>
          <Route path='/' element={ <><Home/></>}/>
          <Route path='/project' element={<><h1 className="mid vision">VISION 2025</h1>            <Projects/></>}/>
          <Route path='/treasury' element={ <><h1 className='mid vision'>VISION 2025</h1> <p className='mid vision'>TREASURY</p><Treasury/></>}/>{Treasuryitems.map((item, index) => (
          <Route key={index} path={`/${item.link}`}element={<><h1 className="mid vision">VISION 2025</h1> <p className="mid vision">{item.name}</p><TItem item={item} /></>}/>     ))}   
        </Routes>
      </Router>
  )
}
export default App;
