import Image from "next/image";

interface WrongProps {
    text: string;
    handleClick: () => void;
}

function Wrong({ 
  text,
  handleClick  
}: WrongProps) {
    return (
      <>
        <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
        <div className="flex flex-col items-center justify-center w-[60%] bg-white opacity-90 rounded-lg mt-24 p-6">
          <span className="font-bold">Please try again!</span>
          <span className="text-s whitespace-pre-line w-full text-center">
            <br />
            { text }
          </span>
          <Image
            src="/wrong.png"
            alt="wrong"
            width={200}
            height={100}
            className="absolute left-[15%]"
          />
        </div>
        <button onClick={handleClick}
          className="bg-[#F79F9F] rounded-full shadow-lg mt-6 w-60 h-10 flex items-center justify-center">
          <span className="text-lg text-white">Try again</span>
        </button>
      </>
    )
}

export default Wrong;

