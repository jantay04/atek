import './app.module.css';
import About from './componentsRu/About/About';
import Contacts from './componentsRu/Contacts/Contacts';
import Footer from './componentsRu/Footer/Footer';
import Header from './componentsRu/Header/Header';
import Main from './componentsRu/Main/Main';
import Marketing from './componentsRu/Marketing/Marketing';
import Work from './componentsRu/Work/Work';
import Form from './componentsRu/Form/Form';
import SidebarSocials from './componentsRu/SidebarSocials/SidebarSocials';
import Sidbar from './componentsRu/Sidebar/Sidebar';
import ComponentsRu from "./componentsRu/ComponentsRu";
import {BrowserRouter, Route} from "react-router-dom";
import Eng_Ru from "./Eng_Ru/Eng_Ru";
import ComponentsEng from "./componentsEng/ComponentsEng";

const App = ({}) => {
    return (
      <>
          <BrowserRouter>
              <div>
                  <Route exact path='/' component={ComponentsRu}/>
                  <Route path='/eng' component={ComponentsEng}/>
              </div>
          </BrowserRouter>
      </>
    );
}

export default App;
