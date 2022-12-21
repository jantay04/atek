import React from "react";
import Sidebar from '../../Components/Sidebar'
import Main from '../../Components/Main'
import About from '../../Components/About'
import Partner from '../../Components/Partner'
import Marketing from '../../Components/Marketing'
import Contacts from '../../Components/Contacts'
import Work from '../../Components/Work'
import Form from '../../Components/Form'
import SidebarSocials from '../../Components/SidebarSocials'
import MainLayout from '../../Components/MainLayout'

function Home() {
  return (
    <div>
      <MainLayout>
        <Sidebar />
        <Main />
        <About />
        <Partner />
        <Marketing />
        <Contacts />
        <Work />
        <Form />
      </MainLayout>
      
      <SidebarSocials />
    </div>
  );
}

export default Home;
