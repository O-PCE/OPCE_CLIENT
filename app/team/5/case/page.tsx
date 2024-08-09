"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TextBtn, Question, ProductBtn, Footer } from '../../../components';
import TEAM_5_PROUDCT from "@/app/constants/5/productData";
import TEAM_5_PATIENT from "@/app/constants/5/PatientData";
import BackBtn from "@/app/components/case/BackBtn";
import FormCorrect from "@/app/components/case/FormCorrect";
import Correct from "@/app/components/case/Correct";
import Wrong from "@/app/components/case/Wrong";
import Form from "@/app/components/case/Form";
import React from "react";
import Result from "@/app/components/case/Result";
import Script from "@/app/components/case/Script";
import Logo from "@/app/components/global/Logo";

import TEAM_5_CONSULT_RESULT_DATA1 from "@/app/constants/5/ConsultData/consultData1";

import TEAM_5_FINALRESULT_ANSWER from "@/app/constants/5/FinalResultAns";
import TEAM_5_FINALRESULT_QUESTION from "@/app/constants/5/FinalResultQ";

import TEAM_5_FORM1 from "@/app/constants/5/FormData/formData1";
import TEAM_5_FORM2 from "@/app/constants/5/FormData/formData2";
import TEAM_5_FORM3 from "@/app/constants/5/FormData/formData3";

import productChooseResult1 from "@/app/constants/5/productChooseResult/productChooseResult1";
import productChooseResult2 from "@/app/constants/5/productChooseResult/productChooseResult2";
import productChooseResult3 from "@/app/constants/5/productChooseResult/productChooseResult3";
import productChooseResult4 from "@/app/constants/5/productChooseResult/productChooseResult4";
import productChooseResult5 from "@/app/constants/5/productChooseResult/productChooseResult5";
import productChooseResult6 from "@/app/constants/5/productChooseResult/productChooseResult6";


