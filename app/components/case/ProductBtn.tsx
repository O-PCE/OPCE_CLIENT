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
            <div className="flex flex-col min-h-[400px] bg-white px-4 py-4 rounded-lg shadow-lg mt-2">
                <Product 
                src ={ src } 
                alt = { alt } 
                name = { name } 
                ingredient= { ingredient }
                formulation= { formulation } 
                />
            </div>
        </button>

    )
}

export default ProductBtn;