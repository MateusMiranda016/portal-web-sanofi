import CardHeader from "./CardHeader";

export default function MainCard({ hasHeader, title, element, secondElement }) {
    return (
        <section className="bg-lilasClaro p-9 w-[100%] mx-10 my-10 rounded-3xl">
            {hasHeader === true && <CardHeader />}
            <h2 className="text-[32px] mb-[40px] font-bold">{title}</h2>
            {element}
            {secondElement}
        </section>
    )
}