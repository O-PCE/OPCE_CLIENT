import Image from "next/image";

const gradientStyle = {
  background: 'linear-gradient(180deg, #00A700 0%, #004100 100%)'
};

interface FormCorrectProps {
    text: string;
    handleClick: () => void;
}

function FormCorrect({ 
  text,
  handleClick  
}: FormCorrectProps) {
    return (
      <>
      <div className="fixed w-full h-screen opacity-30 -z-10" style={gradientStyle}/>
      <div className="flex items-center justify-center rounded-md w-[75%] p-2 bg-white opacity-90 -mt-50">
        <span className="text-xl text-gray-500">
          You are all correct! Right patient consult was…
        </span>
      </div>
      <div className="flex flex-col justify-center w-[75%] h-[60vh] bg-white opacity-90 rounded-lg -mt-14 pl-14 ">
        <span className="whitespace-pre-line p-10 leading-relaxed">
          { text }
        </span>
        
      </div>
      <Image
          src="/correct.png"
          alt="correct"
          width={200}
          height={100}
          className="absolute top-[2%] left-[8%]"
        />
      <button
        onClick={handleClick}
        className="w-60 h-10 bg-[#5BC17F] rounded-full shadow-lg -mt-8"
      >
        <span className="text-lg text-white">Go to See the Result</span>
      </button>
    </>
    )
}

export default FormCorrect;

