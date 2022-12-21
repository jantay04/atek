import style from "./sidebarSocials.module.css";
import telegram from "./assets/telegram.svg";
import instagram from "./assets/instagram.svg";
import whatsapp from "./assets/whatsapp.svg";
import linkedin from "./assets/linkedin.svg";
import facebook from "./assets/facebook.svg";

const SidebarSocials = (props) => {

  const LinksSocial = [
    {
      id:1,
      tittle: "Facebook",
      url: "https://www.facebook.com/atekds",
      icon:  facebook,
    },
    {
      id:2,
      tittle: "Instagram",
      url: "https://www.instagram.com/atek_ds",
      icon:  instagram,
    },
    {
      id:3,
      tittle: "WhatsApp",
      url: "https://wa.me/996221123456",
      icon:  whatsapp,
    },
    {
      id:4,
      tittle: "Telegram",
      url: "https://t.me/atekds",
      icon:  telegram,
    },
    {
      id:5,
      tittle: "Linkedin",
      url: "https://www.linkedin.com/company/a-tek-digital-studio",
      icon:  linkedin,
    },
  ]

  return (
    <div className="max-md:hidden fixed top-[35%] right-0 bg-[#000f30] p-2 rounded-tl-lg rounded-bl-lg shadow-xl">
        {LinksSocial.map((item) => 
            <a href={item.url} target="_blank" className=" my-[5px] p-2 rounded-lg flex justify-center items-center hover:bg-[#FF6333] transition-all">
              <img src={item.icon} className="h-5 w-5" />
            </a>
        )}
    </div>
  );
};

export default SidebarSocials;
