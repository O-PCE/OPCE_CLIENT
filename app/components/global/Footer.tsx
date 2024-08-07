import Image from "next/image";


function Footer(){
    return (
    <div className="fixed left-[-20px] bottom-[-70px] flex flex-row items-center">
        <Image
            src="/pce-logo.png"
            alt="pce-logo"
            width={300}
            height={300}
            className="w-auto"  /* Ensure the image scales appropriately */
        />
        <span className="text-gray-500 ml-[-30px]">
            O-PCE is created in collaboration with{" "}
            <span className="font-bold">Daewon Pharmaceutical</span>.
        </span>
    </div>
    );
}

export default Footer;


    
      