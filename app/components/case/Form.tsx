import { SetStateAction } from "react";

interface FormProps {
    formData: string[];
    selectedItems: number[];
    handleSubmit: (event: React.FormEvent) => void;
    setSelectedItems: (value: SetStateAction<number[]>) => void;
}


function Form({ 
  formData,
  selectedItems,
  handleSubmit,
  setSelectedItems
}: FormProps) {

    const handleCheckbox = (idx: number) => {
        setSelectedItems((prev) => {
          if (prev.includes(idx)) {
            return prev.filter((i) => i !== idx);
          } else {
            return [...prev, idx];
          }
        });
      };

    return (
        <>
        <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mt-5 -mb-12">
          <span className="text-xl text-gray-500">
            Choose all the options which are correct.
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center gap-8 w-full"
        >
            <div className="flex flex-col justify-center bg-[#D8E4D8] w-[60%] opacity-90 shadow-lg rounded-lg px-8 p-8">
            {formData.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center gap-3 mb-2">
        
                    <span className="text-gray-600 text-sm">
                        { item } 
                    </span>
                
                    <label>
                    <input
                        type="checkbox"
                        checked={selectedItems.includes(idx)}
                        onChange={()=>handleCheckbox(idx)}
                    />
                    </label>
                </div>
            ))}
            </div>
            <button
                type="submit"
                className="bg-[#5BC17F] px-7 py-2 rounded-full"
                >
                <span className="text-white">Done</span>
            </button>
        </form>
      </>
    )
}

export default Form;

