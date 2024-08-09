import Image from "next/image";


function Footer(){
    return (
    <div className="fixed left-[-10px] bottom-[10px] flex flex-row items-center">
        <div className="relative w-[250px] h-[100px] overflow-hidden">
            <Image
                src="/pce-logo.png"
                alt="pce-logo"
                layout="fill"
                objectFit="cover"  // This will crop the image to fit the container
                objectPosition="center"  // This centers the image within the container
            />
        </div>
           
        <span className="text-gray-500 ml-[-30px]">
            O-PCE is created in collaboration with{" "}
            <span className="font-bold">Daewon Pharmaceutical</span>.
        </span>
    </div>
    );
}

export default Footer;


    
      