"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TextBtn, Question, ProductBtn, Footer } from '../../../components';
import TEAM_6_PROUDCT from "@/app/constants/6/productData";
import TEAM_6_PATIENT from "@/app/constants/6/PatientData";
import BackBtn from "@/app/components/case/BackBtn";
import FormCorrect from "@/app/components/case/FormCorrect";
import Correct from "@/app/components/case/Correct";
import Wrong from "@/app/components/case/Wrong";
import Form from "@/app/components/case/Form";
import React from "react";
import Logo from "@/app/components/global/Logo";

import TEAM_6_CONSULT_RESULT_DATA from "@/app/constants/6/ConsultData";

import TEAM_6_FINALRESULT from "@/app/constants/6/FinalResultData";
import TEAM_6_FORM from "@/app/constants/6/FormData";

import TEAM_6_PRODUCT_CHOOSE_RESULT from "@/app/constants/6/ProductChooseResult";

import Success from "@/app/components/case/Success";
import PatientBtn from "@/app/components/case/PatientBtn";

export default function Case1() {

  const array = new Array(45).fill(false);
  const newArray = [true, ...array];
  const [flags, setFlags] = useState(newArray);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(0);
  const [correctProductIndex, setCorrectProductIndex] = useState(-1);
  const [previousFlagIndex, setPreviousFlagIndex] = useState<number | null>(null); //직전 FlagIndex
  
  const [selectedItems1, setSelectedItems1] = useState<number[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<number[]>([]);
  const [selectedItems3, setSelectedItems3] = useState<number[]>([]);
  const [selectedItems4, setSelectedItems4] = useState<number[]>([]);

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
      question: "Me(pharmacist): Good morning! How can I help you today?",
      answer: 
        "Patient: Hello, I would like to buy a painkiller. Can you recommend something?"
    }
  ]

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFlag(0, false);
      setFlag(1, true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);

  
  const handleClick = (index: number) => {
      if (index >= 0 && index < clickHandlers.length) {
      clickHandlers[index]();
      }
  };

  const handleSubmit1 = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (
      selectedItems1.length === TEAM_6_FORM.answer[0].length &&
      selectedItems1.every((idx) => TEAM_6_FORM.answer[0].includes(idx))
    ) {
      setFlag(23, false);
      setFlag(27, true);
    } else {
      setFlag(23, false);
      setFlag(36, true);
    }
  };

  const handleSubmit2 = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      selectedItems2.length === TEAM_6_FORM.answer[1].length &&
      selectedItems2.every((idx) => TEAM_6_FORM.answer[1].includes(idx))
    ) {
      setFlag(24, false);
      setFlag(28, true);
    } else {
      setFlag(24, false);
      setFlag(37, true);
    }
  };

  const handleSubmit3 = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      selectedItems3.length === TEAM_6_FORM.answer[2].length &&
      selectedItems3.every((idx) => TEAM_6_FORM.answer[2].includes(idx))
    ) {
      setFlag(25, false);
      setFlag(29, true);
    } else {
      setFlag(25, false);
      setFlag(38, true);
    }
  };
    const handleSubmit4 = (event: React.FormEvent) => {
      event.preventDefault();
    if (
      selectedItems4.length === TEAM_6_FORM.answer[3].length &&
      selectedItems4.every((idx) => TEAM_6_FORM.answer[3].includes(idx))
    ) {
      setFlag(26, false);
      setFlag(30, true);
    } else {
      setFlag(26, false);
      setFlag(39, true);
    }
  };


  const goToFinalResult1 = () => {    
    setFlag(27, false);
    setFlag(31, true); 
    
    setTimeout(() => {
      setFlag(31, false);
      setFlag(32, true); 

      setTimeout(() => {
        setFlag(32, false);
        setFlag(40, true); 

      }, 3000);

    }, 3000);
  }
  const goToFinalResult2 = () => { 
    setFlag(28, false);
    setFlag(31, true); 
    
    setTimeout(() => {
      setFlag(31, false);
      setFlag(33, true); 

      setTimeout(() => {
        setFlag(33, false);
        setFlag(40, true); 

      }, 3000);

    }, 3000);
  }
  const goToFinalResult3 = () => {    
    setFlag(29, false);
    setFlag(31, true); 
    
    setTimeout(() => {
      setFlag(31, false);
      setFlag(34, true); 

      setTimeout(() => {
        setFlag(34, false);
        setFlag(40, true); 

      }, 3000);

    }, 3000);
  }

  const goToFinalResult4 = () => {    
    setFlag(30, false);
    setFlag(31, true); 
    
    setTimeout(() => {
      setFlag(31, false);
      setFlag(35, true); 

      setTimeout(() => {
        setFlag(35, false);
        setFlag(40, true); 

      }, 3000);

    }, 3000);
  }


  // 환자 선택 -> 다른 flag로 이동
  const handlePatientSelection = (index: number) => {
    setSelectedPatientIndex(index);
    setCorrectProductIndex(getCorrectProductIndex(index));

    switch (index) {
      case 0:
        setFlag(2, false);
        setFlag(3, true);
        break;
      case 1:
        setFlag(2, false);
        setFlag(4, true);
        break;
      case 2:
        setFlag(2, false);
        setFlag(5, true);
        break;
      case 3:
        setFlag(2, false);
        setFlag(6, true);
        break;           
      default:
        break;
    }
  };

  const getCorrectProductIndex = (patientIndex: number) => {
    switch (patientIndex) {
      case 0: return 1; // 1번 환자 : 2번 약품
      case 1: return 0; // 2번 환자 : 1번 약품
      case 2: return 2; // 3번 환자 : 3번 약품
      case 3: return 2; // 4번 환자 : 3번 약품
      default: return -1;
    }
  };

  const wrongFlags = [
    [11, 12, 13], // 환자 1
    [14, 15, 16], // 환자 2
    [17, 18, 19], // 환자 3
    [20, 21, 22], // 환자 4
  ];


  const getWrongProductIndexes = (patientIndex: number) => {
    switch (patientIndex) {
      case 0: return [0, 2, 3]; // 1번 환자 : 2번 제외 약품
      case 1: return [1, 2, 3]; // 2번 환자 : 1번 제외 약품
      case 2: return [0, 1, 3]; // 3번 환자 : 3번 제외 약품
      case 3: return [0, 1, 3]; // 4번 환자 : 3번 제외 약품
      default: return [];
    }
  };

  const handleProductSelection = (index: number) => {
    const currentFlagIndex = selectedPatientIndex + 3; // 3, 4, 5, 6, 환자 선택창 
    const correctPageFlagIndex = selectedPatientIndex + 7; //7, 8, 9, 10 Correct
    
    const wrongProductIndexes = getWrongProductIndexes(selectedPatientIndex);
    const wrongIndex = wrongProductIndexes.indexOf(index);

    if (index === correctProductIndex) {
      setFlag(currentFlagIndex, false);
      setFlag(correctPageFlagIndex, true);  // 환자 Correct 페이지로 이동
    } else if (wrongIndex !== -1) {
        const wrongPageFlagIndex = selectedPatientIndex * 3 + 11 + wrongIndex;
        setPreviousFlagIndex(currentFlagIndex); //현재 flagindex 저장
        setFlag(currentFlagIndex, false);
        setFlag(wrongPageFlagIndex, true);  // Wrong 페이지로 이동
    }
  };

  const handleWrongClick = (flagIndex: number) => {
    if (previousFlagIndex !== null) {
      setFlag(flagIndex, false);
      setFlag(previousFlagIndex, true); // 이전 flagindex로 이동
      setPreviousFlagIndex(null);
    }
  };

  const handleCorrectClick = (flagIndex: number, checkboxFlagIndex: number) => {
    setFlag(flagIndex, false);
    setFlag(checkboxFlagIndex, true);
  };

  {/* 의사와 환자와의 대화 flag idx 1 */}
  const clickHandlers:any = [];
  const idx = script.length;
  for (let i = 1; i <= idx; i++) {
    clickHandlers.push(() => {
      setFlag(i, false);
      setFlag(i + 1, true);
    });
  }

  for (let i = (idx+1); i < (idx+1) + TEAM_6_PROUDCT.length; i++) {
    clickHandlers.push(() => {
      setFlag(3, false);  // 약품 선택 페이지
      setFlag(i+1, true);   // flag idx 4~9
    });
  }
 
  // Access handler functions by index
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

      {flags[0] ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">(Patient walks in...)</span>
        </div>
      ) : null}

      {/* 의사와 환자와의 대화 flag idx 1*/}
      {script.map((item, index) => (
        flags[index+1] ? (
          <>
              <Link href="/team/6/otc-info" className="fixed left-10 top-10">
                <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
                <span className="text-white">Go Back to Info Page</span>
                </div>
              </Link>

              <Question text={item.question} />

              <TextBtn
              text={item.answer}
              handleClick={() => handleClick(index)}
              />
              
          </>
        ) : null
      ))}

      {flags[2] ? (
        <>
        <div className="flex flex-col items-center justify-center rounded-md w-[50%] gap-3">
          <BackBtn handleClick = {() => handleBackBtn(1)}/>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-8">
            <span className="text-xl font-bold text-gray-500">
            Me (pharmacist) : Of course, but may I ask who the medicine is for and what exactly is causing the pain?
            </span>
          </div>
            {TEAM_6_PATIENT.map((text, index) => (
              <PatientBtn
              text={text.patient}
              handleClick={() => handlePatientSelection(index)}
              />
            ))}
        </div>          
        </>
      ) : null}

      {flags[3] ? (
        <div className="flex flex-col items-center justify-center">
          <BackBtn handleClick = {() => {
            setFlag(3, false);
            setFlag(2, true);
          }}/>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_6_PROUDCT.map((product, index) => (
            <div className="shadow-lg opacity-90">
   
              <ProductBtn 
                src={product.src}
                alt={product.alt}
                name={product.name}
                ingredient={product.ingredient}
                formulation={product.formulation}
                handleClick={() => handleProductSelection(index)}
              />
            </div>
            ))}
     
          </div>
        </div>
      ) : null}

      {flags[4] ? (
        <div className="flex flex-col items-center justify-center">
          <BackBtn handleClick = {() => {
            setFlag(4, false);
            setFlag(2, true);
          }}/>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
            Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_6_PROUDCT.map((product, index) => (
            <div className="shadow-lg opacity-90">
 
              <ProductBtn 
              src={product.src}
              alt={product.alt}
              name={product.name}
              ingredient={product.ingredient}
              formulation={product.formulation}
              handleClick={() => handleProductSelection(index)}
              />
            </div>
          ))}
   
        </div>
      </div>
      ) : null}

      {flags[5] ? (
        <div className="flex flex-col items-center justify-center">
          <BackBtn handleClick = {() => {
            setFlag(5, false);
            setFlag(2, true);
          }}/>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
            Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_6_PROUDCT.map((product, index) => (
            <div className="shadow-lg opacity-90">
 
              <ProductBtn 
              src={product.src}
              alt={product.alt}
              name={product.name}
              ingredient={product.ingredient}
              formulation={product.formulation}
              handleClick={() => handleProductSelection(index)}
              />
            </div>
          ))}
   
        </div>
      </div>
      ) : null}

      {flags[6] ? (
        <div className="flex flex-col items-center justify-center">
          <BackBtn handleClick = {() => {
            setFlag(6, false);
            setFlag(2, true);
          }}/>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
            Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_6_PROUDCT.map((product, index) => (
            <div className="shadow-lg opacity-90">
 
              <ProductBtn 
              src={product.src}
              alt={product.alt}
              name={product.name}
              ingredient={product.ingredient}
              formulation={product.formulation}
              handleClick={() => handleProductSelection(index)}
              />
            </div>
          ))}
   
        </div>
      </div>
      ) : null}


      {flags[7] ? (
        <Correct text={TEAM_6_PRODUCT_CHOOSE_RESULT[0][1]} handleClick={() => handleCorrectClick(7, 23)}/>
      ) : null}

      {flags[8] ? (
        <Correct text={TEAM_6_PRODUCT_CHOOSE_RESULT[1][0]} handleClick={() => handleCorrectClick(8, 24)}/>
      ) : null}

      {flags[9] ? (
        <Correct text={TEAM_6_PRODUCT_CHOOSE_RESULT[2][2]} handleClick={() => handleCorrectClick(9,25)}/>
      ) : null}

      {flags[10] ? (
        <Correct text={TEAM_6_PRODUCT_CHOOSE_RESULT[3][2]} handleClick={() => handleCorrectClick(10, 26)}/>
      ) : null}

      {wrongFlags[selectedPatientIndex].map((flagIndex, idx) => (
      flags[flagIndex] ? (
        <Wrong
          text={TEAM_6_PRODUCT_CHOOSE_RESULT[selectedPatientIndex][getWrongProductIndexes(selectedPatientIndex)[idx]]}
          handleClick={() =>{
            handleWrongClick(flagIndex)
          }}
        />
      ) : null
    ))}

      {flags[23] ? (
        <Form
          formData={TEAM_6_FORM.data[0]}
          selectedItems={selectedItems1}
          handleSubmit={handleSubmit1}
          setSelectedItems={setSelectedItems1}
        />
      ) : null}

      {flags[24] ? (
        <Form
          formData={TEAM_6_FORM.data[1]}
          selectedItems={selectedItems2}
          handleSubmit={handleSubmit2}
          setSelectedItems={setSelectedItems2}
        />
      ) : null}

      {flags[25] ? (
        <Form
          formData={TEAM_6_FORM.data[2]}
          selectedItems={selectedItems3}
          handleSubmit={handleSubmit3}
          setSelectedItems={setSelectedItems3}
        />
      ) : null}

      {flags[26] ? (
        <Form
          formData={TEAM_6_FORM.data[3]}
          selectedItems={selectedItems4}
          handleSubmit={handleSubmit4}
          setSelectedItems={setSelectedItems4}
        />
      ) : null}

      {flags[27] ? (
        <FormCorrect
        text = {TEAM_6_CONSULT_RESULT_DATA.right[0]}
        handleClick={goToFinalResult1}/>
      ) : null}

      {flags[36] ? (
        <Wrong 
          text={TEAM_6_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(36, false);
            setFlag(23, true);
          }}
        />
      ) : null}

      {flags[28] ? (
        <FormCorrect
        text = {TEAM_6_CONSULT_RESULT_DATA.right[1]}
        handleClick={goToFinalResult2}/>
      ) : null}

      {flags[37] ? (
        <Wrong 
          text={TEAM_6_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(37, false);
            setFlag(24, true);
          }}
        />
      ) : null}

      {flags[29] ? (
        <FormCorrect
        text = {TEAM_6_CONSULT_RESULT_DATA.right[2]}
        handleClick={goToFinalResult3}/>
      ) : null}

      {flags[38] ? (
        <Wrong 
          text={TEAM_6_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(38, false);
            setFlag(25, true);
          }}
        />
      ) : null}

      {flags[30] ? (
        <FormCorrect
        text = {TEAM_6_CONSULT_RESULT_DATA.right[3]}
        handleClick={goToFinalResult4}/>
      ) : null}

      {flags[39] ? (
        <Wrong 
          text={TEAM_6_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(39, false);
            setFlag(26, true);
          }}
        />
      ) : null}

      {flags[31] ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Few Weeks Later... The patient visited the pharmacy.
          </span>
        </div>
        
      ) : null}

      {TEAM_6_FINALRESULT.map((item, index) => (
        flags[index+32] ? (
          <>   
            <Question text={item.question} />
            <Question text={item.answer} />
          </>
        ) : null
      ))}

      {flags[40] ? (
        <Success/>
      ) : null}

    <Logo/>
    </div>
  );
}
