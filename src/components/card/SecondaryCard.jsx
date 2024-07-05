import { useState } from "react";
import Button from "../Button";
import SidebarInfoHome from "../sidebarInfoHome/SidebarInfoHome";

export default function SecondaryCard({
  hasListTitle,
  hasTitle,
  dataList,
}) {
  const [selectedItem, setSelectedItem] = useState(null);

  const selectElement = (item) => {
    setSelectedItem(item);
  };

  const clearSelectedItem = () => {
    setSelectedItem(null);
  };

  return (
    <section className="text-white text-[20px] font-semibold mt-[64px] relative">
      {hasListTitle === true && (
        <>
          <ul className="flex justify-between mr-[21%]">
            {dataList !== undefined && (
              <li className="text-16 text-black font-semibold ">
                {dataList[0].title}
              </li>
            )}
            {dataList !== undefined && (
              <li className="text-16 text-black font-semibold ">
                {dataList[1].title}
              </li>
            )}
          </ul>
          <div className="my-[10px] border-t-2 border-[#8B8B8B]"></div>
        </>
      )}
      <div className="bg-[#867A9A] rounded-2xl m p-[10px] flex flex-col gap-4">
        {hasTitle === true && (
          <div className="flex gap-2 items-center">
            <img src="../assets/Images/InfoIconWhite.png" alt="Ícone representando as últimas novidades" />
            <h2>Últimas Novidades</h2>
          </div>
        )}
        {dataList !== undefined &&
          dataList.map((el, index) => {
            return (
              <div key={index}>
                <ul className="flex justify-between align-center text-center relative">
                  <li>{el.description}</li>
                  <li className="absolute right-[15%]">{el.date}</li>
                  <li onClick={() => selectElement(el)}>
                    <Button text={"Acessar"} buttonType={el.buttonType} />
                  </li>
                </ul>
                {selectedItem === el && (
                  <SidebarInfoHome
                    isOpen={true}
                    toggleSidebar={clearSelectedItem}
                    title={el.title}
                    content={el.content}
                  />
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
}
