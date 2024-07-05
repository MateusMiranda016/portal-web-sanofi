export default function Label({ htmlfor, text }) {
    return (
        <label className="font-bold text-[32px]" htmlFor={htmlfor}>{text}</label>
    )
}