export default function Case1() {

  const array = new Array(58).fill(false);
  const newArray = [true, ...array];
  const [flags, setFlags] = useState(newArray);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(0);
  const [correctProductIndex, setCorrectProductIndex] = useState(-1);
  const [previousFlagIndex, setPreviousFlagIndex] = useState<number | null>(null); //직전 FlagIndex
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

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

  const handleSubmit = (e: React.FormEvent, currentFlagIndex: number, correctAnswers: number[], nextFlagIndex: number) => {
    e.preventDefault();
    
    const allCorrect = correctAnswers.every(answer => selectedItems.includes(answer));
    
    if (allCorrect) {
      console.log('Correct answers selected. Updating flags...');
      setFlag(currentFlagIndex, false);
      setFlag(nextFlagIndex, true);
    } else {
      console.log('Wrong answers selected. Updating flags...');
      setFlag(currentFlagIndex,false);
      setFlag(nextFlagIndex+6,true);
    }
  };

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
      case 4:
        setFlag(2, false);
        setFlag(7, true);
        break;
      case 5:
        setFlag(2, false);
        setFlag(8, true);
        break;           
      default:
        break;
    }
  };

  const getCorrectProductIndex = (patientIndex: number) => {
    switch (patientIndex) {
      case 0: return 0; // 1번 환자 : 1번 약품
      case 1: return 2; // 2번 환자 : 3번 약품
      case 2: return 1; // 3번 환자 : 2번 약품
      case 3: return 4; // 4번 환자 : 5번 약품
      case 4: return 5; // 5번 환자 : 6번 약품
      case 5: return 3; // 6번 환자 : 4번 약품
      default: return -1;
    }
  };

  const wrongFlags = [
    [15, 16, 17, 18, 19], // 환자 1
    [20, 21, 22, 23, 24], // 환자 2
    [25, 26, 27, 28, 29], // 환자 3
    [30, 31, 32, 33, 34], // 환자 4
    [35, 36, 37, 38, 39], // 환자 5
    [40, 41, 42, 43, 44] // 환자 6
  ];

  const productChooseResults = [
    productChooseResult1,
    productChooseResult2,
    productChooseResult3,
    productChooseResult4,
    productChooseResult5,
    productChooseResult6
  ];

  const getWrongProductIndexes = (patientIndex: number) => {
    switch (patientIndex) {
      case 0: return [1, 2, 3, 4, 5]; // 1번 환자 : 1번 제외 약품
      case 1: return [0, 1, 3, 4, 5]; // 2번 환자 : 3번 제외 약품
      case 2: return [0, 2, 3, 4, 5]; // 3번 환자 : 2번 제외 약품
      case 3: return [0, 1, 2, 3, 5]; // 4번 환자 : 5번 제외 약품
      case 4: return [0, 1, 2, 3, 4]; // 5번 환자 : 6번 제외 약품
      case 5: return [0, 1, 2, 4, 5]; // 6번 환자 : 4번 제외 약품
      default: return [];
    }
  };

  const handleProductSelection = (index: number) => {
    const currentFlagIndex = selectedPatientIndex + 3; // 3, 4, 5, 6, 7, 8 환자 선택창 
    const correctPageFlagIndex = selectedPatientIndex + 9; // 9, 10, 11, 12, 13, 14 Correct
    
    const wrongProductIndexes = getWrongProductIndexes(selectedPatientIndex);
    const wrongIndex = wrongProductIndexes.indexOf(index);

    if (index === correctProductIndex) {
      setFlag(currentFlagIndex, false);
      setFlag(correctPageFlagIndex, true);  // 환자 Correct 페이지로 이동
    } else if (wrongIndex !== -1) {
        const wrongPageFlagIndex = selectedPatientIndex * 5 + 15 + wrongIndex;
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

  const handleCheckboxChange = (index: number) => {
    setSelectedItems(prevSelectedItems => {
      if (prevSelectedItems.includes(index)) {
        return prevSelectedItems.filter(item => item !== index);
      } else {
        return [...prevSelectedItems, index];
      }
    });
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

  for (let i = (idx+1); i < (idx+1) + TEAM_5_PROUDCT.length; i++) {
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
              <Link href="/team/5/otc-info" className="fixed left-10 top-10">
                <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
                <span className="text-white">Go Back to Info Page</span>
                </div>
              </Link>

              <Question text={item.question} />

              <div className="flex flex-col justify-center w-[75%] gap-5 justify-between mt-12">
              <TextBtn
              text={item.answer}
              handleClick={() => handleClick(index)}
              />
            
              </div>
          </>
        ) : null
      ))}

      {flags[2] ? (
        <div className="flex flex-col items-center justify-center">
          <BackBtn handleClick = {() => handleBackBtn(1)}/>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-8">
            <span className="text-xl font-bold text-gray-500">
              Okay. who will be taking the medicine?
            </span>
          </div>
          <div className="flex flex-col justify-center w-full gap-3 justify-between mt-2">
            {TEAM_5_PATIENT.map((text, index) => (
            <div className="shadow-lg opacity-90">
              
              <TextBtn
              text={text.patient}
              handleClick={() => handlePatientSelection(index)}
              />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      {flags[3] ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PROUDCT.map((product, index) => (
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
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
            Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PROUDCT.map((product, index) => (
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
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
            Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PROUDCT.map((product, index) => (
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
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
            Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PROUDCT.map((product, index) => (
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
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
            Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PROUDCT.map((product, index) => (
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
  
      {flags[8] ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
            Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center justify-center w-full gap-5 justify-between mt-14">
            {TEAM_5_PROUDCT.map((product, index) => (
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

      {flags[9] ? (
        <Correct text={productChooseResult1[0]} handleClick={() => handleCorrectClick(9, 45)}/>
      ) : null}

      {flags[10] ? (
        <Correct text={productChooseResult2[2]} handleClick={() => handleCorrectClick(10, 46)}/>
      ) : null}

      {flags[11] ? (
        <Correct text={productChooseResult3[1]} handleClick={() => handleCorrectClick(11, 47)}/>
      ) : null}

      {flags[12] ? (
        <Correct text={productChooseResult4[4]} handleClick={() => handleCorrectClick(12, 48)}/>
      ) : null}

      {flags[13] ? (
        <Correct text={productChooseResult5[5]} handleClick={() => handleCorrectClick(13, 49)}/>
      ) : null}

      {flags[14] ? (
        <Correct text={productChooseResult6[3]} handleClick={() => handleCorrectClick(14, 50)}/>
      ) : null}

      {wrongFlags[selectedPatientIndex].map((flagIndex, idx) => (
      flags[flagIndex] ? (
        <Wrong
          text={productChooseResults[selectedPatientIndex][getWrongProductIndexes(selectedPatientIndex)[idx]]}
          handleClick={() =>{
            handleWrongClick(flagIndex)
          }}
        />
      ) : null
    ))}

      {flags[45] ? (
        <Form
          formData={TEAM_5_FORM1.map(item => item.item)}
          handleSubmit={(e) => handleSubmit(e, 45, [0, 1, 4, 5], 51)}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ) : null}

      {flags[46] ? (
        <Form
        formData={TEAM_5_FORM2.map(item => item.item)}
          handleSubmit={(e) => handleSubmit(e, 46, [0, 1, 3, 4, 7, 8], 52)}
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
        />
      ) : null}



      {flags[51] ? (
        <FormCorrect
        text = {TEAM_5_CONSULT_RESULT_DATA1.right}
        handleClick={() => handleCorrectClick(51, 57)
        }
      />
      ) : null}

      {flags[57] ? (
        <>
          <Result
            question={TEAM_5_FINALRESULT_QUESTION[0]}
            answer={TEAM_5_FINALRESULT_ANSWER[0]}
          />

          <Link href="/" className="fixed left-10 top-10">
            <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
              <span className="text-white">Go Back to Main Page</span>
            </div>
          </Link>
        </>
       
      ) : null}

    <Logo/>
    </div>
  );
}
