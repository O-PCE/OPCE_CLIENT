"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextBtn, Question, ProductBtn, Footer } from '../../../components';
import TEAM_5_PROUDCT from "@/app/constants/5/productData";
import TEAM_5_PATIENT from "@/app/constants/5/PatientData";
import BackBtn from "@/app/components/case/BackBtn";
import Correct from "@/app/components/case/Correct";
import Wrong from "@/app/components/case/Wrong";
import Patient from "@/app/components/case/Patient";


export default function Case1() {

  const array = new Array(46).fill(false);
  const newArray = [true, ...array];
  const [flags, setFlags] = useState(newArray);

  // Example function to update a specific flag
  const setFlag = (index: number, value: boolean) => {
    setFlags(prevFlags => {
      const newFlags = [...prevFlags];
      newFlags[index] = value;
      return newFlags;
    });
  };

  interface Script {
    question: string;
    answer: string;
  }

  const script: Script[] = [
    {
      question: "Me(pharmacist): Hi, how are you? How can I help you?",
      answer: 
        "Patient: I came to get some cold medicine."
    },
   // {
   //   question: "Me(pharmacist): Okay, who will be taking the medicine?",
   //   answer:"Patient: Me and I am 34 years old."
    
   // }
  ]

  const patientChooseResult = [

      "My daughter, and she's 4 years old.\n"+
      "She has a bad cough and sore throat."
    ,
      "My father, and he's 68 years old with a history of high blood pressure and diabetes.\n"+
      "He has severe nasal congestion and headache."
    ,  
      "My uncle, and he's 57 years old. He's been experiencing body aches and fever.\n"+
      "He has acetaminophen hypersensitivity."
    ,
      "My son, and he's 30 months old. He has a runny nose and keeps sneezing."
    ,
      "My mom, and she's 54 years old. She is currently complaining of a persistent, severe cough and headache.\n"+
      "She is now taking ibuprofen to relieve cold-induced pain."
    ,
      "My wife who's 30 years old and is in the last 3 months of pregnancy.\n"+
      "She exercised vigorously in cold weather and caught a cold. She has a fever along with muscle pain and sprain."
    
  ]


  const productChooseResult = [
    
      "Coldaewon Cold-Q Syrup includes caffeine anhydride which the patient does not prefer.\n"+
      "In addition, caffeine anhydride inhibits iron absorption when taking iron supplements.\n"+
      "It is recommended to have a 2 hour interval between taking the syrup and the iron supplement.\n"+
      "This should be the last option."
    ,
 
      "Coldaewon Kids Cold Syrup contains acetaminophen, chlorpheniramine, dextromethorphan, methylephedrine, and guaiphenesin which has the following effects:\n"+
      "- Acetaminophen : suitable for curing headaches and fever.\n"+
      "- Chlorpheniramine : suitable for curing a runny nose.\n"+
      "- Methylephedrine : suitable for curing a stuffy nose.\n"+
      "- Dextromethorphan, guaiphenesin : suitable for curing cough.\n"+
      "(Since it is a Kids syrup, adults should take higher doses.)"

    ,
    "Coldaewon Kidsfen Syrup is mainly used to reduce fever\n and might not cover all the patients’ symptoms such as coughing, runny and stuffy nose."
    ,
    "Coldaewon Kids Ibufen Syrup contains ibuprofen which is unsuitable to take together with dexibuprofen(dental medication),\nresulting in the overdose of NSAIDs."
    

  ]

  // console.log("length: ",script.length)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFlag(0, false);
      setFlag(1, true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);


  {/* 의사와 환자와의 대화 flag idx 1 */}
  const clickHandlers:any = [];
  const idx = script.length;
  for (let i = 1; i <= idx; i++) {
    clickHandlers.push(() => {
      setFlag(i, false);
      setFlag(i + 1, true);
    });
  }

  for (let i = (idx+1); i < (idx+1) + TEAM_5_PROUDCT.length; i++) {
    clickHandlers.push(() => {
      setFlag(3, false);  // 약품 선택 페이지
      setFlag(i+1, true);   // flag idx 18~21
    });
  }
  // Access handler functions by index
  const handleClick = (index: number) => {
    if (index >= 0 && index < clickHandlers.length) {
      clickHandlers[index]();
    }
  };


  const backBtnHandlers:any = [];
  for (let i = 1; i <= clickHandlers.length ; i++) {
    backBtnHandlers.push(() => {
      setFlag(i, false);
      setFlag(i-1, true);
    });
  }
  const handleBackBtn = (index: number) => {
    if (index >= 0 && index < backBtnHandlers.length) {
      backBtnHandlers[index]();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 gap-20 relative">
      <Image
        src="/home-background.png"
        alt="home-background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="-z-10"
      />
      
      <Footer/>



      {flags[0] ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">(Patient walks in...)</span>
        </div>
      ) : null}



      {/* 의사와 환자와의 대화 flag idx 1*/}
      {script.map((item, index) => (
        flags[index+1] ? (
          <>
            <BackBtn handleClick = {() => handleBackBtn(index)}/>
            <Question text={item.question} />
            <TextBtn
              text={item.answer}
              handleClick={() => handleClick(index)}
            />
          </>
        ) : null
      ))}

    {flags[2] ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Okay. who will be taking the medicine?
            </span>
          </div>
          <div className="flex flex-col items-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PATIENT.map((text, index) => (
            <div className="shadow-lg opacity-90">
              
              <TextBtn
              text={text.patient}
              handleClick={() => handleClick(1+index)}
            
              />

              </div>
            ))}
          </div>
        </div>
      ) : null}

      {flags[3] ? (
        <Patient 
          handleClick={() => {
            setFlag(4, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      

      {flags[4] ? (
          <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PROUDCT.map((product, index) => (
            <div className="shadow-lg opacity-90">
   
              <ProductBtn 
                src={product.src}
                alt={product.alt}
                name={product.name}
                ingredient={product.ingredient}
                formulation={product.formulation}
                handleClick={() => handleClick(3+index)}
              />
              </div>
            ))}
     
          </div>
        </div>
      ) : null}

      {flags[5] ? (
        <Wrong 
          text={productChooseResult[1]} 
          handleClick={() => {
            setFlag(4, true);  // 약품 선택 페이지
            setFlag(5, false);   
          }}
        />
      ) : null}
      {flags[6] ? (
        <Correct text={productChooseResult[0]} handleClick={() => handleClick(18)}/>
      ) : null}
      {flags[7] ? (
        <Wrong 
        text={productChooseResult[2]} 
        handleClick={() => {
          setFlag(4, true);  // 약품 선택 페이지
          setFlag(7, false);   
        }}
      />
      ) : null}
      {flags[8] ? (
        <Wrong 
        text={productChooseResult[2]} 
        handleClick={() => {
          setFlag(4, true);  // 약품 선택 페이지
          setFlag(8, false);   
        }}
      />
      ) : null}
  
    </div>
  );
}
