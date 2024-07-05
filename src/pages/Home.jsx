import MainCard from "../components/card/MainCard";
import SecondaryCard from "../components/card/SecondaryCard";
import Sidebar from "../layout/sidebar/Sidebar";
import React, { useEffect, useState } from 'react';

export default function Home() {
  const url = 'https://script.googleusercontent.com/a/macros/mediamonks.com/echo?user_content_key=TNooNAUI8YPqWQSSse3eOYBHP87fdVxYHE21Xeo0_UP5C5NiPMA-R3SEHUWotrnTZ3sWT6UbxFngMQnmkhcVoTV8Bdq2Ghu5OJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBAuzcrGt-rN8AyoApjNwUbaAD8aA7uc1cof5qobqLe-C_Yu8zD3D4oPhgPqnkctqyPVV6pZ7V9XSgQarJ8pi-OA3dS2P_3Efbl71oX_BdRvp_ecD4cl-zwU3Ff_Iozbvzc_ScPTHfLrg&lib=M0lBhskQmmRvazBs2qkx170nwysBi2UA3';
  const url2 = 'https://script.googleusercontent.com/a/macros/mediamonks.com/echo?user_content_key=9-mV3eIb3xp4kCyXk7RZOxfjggyAtubVYiVTPH65aGSFBwhc3jEUDaZd_roJf9B2zbjs_OJFmYKjhZM6n9ois8CZIuLDkwwjOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMi80zadyHLKBAuzcrGt-rN8AyoApjNwUbaAD8aA7uc1dTsar385fRfJfHtaTPQENJn7F_CU1m4df3q779VMm1VZBcXgyx_e8ubL2e2c-cS-X01uiDiTF1QS2NMqEExWtoVSvzcOiehZMYZpTak_o22Q&lib=M051L-KVthwJfC_DHD1fyxkXrqE3RJ8R4'
  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url2);
        const responseData = await response.json();
        setData2(responseData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="flex h-[100vh]"> 
      <Sidebar currentAppPage={"/home"} className="w-64" /> {/* Definindo a largura da sidebar */}
      <div className="flex flex-col w-full mr-16"> 
        <MainCard
          hasHeader={true}
          title={"Novidades!"}
          element={
            data2 ? (
              <SecondaryCard
                hasTitle={true}
                hasListTitle={false}
                dataList={data2} />
            ) : (
              <p className="ml-100 mt-10 mb-5 text-[18px] text-[#545353] font-semibold">Carregando dados...</p>
            )
          }
          secondElement={
            data ? (
              <SecondaryCard hasListTitle={true} dataList={data} />
            ) : (
              <p className="ml-100 mt-10 mb-5 text-[18px] text-[#545353] font-semibold"></p>
            )
          }
        />
      </div>
    </section>
  );
}
