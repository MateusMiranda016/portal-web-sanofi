import React, { useState, useEffect } from "react";
import Sidebar from "../layout/sidebar/Sidebar";
import InlineStyleButton from "../components/InlineStyleButton";
import Button from "../components/Button";

// Estilos CSS para o filtro 
const filterStyles = {
  position: "absolute",
  top: "10px", 
  right: "40px", 
  display: "flex",
  alignItems: "center",
};

export default function Status() {
  const [homeList, setHomeList] = useState([]);
  const [filteredHomeList, setFilteredHomeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("Todas");

  useEffect(() => {
    const url = 'https://script.googleusercontent.com/macros/echo?user_content_key=7aIOGr1YAcakKxTkEcgP872v97gw7DutaF1ELDma3BRWJvcWOrMCiMYFGrpLbyNIp_nd0KMH66hc3blLs3XhTml5n_eoT_MBm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBGXD1dAmjacH57W5U23pcsFZXaT0SeUdm52-9pzyPavX28GsJWen9fzc9bKV-2XoNh5aXXmnAw7KsOve2RE0SdNkRBltMu9aNz9Jw9Md8uu&lib=MuYoOpZLzS9Pdz8doHj9j2PbN-ZPZ-_08';

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        // console.log("Dados recebidos:", data);
        setHomeList(data);
        setFilteredHomeList(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar ou analisar dados:", error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);

    const filtered =
      event.target.value === "Todas"
        ? homeList
        : homeList.filter((item) => item.brand === event.target.value);
    setFilteredHomeList(filtered);
  };

  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredHomeList.length / itemsPerPage);

  const renderItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, filteredHomeList.length);
    return (
      <>
        {filteredHomeList.slice(startIndex, endIndex).map((el, index) => (
          <tr key={index} className="text-white font-bold text-[20px]">
            <td className="p-4">{el.name}</td>
            <td className="p-4">
              <InlineStyleButton status={el.status} />
            </td>
            <td className="p-4">{el.objectives}</td>
            <td className="p-4">{el.brand}</td>
          </tr>
        ))}
      </>
    );
  };

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  // Crie um conjunto (Set) para armazenar as marcas únicas
  const uniqueBrands = new Set(homeList.map((item) => item.brand));

  return (
    <section className="flex h-[100%]">
      <Sidebar currentAppPage={"/status"} />
      <div className="w-[100%] relative"> 
        <h1 className="ml-10 mt-10 mb-5 text-[36px] text-[#545353] font-semibold">
          Status de Dashboards
        </h1>
        <div style={filterStyles}><span className="ml-100 mt-10 mb-5 text-[18px] text-[#545353] font-semibold">Filtrar:</span><select
              id="brandFilter"
              value={selectedBrand}
              onChange={handleBrandChange}
              className="ml-10 mt-10 mb-5 bg-[#867A9A] p-1 text-white rounded-md" 
            >
              <option value="Todas">Todas</option>
              {[...uniqueBrands].map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select></div>
        <div className="bg-lilasClaro p-9 w-[95%] ml-10 mb-10 rounded-3xl relative">

          {/* Sua tabela */}
          {isLoading ? (
            <p className="ml-100 mt-10 mb-5 text-[18px] text-[#545353] font-semibold">Carregando dados...</p>
          ) : error ? (
            <p className="ml-100 mt-10 mb-5 text-[18px] text-[#545353] font-semibold">Erro ao carregar dados: {error.message}</p>
          ) : (
            <table className="w-[100%]">
              <thead>
                <tr className="text-left md:text-center w-[100%] text-[16px] font-semibold text-[#545353] w-1/2">
                  <th className="w-[50%]">DASHBOARD</th>
                  <th className="w-[25%]">STATUS</th>
                  <th className="w-[15%]">OBJETIVOS</th>
                  <th className="w-[15%]">MARCA</th>
                </tr>
              </thead>
              <tbody className="bg-[#867A9A] p-10 gap-6 rounded-3xl">
                {renderItems()}
              </tbody>
              <tfoot className="bg-[#867A9A] p-10 gap-6 rounded-3xl">
                <tr>
                  <td colSpan="6">
                    <div className="flex justify-end gap-10 mt-8 p-2 text-[20px] font-semibold text-white">
                      {totalPages > 1 && (
                        <>
                          <span onClick={goToPreviousPage}>
                            {currentPage !== 1 && (
                              <Button
                                text={"Anterior"}
                                buttonType={
                                  currentPage !== 1
                                    ? "listButton"
                                    : "disabledButton"
                                }
                              />
                            )}
                          </span>
                          <span>
                            Página{" "}
                            <span className="bg-[#B868FF] p-2 rounded-2xl">
                              {currentPage}
                            </span>{" "}
                            de {totalPages}
                          </span>
                          <span onClick={goToNextPage}>
                            <Button
                              text={"Próxima"}
                              buttonType={
                                currentPage !== totalPages
                                  ? "listButton"
                                  : "disabledButton"
                                }
                              />
                          </span>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          )}
        </div> 
      </div>
    </section>
  );
}