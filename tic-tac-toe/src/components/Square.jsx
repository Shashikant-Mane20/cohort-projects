const Square = ({ value, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="
        w-24 h-24
        sm:w-28 sm:h-28
        bg-slate-800
        border-2 border-slate-600
        text-4xl font-bold
        text-white
        rounded-xl
        hover:bg-slate-700
        transition-all duration-200
        shadow-lg
      "
    >
      {value}
    </button>
  )
}

export default Square