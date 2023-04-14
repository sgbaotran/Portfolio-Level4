import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import About from './components/About';
import Project from './components/Project';



function App() {
  let component
  switch (window.location.pathname) {

    case "/about":
      component = <About />
      break;
    case "/experience":
      component = <Experience />
      break;
    case "/project":
      component = <Project />
      break;
    default:
      component = <About />;
      break;
  }


  return (
    <div className='app'>
      <Header></Header>
      {component}
    </div>
  )
}

export default App;
