import Image from "next/image";
import ProductBtn from "./ProductBtn";
import TEAM_5_PROUDCT from "@/app/constants/5/productData";

interface PatientProp {
 // text: string;
    handleClick: () => void;
}

function Patient({ 
  handleClick  
}: PatientProp) {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PROUDCT.map((product, index) => (
            <div className="shadow-lg opacity-90">
   
              <ProductBtn 
                src={product.src}
                alt={product.alt}
                name={product.name}
                ingredient={product.ingredient}
                formulation={product.formulation}
                handleClick={() => handleClick()}
              />
              </div>
            ))}
     
          </div>
        </div>
        </>
      )
}

export default Patient;

