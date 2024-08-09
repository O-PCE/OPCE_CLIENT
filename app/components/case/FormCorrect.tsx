import Image from "next/image";

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
      <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
      <div className="flex items-center justify-center rounded-md w-[75%] p-3 bg-white opacity-90">
        <span className="text-xl text-gray-500">
          You are all correct! Right patient consult was…
        </span>
      </div>
      <div className="flex flex-col justify-center w-[75%] p-5 bg-white opacity-90 rounded-lg -mt-14 pl-14 gap-2">
        <span className="whitespace-pre-line p-5">
          { text }
        </span>
        <Image
          src="/correct.png"
          alt="correct"
          width={200}
          height={100}
          className="absolute top-[3%] left-[7%]"
        />
      </div>
      <button
        onClick={handleClick}
        className="w-60 h-10 bg-gray-300 rounded-full shadow-lg -mt-8"
      >
        <span className="text-lg text-white">Go to See the Result</span>
      </button>
    </>
    )
}

export default FormCorrect;

