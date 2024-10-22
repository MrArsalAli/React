function Button({ text, type, onClick, disabled }) {
  return (
    <>

    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className="text-white mx-auto bg-emerald-400 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-none text-sm block w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      {text}
    </button>
    </>
  );
}

export default Button;
