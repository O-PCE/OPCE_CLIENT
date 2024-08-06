import Image from "next/image";

export interface ProductProps{
    src: string;
    alt: string;
    name: string;
    ingredient: string;
    formulation: string;
}

function Product({
    src,
    alt,
    name,
    ingredient,
    formulation
}: ProductProps){
    return (
        <div className="flex flex-col items-center p-5">
          <Image
            src={ src }
            alt={ alt }
            width={150}
            height={100}
          />
          <div className="mt-2 flex flex-col text-gray-600 text-xs">
            <span className="font-bold text-lg mb-2">{ name }</span>
            <span className="mb-1">
              <span className="font-semibold">&middot; Ingredient: </span>
              <span className="whitespace-pre-line">
                {ingredient}
              </span>
            </span>
            <span>
              <span className="font-semibold">&middot; Formulation: </span>
              { formulation }
            </span>
          </div>
        </div>
    )
}

export default Product;