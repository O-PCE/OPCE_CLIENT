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
          <div className="flex flex-col items-center justify-center w-[60%] bg-white opacity-90 rounded-lg mt-24 p-6">
            <span className="font-bold">All correct!<br /> </span>
            
            <span className="text-s whitespace-pre-line w-full text-center">
              { text }
            </span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute left-[13%]"
            />
          </div>
          <button
            onClick={handleClick}
            className="w-60 h-10 bg-[#B4F3BE] rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">See the Result</span>
          </button>
        </>
    )
}

export default FormCorrect;

