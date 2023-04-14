import './App.css';
import Header from './components/Header';
import Experience from './components/Experience';
import Home from './components/Home';
import Project from './components/Project';



function App() {
  let component
  switch (window.location.pathname) {

    case "/Home":
      component = <home />
      break;
    case "/experience":
      component = <Experience />
      break;
    case "/project":
      component = <Project />
      break;
    default:
      component = <Home />;
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
