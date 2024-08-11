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
import Logo from "@/app/components/global/Logo";

import TEAM_5_CONSULT_RESULT_DATA from "@/app/constants/5/ConsultData";

import TEAM_5_FINALRESULT from "@/app/constants/5/FinalResultData";
import TEAM_5_FORM from "@/app/constants/5/FormData";

import TEAM_5_PRODUCT_CHOOSE_RESULT from "@/app/constants/5/ProductChooseResult";

import Success from "@/app/components/case/Success";
import PatientBtn from "@/app/components/case/PatientBtn";

export default function Case1() {

  const array = new Array(72).fill(false);
  const newArray = [true, ...array];
  const [flags, setFlags] = useState(newArray);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState(0);
  const [correctProductIndex, setCorrectProductIndex] = useState(-1);
  const [previousFlagIndex, setPreviousFlagIndex] = useState<number | null>(null); //직전 FlagIndex
  
  const [selectedItems1, setSelectedItems1] = useState<number[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<number[]>([]);
  const [selectedItems3, setSelectedItems3] = useState<number[]>([]);
  const [selectedItems4, setSelectedItems4] = useState<number[]>([]);
  const [selectedItems5, setSelectedItems5] = useState<number[]>([]);
  const [selectedItems6, setSelectedItems6] = useState<number[]>([]);

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

  const handleSubmit1 = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (
      selectedItems1.length === TEAM_5_FORM.answer[0].length &&
      selectedItems1.every((idx) => TEAM_5_FORM.answer[0].includes(idx))
    ) {
      setFlag(45, false);
      setFlag(51, true);
    } else {
      setFlag(45, false);
      setFlag(65, true);
    }
  };

  const handleSubmit2 = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      selectedItems2.length === TEAM_5_FORM.answer[1].length &&
      selectedItems2.every((idx) => TEAM_5_FORM.answer[1].includes(idx))
    ) {
      setFlag(46, false);
      setFlag(52, true);
    } else {
      setFlag(46, false);
      setFlag(66, true);
    }
  };

  const handleSubmit3 = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      selectedItems3.length === TEAM_5_FORM.answer[2].length &&
      selectedItems3.every((idx) => TEAM_5_FORM.answer[2].includes(idx))
    ) {
      setFlag(47, false);
      setFlag(53, true);
    } else {
      setFlag(47, false);
      setFlag(67, true);
    }
  };
    const handleSubmit4 = (event: React.FormEvent) => {
      event.preventDefault();
    if (
      selectedItems4.length === TEAM_5_FORM.answer[3].length &&
      selectedItems4.every((idx) => TEAM_5_FORM.answer[3].includes(idx))
    ) {
      setFlag(48, false);
      setFlag(54, true);
    } else {
      setFlag(48, false);
      setFlag(68, true);
    }
  };

    const handleSubmit5 = (event: React.FormEvent) => {
      event.preventDefault();
    if (
      selectedItems5.length === TEAM_5_FORM.answer[4].length &&
      selectedItems5.every((idx) => TEAM_5_FORM.answer[4].includes(idx))
    ) {
      setFlag(49, false);
      setFlag(55, true);
    } else {
      setFlag(49, false);
      setFlag(69, true);
    }
  };

  const handleSubmit6 = (event: React.FormEvent) => {
    event.preventDefault();
    if (
      selectedItems6.length === TEAM_5_FORM.answer[5].length &&
      selectedItems6.every((idx) => TEAM_5_FORM.answer[5].includes(idx))
    ) {
      setFlag(50, false);
      setFlag(56, true);
    } else {
      setFlag(50, false);
      setFlag(70, true);
    }
  };

  const goToFinalResult1 = () => {    
    setFlag(51, false);
    setFlag(57, true); 
    
    setTimeout(() => {
      setFlag(57, false);
      setFlag(58, true); 

      setTimeout(() => {
        setFlag(58, false);
        setFlag(64, true); 

      }, 3000);

    }, 3000);
  }
  const goToFinalResult2 = () => { 
    setFlag(52, false);
    setFlag(57, true); 
    
    setTimeout(() => {
      setFlag(57, false);
      setFlag(59, true); 

      setTimeout(() => {
        setFlag(59, false);
        setFlag(64, true); 

      }, 3000);

    }, 3000);
  }
  const goToFinalResult3 = () => {    
    setFlag(53, false);
    setFlag(57, true); 
    
    setTimeout(() => {
      setFlag(57, false);
      setFlag(60, true); 

      setTimeout(() => {
        setFlag(60, false);
        setFlag(64, true); 

      }, 3000);

    }, 3000);
  }

  const goToFinalResult4 = () => {    
    setFlag(54, false);
    setFlag(57, true); 
    
    setTimeout(() => {
      setFlag(57, false);
      setFlag(61, true); 

      setTimeout(() => {
        setFlag(61, false);
        setFlag(64, true); 

      }, 3000);

    }, 3000);
  }

  const goToFinalResult5 = () => {    
    setFlag(55, false);
    setFlag(57, true); 
    
    setTimeout(() => {
      setFlag(57, false);
      setFlag(62, true); 

      setTimeout(() => {
        setFlag(62, false);
        setFlag(64, true); 

      }, 3000);

    }, 3000);
  }

  const goToFinalResult6 = () => {    
    setFlag(56, false);
    setFlag(57, true); 
    
    setTimeout(() => {
      setFlag(57, false);
      setFlag(63, true); 

      setTimeout(() => {
        setFlag(63, false);
        setFlag(64, true); 

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
              Okay. who will be taking the medicine?
            </span>
          </div>
            {TEAM_5_PATIENT.map((text, index) => (
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
        <Correct text={TEAM_5_PRODUCT_CHOOSE_RESULT[0][0]} handleClick={() => handleCorrectClick(9, 45)}/>
      ) : null}

      {flags[10] ? (
        <Correct text={TEAM_5_PRODUCT_CHOOSE_RESULT[1][2]} handleClick={() => handleCorrectClick(10, 46)}/>
      ) : null}

      {flags[11] ? (
        <Correct text={TEAM_5_PRODUCT_CHOOSE_RESULT[2][1]} handleClick={() => handleCorrectClick(11, 47)}/>
      ) : null}

      {flags[12] ? (
        <Correct text={TEAM_5_PRODUCT_CHOOSE_RESULT[3][4]} handleClick={() => handleCorrectClick(12, 48)}/>
      ) : null}

      {flags[13] ? (
        <Correct text={TEAM_5_PRODUCT_CHOOSE_RESULT[4][5]} handleClick={() => handleCorrectClick(13, 49)}/>
      ) : null}

      {flags[14] ? (
        <Correct text={TEAM_5_PRODUCT_CHOOSE_RESULT[5][3]} handleClick={() => handleCorrectClick(14, 50)}/>
      ) : null}

      {wrongFlags[selectedPatientIndex].map((flagIndex, idx) => (
      flags[flagIndex] ? (
        <Wrong
          text={TEAM_5_PRODUCT_CHOOSE_RESULT[selectedPatientIndex][getWrongProductIndexes(selectedPatientIndex)[idx]]}
          handleClick={() =>{
            handleWrongClick(flagIndex)
          }}
        />
      ) : null
    ))}

      {flags[45] ? (
        <Form
          formData={TEAM_5_FORM.data[0]}
          selectedItems={selectedItems1}
          handleSubmit={handleSubmit1}
          setSelectedItems={setSelectedItems1}
        />
      ) : null}

      {flags[46] ? (
        <Form
          formData={TEAM_5_FORM.data[1]}
          selectedItems={selectedItems2}
          handleSubmit={handleSubmit2}
          setSelectedItems={setSelectedItems2}
        />
      ) : null}

      {flags[47] ? (
        <Form
          formData={TEAM_5_FORM.data[2]}
          selectedItems={selectedItems3}
          handleSubmit={handleSubmit3}
          setSelectedItems={setSelectedItems3}
        />
      ) : null}

      {flags[48] ? (
        <Form
          formData={TEAM_5_FORM.data[3]}
          selectedItems={selectedItems4}
          handleSubmit={handleSubmit4}
          setSelectedItems={setSelectedItems4}
        />
      ) : null}

      {flags[49] ? (
        <Form
          formData={TEAM_5_FORM.data[4]}
          selectedItems={selectedItems5}
          handleSubmit={handleSubmit5}
          setSelectedItems={setSelectedItems5}
        />
      ) : null}

      {flags[50] ? (
        <Form
          formData={TEAM_5_FORM.data[5]}
          selectedItems={selectedItems6}
          handleSubmit={handleSubmit6}
          setSelectedItems={setSelectedItems6}
        />
      ) : null}

      {flags[51] ? (
        <FormCorrect
        text = {TEAM_5_CONSULT_RESULT_DATA.right[0]}
        handleClick={goToFinalResult1}/>
      ) : null}

      {flags[65] ? (
        <Wrong 
          text={TEAM_5_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(65, false);
            setFlag(45, true);
          }}
        />
      ) : null}

      {flags[52] ? (
        <FormCorrect
        text = {TEAM_5_CONSULT_RESULT_DATA.right[1]}
        handleClick={goToFinalResult2}/>
      ) : null}

      {flags[66] ? (
        <Wrong 
          text={TEAM_5_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(66, false);
            setFlag(46, true);
          }}
        />
      ) : null}

      {flags[53] ? (
        <FormCorrect
        text = {TEAM_5_CONSULT_RESULT_DATA.right[2]}
        handleClick={goToFinalResult3}/>
      ) : null}

      {flags[67] ? (
        <Wrong 
          text={TEAM_5_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(67, false);
            setFlag(47, true);
          }}
        />
      ) : null}

      {flags[54] ? (
        <FormCorrect
        text = {TEAM_5_CONSULT_RESULT_DATA.right[3]}
        handleClick={goToFinalResult4}/>
      ) : null}

      {flags[68] ? (
        <Wrong 
          text={TEAM_5_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(68, false);
            setFlag(48, true);
          }}
        />
      ) : null}

      {flags[55] ? (
        <FormCorrect
        text = {TEAM_5_CONSULT_RESULT_DATA.right[4]}
        handleClick={goToFinalResult5}/>
      ) : null}

      {flags[69] ? (
        <Wrong 
          text={TEAM_5_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(69, false);
            setFlag(49, true);
          }}
        />
      ) : null}

      {flags[56] ? (
        <FormCorrect
        text = {TEAM_5_CONSULT_RESULT_DATA.right[5]}
        handleClick={goToFinalResult6}/>
      ) : null}

      {flags[70] ? (
        <Wrong 
          text={TEAM_5_CONSULT_RESULT_DATA.wrong}
          handleClick={() =>{
            setFlag(66, false);
            setFlag(50, true);
          }}
        />
      ) : null}

      {flags[57] ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Few Weeks Later... The patient visited the pharmacy.
          </span>
        </div>
        
      ) : null}

      {TEAM_5_FINALRESULT.map((item, index) => (
        flags[index+58] ? (
          <>   
            <Question text={item.question} />
            <Question text={item.answer} />
          </>
        ) : null
      ))}

      {flags[64] ? (
        <Success/>
      ) : null}

    <Logo/>
    </div>
  );
}
