import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext"; 

export default function CardHeader() {
  const userData = useContext(UserContext);

  return (
    <div className="flex justify-between mb-[30px]">
      <div className="relative w-[100%]">
        <input
          type="text"
          className="rounded-lg w-[60%] p-2 text-[24px] pl-14 drop-shadow-xl"
          placeholder="Pesquisar por nome"
        />
        <img
          className="absolute top-[28%] left-3"
          src="./assets/Images/search.png"
          alt="Ícone de lupa representando o input de pesquisa."
        />
      </div>
      <div className="flex items-center mr-5 gap-[10px]">
        <Link to={"/perfil"}>
          <img
            className="w-[70px] hover:scale-125 transition-all rounded-full"
            src={userData?.photoURL || "../assets/icons/User.png"}
            alt="Imagem do Usuário"
          />
        </Link>
      </div>
    </div>
  );
}
