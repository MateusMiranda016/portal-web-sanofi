import { useEffect } from "react";

export default function Modal({ isOpen, content, onClose }) {
  const toggleModal = () => {
    onClose();
  };

  useEffect(() => {
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="relative p-8 bg-white w-[90%] h-[90%] mx-auto rounded-lg">
            <button
              onClick={toggleModal}
              className="absolute top-0 right-0 m-4 text-lg text-gray-500 hover:text-gray-800 focus:outline-none"
            >
              Fechar
            </button>
            <div className="overflow-hidden rounded-lg w-[100%] h-[100%]">
              {content}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
