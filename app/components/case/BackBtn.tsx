import Link from "next/link";

interface BackBtnProps {
    handleClick: () => void;
}

function BackBtn({ 
    handleClick 
}: BackBtnProps) {
    return (
        <button onClick={handleClick} className="fixed left-10 top-10">
            <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
            <span className="text-white">Go Back</span>
            </div>
        </button>
    )
}

export default BackBtn;
