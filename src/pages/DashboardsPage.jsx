import React, { useState } from "react";
import CustomIframe from "../components/CustomIframe";
import CardHeader from "../components/card/CardHeader";
import Sidebar from "../layout/sidebar/Sidebar";
import Button from "../components/Button"
import { dashboardsIframes } from "../models/DashboardsModel";
import Badge from "../components/Badge";

export default function Dashboards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIframe, setSelectedIframe] = useState(null);

  const toggleModal = (iframe) => {
    setSelectedIframe(iframe);
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="flex h-[100%]">
      <Sidebar currentAppPage={"/dashboards"} />
      <div className="bg-lilasClaro p-9 w-[100%] my-10 mx-10 rounded-3xl">
        <CardHeader />
        <div className="bg-[#867A9A] relative rounded-2xl p-[15px] flex flex-wrap gap-6">
          <div className="bg-white w-[100%] m-[24px] rounded-xl">
            <img
              className="m-auto w-[200px] absolute top-0 right-10"
              src="../assets/Images/LogoMediaMonks.png"
              alt="Logo da Media.Monks"
            />
            <img
              className="m-auto my-10"
              src="../assets/Images/LogoSanofi.png"
              alt="Logo da Sanofi"
            />
            <span className="bg-[#ca1fc6] p-[3px] rounded-md text-center m-auto w-[90%] mb-6 block"></span>
            <div className="flex flex-wrap justify-center gap-5 mx-10 border-[3px] px-5 rounded-lg pb-10 mb-10 border-[#ddb6e5]">
              {dashboardsIframes.map(el => {
                return (
                  <div>
                    <div className="mb-3">
                      <CustomIframe
                        title={el.title}
                        url={el.background}
                        width={el.width}
                        height={el.height}
                      />
                    </div>
                    <div className="flex justify-between">
                      <span onClick={() => toggleModal(el)}>
                        <Button text={"Ampliar"} buttonType={'listButton'}/>
                      </span>
                      <Badge badgeType={"Normal"}/>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="relative p-8 bg-white w-[90%] h-[90%] mx-auto rounded-lg">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-0 right-0 m-4 text-lg text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              Fechar
            </button>
            <div
              className="overflow-hidden rounded-lg w-[100%] h-[100%]"

            >
              <CustomIframe
                title={selectedIframe.title}
                url={selectedIframe.url}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
