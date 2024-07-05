export default function Badge({ badgeType }) {
    return (
      <div className={`flex items-center gap-2`}>
        <span
          className={`rounded-full p-2 ${
            badgeType === "Normal" ? "bg-green-500" : "bg-black"
          }`}
        />
        <p
          className={`font-bold ${
            badgeType === "Normal" ? "text-green-500 " : "text-black"
          }`}
        >
          {badgeType}
        </p>
      </div>
    );
  }
  