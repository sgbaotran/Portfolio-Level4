import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Home from './components/Home';
import Project from './components/Project';
import Contact from './components/Contact';

function App() {
  let component

  if (window.screen.width > 420) {
    switch (window.location.pathname) {
      case "/Home":
        component = <Home />
        break;
      case "/experience":
        component = <Experience />
        break;
      case "/project":
        component = <Project />
        break;
      case "/contact":
        component = <Contact />
        break;
      default:
        component = <Home />;
        break;
    }
  }

  else {
    component = [<Home />, <Experience />, <Project />, <Contact />]
  }

  return (
    <div className='app'>
      <Header></Header>
      {component}
    </div>
  )
}

export default App;
