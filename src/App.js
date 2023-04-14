import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import About from './components/About';
import Project from './components/Project';
import Project_2 from './components/Project_2';


function App() {
  return (
    <div className='app'>
      <Header></Header>
      {/* <About></About> */}
      <Project></Project>
      {/* <Experience></Experience> */}
    </div>
  )
}

export default App;
