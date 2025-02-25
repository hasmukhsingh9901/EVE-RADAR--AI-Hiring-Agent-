const CustomButton = ({ children }) => {
  return (
    <button className="bg-primary mt-4  font-ubuntuCondensed font-bold text-lg px-6 py-3 rounded-xl transition duration-300 text-zinc-700">
      {children}
    </button>
  );
};

export default CustomButton;
