import Link from "next/link";
import Image from "next/image";
import { FolderIcon } from "@heroicons/react/24/solid";
import Footer from "./components/global/Footer";
import Folder from "@/app/components/Folder";

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
      <div className="-mt-5">
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
      <div className="flex flex-col items-center gap-10 w-full mt-10">
        <div className="flex flex-row items-center gap-20 ">
          <Folder link={"/team/1"} css = {"text-[#ffd233] w-24"} name = {"Team KT"}/>
          <Folder link={"/team/2"} css = {"text-[#ff9a62] w-24"} name = {"SGPharmers"}/>
          <Folder link={"/team/3"} css = {"text-[#e4a951] w-24"} name = {"BigBang"}/>
        </div>
        <div className="flex flex-row items-center gap-20">
          <Folder link={"/team/4"} css = {"text-[#4ecb71] w-24"} name = {"Almond Team"}/>
          <Folder link={"/team/5"} css = {"text-[#85b6ff] w-24"} name = {"WCIH"}/>
          <Folder link={"/team/6"} css = {"text-[#d99bff] w-24"} name = {"Munich Maestros"}/>
        </div>
      </div>

      <Footer />

    </div>
  );
}
