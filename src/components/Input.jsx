export default function Input({ id, type, placeholder }) {
    return (
        <input className="bg-[#F4EBF8] rounded-xl p-2 drop-shadow-xl text-[#757575] text-[24px] placeholder:text-[#757575]" id={id} type={type} placeholder={placeholder}></input>
    )
}