import './App.css';
import NavBar from './component/Header/NavBar.jsx'
import Header from './component/Header/Header.jsx'
import Featers from './component/Featers/Featers.jsx'
import AboutMe from './component/AboutME/AboutMe.jsx'
import MyProjects from './component/MyProjetcs/MyProjects.jsx'
import MyService from './component/MyService/MyService.jsx'
import MySuccess from './component/MySuccess/MySuccess.jsx'
import Footer from './component/Footer/Footer.jsx'

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className='content'>
          <Header />
          <Featers />
          <AboutMe />
          <MyProjects />
          <MyService />
          <MySuccess />
          <Footer />
        </div>
    </div>
  );
}

export default App;
