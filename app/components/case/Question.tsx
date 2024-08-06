interface QuestionProps {
    text: string;
}

function Question({ 
  text,  
}: QuestionProps) {
    return (
        <div
          className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90]">
          <span className="text-xl text-gray-500 whitespace-pre-line">
            { text }
          </span>
        </div>
    )
}

export default Question;

