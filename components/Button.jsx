const Button = ({ children, onCLick }) => {
  return (
    <button
      onClick={onCLick}
      className="relative rounded-xl p-6 bg-slate-700 hover:border-2 hover:bg-black hover:text-white text-black sm:text-lg font-bold "
    >
      {children}
    </button>
  )
}

export default Button
