import Link from "next/link";
import Image from "next/image";
import { FolderIcon } from "@heroicons/react/24/solid";
import styles from '../../styles.module.css'

interface TeamProps {
    name: string;
    authors: string;
    description: string;
    link: string;
}

function Team({ 
    name, 
    authors,
    description,
    link
}: TeamProps) {
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
        <div className="flex flex-col gap-2 text-5xl font-semibold text-[#18063c] mt-16 w-[50vw]">
          <span>{ name }</span>
        </div>
        <div className="flex flex-col gap-2 mt-14 text-sm text-gray-500">
          <span>
            <span className="font-bold">&middot; Authors</span> 
            : { authors }
          </span>
          {/* <p className="mb-2">
            <span className="font-bold">&middot; Case Description</span>: {description}
          </p> */}
          <span>
            <span className="font-bold">&middot; Case Description</span>
            <span className="whitespace-pre-line">
            : {description}</span>
            
          </span>
          
          {/* Spacing the elements */}
          <span className={styles.spacing}>
          </span> 
          
          <span>
            <span className="font-bold">&middot; </span>
            This is an interactive website meant to be used for
            <span className="font-bold"> educational purposes only.</span> 
            This case was written by the authors above.
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 w-full mt-7">
        <Link href={link}>
          <div className="flex flex-col items-center">
            <FolderIcon className="text-[#d4d4d4] w-36" />
            <div className="bg-yellow-300 rounded-full px-12 py-2 shadow-lg mt-2">
              <span className="font-semibold text-white">Get Started</span>
            </div>
          </div>
        </Link>
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
    )
}

export default Team;
