export default function SidebarInfoHome({ isOpen, toggleSidebar, title, content }) {

    return (
        <aside className={`fixed inset-0 flex justify-end bg-black/50 z-50 transition-all duration-[10000] ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} `}>
            <div className="bg-lilasClaro p-2 w-[600px] h-auto rounded-lg">
                <div className="text-left text-[#545353] mt-[75px] m-9">
                    <h2 className="text-[40px]">{title}</h2>
                    <p className="text-[24px]">{content}</p>
                </div>
                <img onClick={toggleSidebar} alt="Seta indicando a função de recolher a barra lateral." className="w-[40px] h-[60px] absolute right-10 bottom-10 cursor-pointer" src="../assets/Icons/seta.png"></img>
            </div>
        </aside >
    );
}
