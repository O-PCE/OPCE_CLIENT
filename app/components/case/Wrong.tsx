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
          <span className="text-s whitespace-pre-line w-full text-center">
            { text }
          </span>
          <span className="font-bold"> <br /> Please try again!</span>
          <Image
            src="/wrong.png"
            alt="wrong"
            width={200}
            height={100}
            className="absolute left-[15%]"
          />
        </div>
        <button
          onClick={handleClick}
          className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
        >
          <span className="text-lg text-white">Try again</span>
        </button>
      </>
    )
}

export default Wrong;

