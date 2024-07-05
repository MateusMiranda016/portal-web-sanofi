import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase/firebaseConfig'
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

export default function InicioPage() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (result) => {
      if (result) {
        const { displayName, email } = result;
        setUserData({ displayName, email });
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(false);
      }
    });
  
    return () => unsubscribe();
  }, []);
  
  const SignUpUsingGoogle = () => {

    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((result) => {

        const { displayName, email } = result.user;
        setUserData({ displayName, email })

        setIsLoggedIn(true)
      }).catch((error) => {

        console.log({ error });

      });
  }

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

  useEffect(() => {
    const handlePageLoad = () => {
      Logout(); // Chama a função de logout quando a página é carregada
    };

    window.addEventListener('load', handlePageLoad); // Adiciona um event listener para o carregamento da página

    return () => {
      window.removeEventListener('load', handlePageLoad); // Remove o event listener quando o componente é desmontado
    };
  }, []);

  
  return (
    <div className="flex">
      <div className="w-1/2">
        <img
          className="h-[100vh] w-[100%]"
          src="../../assets/images/InicioImage.png"
          alt="Imagem contendo objetos de escritório com predominância da cor roxa"
        />
      </div>
      <div className="w-1/2 pt-[200px] px-[5%]">
        <img
          className="m-auto pb-[60px]"
          src="../../assets/images/LogoSanofi.png"
          alt="Logo da Sanofi"
        />
        <div>
          <h2 className="text-[32px] font-bold text-center">Portal De Relatórios</h2>
          <p className="py-8 ... text-[20px] text-center">
            Acesse todas informações de mídias e performance
          </p>
        </div>
        {!isLoggedIn ?
          <button onClick={SignUpUsingGoogle} type="button" className="w-[100%] font-sans font-bold text-[26px] text-white bg-[#B868FF] p-2 rounded-lg shadow-xl drop-shadow-lg">
            Acesse
          </button>
          :
          isLoggedIn && (userData.email.split('@')[1] === 'mediamonks.com' || userData.email.split('@')[1] === 'sanofi.com') ?
  <Navigate to={'/home'}></Navigate>
  :
  <p className="py-8 ... text-[#E94A34] text-[20px] text-center">
    Domínio de Email não autorizado!
  </p>
        }
          </div>
        
        </div>
  );
}
