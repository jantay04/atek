import About from './About/About';
import Contacts from './Contacts/Contacts';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Main from './Main/Main';
import Marketing from './Marketing/Marketing';
import Work from './Work/Work';
import Form from './Form/Form';
import SidebarSocials from './SidebarSocials/SidebarSocials';
import Sidbar from './Sidebar/Sidebar';
import Parthner from "./Partner/Parthner";

const ComponentsRu = ({}) => {
  return (
    <div>
      <Header/>
      <Sidbar/>
      <Main/>
      <About/>
      <Parthner/>
      <Marketing/>
      <Contacts/>
      <Work/>
      <Form/>
      <Footer/>
      <SidebarSocials/>
    </div>
  );
}

export default ComponentsRu;
