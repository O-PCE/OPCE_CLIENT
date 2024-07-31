interface ButtonProps {
    text: string;
    handleClick: () => void;
}

function Button({ 
  text,
  handleClick,  
}: ButtonProps) {
    return (
        <button
          onClick={handleClick}
          className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-24 shadow-lg rounded-lg"
        >
          <span className="text-gray-600 text-lg">
            {/* Ask why the patient visited the pharmacy. */}
            { text }
          </span>
        </button>
    )
}

export default Button;
