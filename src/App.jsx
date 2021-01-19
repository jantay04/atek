import './app.module.css';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Marketing from './components/Marketing/Marketing';
import Work from './components/Work/Work';
import Form from './components/Form/Form';
import SidebarSocials from './components/SidebarSocials/SidebarSocials';
import Sidbar from './components/Sidebar/Sidebar';
import Parallax from "./components/Parallax/Parallax";

const App = ({}) => {
  return (
    <div>
      <Header/>
      <Sidbar/>
      <Main/>
      <Parallax/>
      <About/>
      <Marketing/>
      <Contacts/>
      <Work/>
      <Form/>
      <Footer/>
      <SidebarSocials/>
    </div>
  );
}

export default App;
