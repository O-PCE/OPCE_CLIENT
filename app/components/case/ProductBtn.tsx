import Image from "next/image";
import Product from "../otcinfo/Product";

export interface ProductBtnProps{
    src: string;
    alt: string;
    name: string;
    ingredient: string;
    formulation: string;
    handleClick: () => void;
}

function ProductBtn({
    src,
    alt,
    name,
    ingredient,
    formulation,
    handleClick
}: ProductBtnProps){
    return (
        <button onClick={handleClick} className="flex flex-col items-center">
            <div className="bg-white px-8 py-4 rounded-lg">
                <Product 
                src ={ src } 
                alt = { alt } 
                name = { name } 
                ingredient= { ingredient }
                formulation= { formulation } 
                />
            </div>
            {/* <div className="bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">

            </div>
            <div className="mt-8 flex flex-col text-gray-600 ">
                <span className="font-semibold text-lg mb-2">Product A</span>
                <span className="mb-1">
                    <span className="font-bold">&middot; </span>
                    Ingredient: Lactulose Concentrate 1.34g/ml
                </span>
                <span>
                    <span className="font-bold">&middot; </span>
                    Formulation: Syrup(15mL per stick)
                </span>
            </div> */}
        </button>

    )
}

export default ProductBtn;