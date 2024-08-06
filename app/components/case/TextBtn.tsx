interface TextBtnProps {
    text: string;
    handleClick: () => void;
}

const gradientStyle = {
  background: 'linear-gradient(1.28deg, #FFFFFF 1.09%, #D8E4D8 98.91%)',
};

function TextBtn({ 
  text,
  handleClick,  
}: TextBtnProps) {
    return (
        <button
          onClick={handleClick}
          className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-24 shadow-lg rounded-lg"
          style={gradientStyle}
        >
          <span className="text-gray-600 text-lg whitespace-pre-line">
            { text }
          </span>
        </button>
    )
}

export default TextBtn;
