import Link from "next/link";
import Image from "next/image";
import { FolderIcon } from "@heroicons/react/24/solid";

export default function OTCInfo() {
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
      <Link href="/" className="fixed left-10 top-10">
        <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
          <span className="text-white">Go Back to Main Page</span>
        </div>
      </Link>
      <div>
        <div className="flex flex-row items-center gap-2 mt-8 w-[50vw]">
          <span className="text-5xl font-semibold text-[#18063c]">
            OTC Information
          </span>
          <Link href="/case-select" className="ml-10 mt-2">
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
      <div className="flex flex-row items-center w-[75%] justify-between mt-14">
        <div className="flex flex-col items-center">
          <Image
            src="/product-A.png"
            alt="product-A"
            width={150}
            height={100}
          />
          <div className="mt-8 flex flex-col text-gray-600">
            <span className="font-semibold text-lg mb-2">Product A</span>
            <span className="mb-1">
              <span className="font-bold">&middot; </span>
              Ingredient: Lactulose Concentrate 1.34g/ml
            </span>
            <span>
              <span className="font-bold">&middot; </span>
              Formulation: Syrup(15mL per stick)
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/product-B.png"
            alt="product-B"
            width={150}
            height={100}
          />
          <div className="mt-8 flex flex-col text-gray-600">
            <span className="font-semibold text-lg mb-2">Product B</span>
            <span className="mb-1">
              <span className="font-bold">&middot; </span>
              Ingredient: Bisacodyl 5mg, Docusate Sodium 16.75mg
            </span>
            <span>
              <span className="font-bold">&middot; </span>
              Formulation: Enteric-coated tablets
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/product-C.png"
            alt="product-C"
            width={150}
            height={100}
          />
          <div className="mt-8 flex flex-col text-gray-600">
            <span className="font-semibold text-lg mb-2">Product C</span>
            <span className="mb-1">
              <span className="font-bold">&middot; </span>
              Ingredient: Psyllium Husk 3.25g/stick
            </span>
            <span>
              <span className="font-bold">&middot; </span>
              Formulation: Powder
            </span>
          </div>
        </div>
      </div>
      <div className="fixed left-3 bottom-56">
        <Image
          src="/pce-logo.png"
          alt="pce-logo"
          width={295}
          height={100}
          className="fixed left-0"
        />
        <span className="text-gray-500 fixed left-64 bottom-16">
          O-PCE is created in collaboration with{" "}
          <span className="font-bold">Daewon Pharmaceutical</span>.
        </span>
      </div>
    </div>
  );
}
