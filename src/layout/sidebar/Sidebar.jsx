import { useState, useEffect } from "react";
import SidebarItemList from "./SidebarList";
import { Link } from "react-router-dom";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase/firebaseConfig'

export default function Sidebar({ currentAppPage }) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth >= 1300 ? true : false);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // eslint-disable-next-line
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  // eslint-disable-next-line
  const [userData, setUserData] = useState({})


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {

        const {displayName, email} = result
        setUserData({ displayName, email })

        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }

    })

    return () => unsubscribe();
  },[])

  const Logout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUserData({})
      setIsLoggedIn(false)
      sessionStorage.clear()
    }).catch((error) => {
      // An error happened.
      console.log({ error });
    });
  }

  return (
    <aside
      className={`bg-lilasClaro ${
        isOpen ? "w-[400px]" : "w-[130px]"
      } relative transition-all `}
    >
      <div className="text-center mt-[75px]">
        <Link to="/home">
          {isOpen && (
            <img
              className="m-auto hover:scale-110 transition-all"
              width={200}
              src="./assets/Images/LogoSanofi.png"
              alt="Logo da Sanofi"
            />
          )}
          {!isOpen && (
            <img
              className="m-auto"
              width={100}
              src="./assets/Images/logoMini.png"
              alt="Logo Reduzido da Sanofi"
            />
          )}
        </Link>
        <p
          className={`mt-[10px] text-[21px] text-[#545353] font-semibold text-center ${
            isOpen ? "" : "hidden"
          }`}
        >
          {userData.displayName}
        </p>
      </div>
      <div>
        <ul
          className={`flex flex-col gap-[80px] text-center mt-[100px] mb-[10%] ml-[20%] ${
            isOpen ? "" : "hidden"
          }`}
        >
          <SidebarItemList
            text={"Início"}
            iconPath={"./assets/Icons/home.png"}
            redirectPage={"/home"}
            currentPage={currentAppPage}
          />
          <SidebarItemList
            text={"Dashboards"}
            iconPath={"./assets/Icons/category.png"}
            redirectPage={"/dashboards"}
            currentPage={currentAppPage}
          />
          <SidebarItemList
            text={"Status"}
            iconPath={"./assets/Icons/up.png"}
            redirectPage={"/status"}
            currentPage={currentAppPage}
          />
          <SidebarItemList
            text={"Perfil"}
            iconPath={"./assets/Icons/person.png"}
            redirectPage={"/perfil"}
            currentPage={currentAppPage}
          />
          <SidebarItemList
            text={"Relatórios"}
            iconPath={"./assets/Icons/add.png"}
            redirectPage={"/relatorios"}
            currentPage={currentAppPage}
          />
          <SidebarItemList
          text={"Sair"}
          iconPath={"./assets/Icons/logout.png"}
          redirectPage={"/"}
          currentPage={currentAppPage}
          onClick={Logout}
        />

          {/* TODO: SETA EMBAIXO */}
          {/* <li>
        <img
          onClick={toggleSidebar}
          alt="Seta indicando a função de recolher a barra lateral."
          className={`${
            !isOpen ? "transform rotate-180 right-10 top-2" : "right-5 bottom-10 "
          } w-[40px] h-[60px] transition-all absolute cursor-pointer`}
          src="./assets/Icons/seta.png"
        ></img>
      </li> */}
        </ul>
      </div>
      <img
        onClick={toggleSidebar}
        alt="Seta indicando a função de recolher a barra lateral."
        className={`${
          !isOpen ? "transform rotate-180 right-10 top-2" : "right-5 top-0 "
        } w-[40px] h-[60px] transition-all absolute cursor-pointer`}
        src="./assets/Icons/seta.png"
      ></img>
    </aside>
  );
}
