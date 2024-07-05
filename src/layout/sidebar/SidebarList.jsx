import { Link } from "react-router-dom";

export default function SidebarItemList({ iconPath, text, redirectPage, currentPage }) {
    return (
        <li>
            <Link to={redirectPage} className="flex gap-[24px] items-center transition-all hover:drop-shadow-xl hover:scale-110">
                {currentPage === redirectPage && <span className="bg-purple-400 w-[10px] h-[30px] rounded-xl" />}
                <img className="w-[24px] h-[24px]" src={iconPath} alt="Ícone representando a página descrita ao lado" />
                <span className="text-[24px]">{text}</span>
            </Link>
        </li>
    )
}