const CustomCard = ({ children }) => {
    return (
      <div className="bg-primary text-zinc-800 border border-gray-700 rounded-xl p-6 shadow-lg">
        {children}
      </div>
    );
  };

export default CustomCard;