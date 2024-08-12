import Image from 'next/image';
import Link from 'next/link';

function Success() {
    return (
        <>
        <div className="fixed w-full h-screen bg-white opacity-50 -z-10" />
        <div className="flex flex-col gap-5 items-center justify-center w-full">
          <div className="flex flex-col gap-5 w-1/2">
            <span className="text-5xl font-bold text-[#18063C]">
              Congratulation!
            </span>
            <span className="text-3xl font-semibold text-[#18063C]">
              You successfully finished the patient counseling.
            </span>
          </div>
          <Image
            src="/success.png"
            alt="success"
            width={200}
            height={100}
            className="mt-8"
          />
          <Link href="/" className="mt-10">
            <div className="bg-[#5BC17F] rounded-full shadow-xl px-8 py-2">
              <span className="text-white">Go to Select Another Case</span>
            </div>
          </Link>
        </div>
      </>
    )
}

export default Success;
