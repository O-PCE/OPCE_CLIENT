import Link from "next/link";
import Image from "next/image";
import { FolderIcon } from "@heroicons/react/24/solid";

export default function Home() {
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
      <div>
        <div className="flex flex-col gap-2 text-5xl font-semibold text-[#18063c]">
          <span className="">
            Welcome To <span className="text-[#5bc17f]">O-PCE.</span>
          </span>
          <span>Are You Ready To Learn</span>
          <span>Patient Counseling of OTC Drugs?</span>
        </div>
        <div className="text-center italic mt-12 text-gray-500">
          <span>Click the team you want to explore.</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 w-full mt-16">
        <div className="flex flex-row items-center w-1/2 justify-between">
          <Link href="/team/1">
            <div className="flex flex-col items-center">
              <FolderIcon className="text-[#ffd233] w-24" />
              <span className="font-semibold">Example Team</span>
            </div>
          </Link>
          <Link href="/team/2">
            <div className="flex flex-col items-center">
              <FolderIcon className="text-[#ff9a62] w-24" />
              <span className="font-semibold">My Local</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-col items-center">
              <FolderIcon className="text-[#e4a951] w-24" />
              <span className="font-semibold">_</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-row items-center w-1/2 justify-between">
          <Link href="/">
            <div className="flex flex-col items-center">
              <FolderIcon className="text-[#4ecb71] w-24" />
              <span className="font-semibold">_</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-col items-center">
              <FolderIcon className="text-[#85b6ff] w-24" />
              <span className="font-semibold">_</span>
            </div>
          </Link>
          <Link href="/">
            <div className="flex flex-col items-center">
              <FolderIcon className="text-[#d99bff] w-24" />
              <span className="font-semibold">_</span>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-center mr-auto">
        <Image
          src="/pce-logo.png"
          alt="pce-logo"
          width={295}
          height={100}
          className="-mt-14 -ml-6"
        />
        <span className="mt-20 -ml-10 text-gray-500">
          O-PCE is created in collaboration with{" "}
          <span className="font-bold">Daewon Pharmaceutical</span>.
        </span>
      </div>
    </div>
  );
}
