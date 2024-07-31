import Image from "next/image";
import Link from "next/link";

export default function CaseSelect() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-20 relative">
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
      <div className="">
        <div className="flex flex-col gap-5 text-5xl font-semibold text-[#18063c] -mt-10">
          <span>
            Which <span className="text-[#5bc17f]">Case</span> Are
          </span>
          <span>You Interested In?</span>
        </div>
        <div className="mt-12 text-gray-500 text-center italic">
          <span>Click the case you want to explore more.</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 w-full">
        <div className="flex flex-row items-center w-[45%] justify-between">
          <Link href="/case/1">
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center w-36 h-24 bg-[#C06EF3] bg-opacity-20 rounded-[24px] p-4 shadow-lg">
                <span className="text-3xl font-bold">Case 1</span>
              </div>
              <span className="text-xs text-gray-500 mt-3 w-44 break-all">
                This is a case of selecting the right constipation medication
                depending on the patient&apos; age, coexisting diseases,
                pregnancy status, etc
              </span>
            </div>
          </Link>
          <Link href="">
            <div className="flex flex-col items-center -mt-20">
              <div className="flex items-center justify-center w-36 h-24 bg-[#FDBA09] bg-opacity-20 rounded-[24px] p-4 shadow-lg">
                <span className="text-3xl font-bold">Case 2</span>
              </div>
              <span className="text-xs text-gray-500 mt-3"></span>
            </div>
          </Link>
          <Link href="">
            <div className="flex flex-col items-center -mt-20">
              <div className="flex items-center justify-center w-36 h-24 bg-[#6DEDC3] bg-opacity-20 rounded-[24px] p-4 shadow-lg">
                <span className="text-3xl font-bold">Case 3</span>
              </div>
              <span className="text-xs text-gray-500 mt-3"></span>
            </div>
          </Link>
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
      </div>
    </div>
  );
}
