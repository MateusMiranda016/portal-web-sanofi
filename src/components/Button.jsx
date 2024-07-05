export default function Button({ text, buttonType }) {
    return (
      <>
        {buttonType === "defaultButton" && (
          <button className="w-[100%] font-sans font-bold text-[26px] text-white bg-[#B868FF] p-2 rounded-lg shadow-xl drop-shadow-lg">
            {text}
          </button>
        )}
        {buttonType === "listButton" && (
          <button className="w-[100px] font-sans font-bold text-[14px] text-white bg-[#B868FF] p-1 rounded-lg shadow-xl drop-shadow-lg">
            {text}
          </button>
        )}
        {buttonType === "disabledButton" && (
          <button className="w-[100px] font-sans font-bold text-[14px] text-white bg-[#DFD1F0] p-1 rounded-lg shadow-xl drop-shadow-lg">
            {text}
          </button>
        )}
        {buttonType === "availableBtn" && (
          <button className="w-[100%] cursor-default font-sans font-bold text-[14px] text-white bg-[#028737] py-[6px] px-[20px] rounded-[50px] shadow-xl drop-shadow-lg">
            Disponível
          </button>
        )}
        {buttonType === "onMaintenanceBtn" && (
          <button className="w-[100%] cursor-default font-sans font-bold text-[14px] text-white bg-[#6F0007] py-[6px] px-[20px] rounded-[50px] shadow-xl drop-shadow-lg">
            Em Manutenção
          </button>
        )}
        {buttonType === "inProductionBtn" && (
          <button className="w-[100%] cursor-default font-sans font-bold text-[14px] text-white bg-[#004AA1] py-[6px] px-[20px] rounded-[50px] shadow-xl drop-shadow-lg">
            Em Produção
          </button>
        )}
      </>
    );
  }