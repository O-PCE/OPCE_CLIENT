import Link from "next/link";
import Image from "next/image";
import Product, { ProductProps } from './Product';
import Footer from "../global/Footer";

const getPrevLink = (link: string) => {
  const segments = link.split('/');
  segments.pop(); // Remove the last segment
  return segments.join('/');
};


interface InfoProps {
    products: ProductProps[];
    link: string;
}

function Info({ 
    products,
    link,
}: InfoProps) {
    return (
        <div className="flex flex-col items-center min-h-screen px-6 pt-20 relative">
      <Image
        src="/home-background.png"
        alt="home-background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="opacity-10 -z-10"
      />
      <Link href={getPrevLink(link)} className="fixed left-10 top-10">
        <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
          <span className="text-white">Go Back to Main Page</span>
        </div>
      </Link>
      <div>
        <div className="flex flex-row items-center gap-2 w-[50vw]">
          <span className="text-5xl font-semibold text-[#18063c]">
            OTC Information
          </span>
          <Link href={link} className="ml-10 mt-2">
            <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
              <span className="text-white">Next &rarr;</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-col gap-2 mt-10 text-sm text-gray-500">
          <span>
            The OTC Products below are virtual products set up to create
            platform.
          </span>
          <span>
            Participants must use Daewon Pharmaceutical’s products in OTC list.
          </span>
        </div>
      </div>


      {/* 각 약품을 for 문으로 */}
      <div className="flex flex-row w-[75%] justify-between mt-5">
        {products.map((product, index) => (
          <Product
            key={index}
            src={product.src}
            alt={product.alt}
            name={product.name}
            ingredient={product.ingredient}
            formulation={product.formulation}
          />
        ))}
      </div>

      <Footer/>


    </div>
    )
}

export default Info;
