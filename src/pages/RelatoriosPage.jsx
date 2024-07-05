import { useState, useEffect } from "react";
import Sidebar from "../layout/sidebar/Sidebar";
import Button from "../components/Button";
import CustomIframe from "../components/CustomIframe";
import Modal from "../components/Modal";

export default function RelatoriosPage() {
  const [relatorios, setRelatorios] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Adiciona estado de carregamento
  const [error, setError] = useState(null); // Adiciona estado de erro

  const itemsPerPage = 7;

  useEffect(() => {
    const buscarRelatoriosDoNotion = async () => {
      try {
        const response = await fetch(
          "https://script.googleusercontent.com/macros/echo?user_content_key=uClfIGR0Glq_CqKs1IKEEBoKTm1UKgh9Z7yg00Nh_X2f6OK9oDydJpPW1U5FnvDfPX3feQ7jivc0FjDavx88wURrHy10MN6Em5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnGO5j4Tzo1SWe12vjH7rEtSb6fopJ0pPeOTJLT6OVFoDGRW2ocPYNEaRPlwp6PCD3a8435S0ssCsit5cgVXwwYX_rQcuLMqa5Q&lib=MjIGlqIOn2649YDm8fh2-LlfNaLzcBGAC" // Substitua pela URL do seu Apps Script
        );
        const data = await response.json();
        setRelatorios(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados do Notion:", error);
        setError(error);
        setIsLoading(false);
      }
    };

    buscarRelatoriosDoNotion();
  }, []);

  const toggleModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, relatorios.length);
    return relatorios.slice(startIndex, endIndex).map((el, index) => (
      <tr key={index} className="text-white font-bold text-[20px]">
        <td className="p-4">{el.name}</td> 
        <td className="p-4">{el.delivery_date}</td> 
        <td className="p-4">
          <span onClick={() => toggleModal(el)}>
            <Button text={"Acessar"} buttonType={"defaultButton"} />
          </span>
        </td>
      </tr>
    ));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages()));
  };

  const totalPages = () => Math.ceil(relatorios.length / itemsPerPage);

  return (
    <section className="flex h-[100vh]">
      <Sidebar currentAppPage={"/relatorios"} />
      <div className="w-[100%]">
        <h1 className="ml-10 mt-10 mb-5 text-[36px] text-[#545353] font-semibold">
          Relatórios
        </h1>
        <div className="bg-lilasClaro p-7 w-[95%] mx-10 mb-8 rounded-3xl relative">
          {isLoading ? (
            <p className="ml-100 mt-10 mb-5 text-[18px] text-[#545353] font-semibold">Carregando dados...</p> 
          ) : error ? (
            <p className="ml-100 mt-10 mb-5 text-[18px] text-[#545353] font-semibold">Erro ao carregar dados: {error.message}</p>
          ) : (
            <table className="w-[100%]">
              <thead>
                <tr className="text-left w-[100%] text-[16px] font-semibold text-[#545353]">
                  <th className="w-[80%]">TÍTULO</th>
                </tr>
              </thead>
              <tbody className="bg-[#867A9A] p-10 gap-6 rounded-3xl ">
                {renderItems()}
              </tbody>
            </table>
          )}
          {totalPages() > 1 && (
            <div className="bg-[#867A9A] pt-1 pb-1 gap-6">
              <div className="flex justify-end gap-10 p-2 mt-8 text-[20px] font-semibold text-white ">
                <span onClick={goToPreviousPage}>
                  <Button
                    text={"Anterior"}
                    buttonType={
                      currentPage !== 1 ? "listButton" : "disabledButton"
                    }
                  />
                </span>
                <span>
                  Página{" "}
                  <span className="bg-[#B868FF] p-2 rounded-2xl">
                    {currentPage}
                  </span>{" "}
                  de {totalPages()}
                </span>
                <span onClick={goToNextPage}>
                  <Button
                    text={"Próxima"}
                    buttonType={
                      currentPage !== totalPages()
                        ? "listButton"
                        : "disabledButton"
                    }
                  />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        content={
          <CustomIframe
            title={selectedItem.name} 
            url={selectedItem.link} 
            width={1920}
            height={1080}
          />
        }
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
}
