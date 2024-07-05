// src/pages/Perfil.jsx
import { useContext } from "react";
import Input from "../components/Input";
import Label from "../components/Label";
import Sidebar from "../layout/sidebar/Sidebar";
import { UserContext } from '../contexts/UserContext';

export default function Perfil() {
  const userData = useContext(UserContext); 

  // Extrair o domínio do email
  let domain = userData?.email ? userData.email.split('@')[1].split('.')[0] : '';

  return (
    <section className="flex h-[100%]">
      <Sidebar currentAppPage={'/perfil'} />
      <div className="bg-lilasClaro p-9 w-[100%] mx-10 my-10 rounded-3xl">
        <div className="bg-[#867A9A] w-[100%] rounded-2xl pb-[5%] flex flex-col gap-3">
          <form className="text-white mx-[120px] w-auto">
            <div className="text-center m-auto">
              {userData?.photoURL && ( 
                <img
                  className="m-auto my-8 rounded-full"
                  src={userData.photoURL + "?sz=200"} 
                  alt="Sua foto de perfil do Google"
                />
              )}
              <input
                className="hidden"
                type="file"
                accept="image/*"
              />
            </div>
            <div className="flex flex-col gap-3 mt-7 py-2.5 ...">
              <Label htmlFor={"username"} text={"Nome de Usuário:"} />
              <Input id={"username"} type={"text"} placeholder={userData?.displayName} />
            </div>
            <div className="flex flex-col gap-3 mt-7 py-2.5 ...">
              <Label htmlFor={"email"} text={"E-mail:"} />
              <Input id={"email"} type={"text"} placeholder={userData?.email} />
            </div>
            <div className="flex flex-col gap-3 mt-7 py-2.5 ...">
              <Label htmlFor={"domain"} text={"Domínio:"} />
              <Input id={"domain"} type={"text"} placeholder={domain} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}