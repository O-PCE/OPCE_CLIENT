"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { TextBtn, Question, ProductBtn, BackBtn, Correct, Wrong, Success, Form, FormCorrect } from '@/app/components';
import Logo from "@/app/components/global/Logo";

import { 
  TEAM_1_FORM, 
  TEAM_1_CONSULT_RESULT_DATA, 
  TEAM_1_SCRIPT, 
  TEAM_1_PRODUCT,
  TEAM_1_PRODUCT_CHOOSE_RESULT, 
  TEAM_1_RESULT_SCRIPT 
} from "@/app/constants/1"


export default function Case1() {

  const array = new Array(30).fill(false);
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


  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFlag(0, false);
      setFlag(1, true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);


  {/* 의사와 환자와의 대화 flag idx 1~16 */}
  const clickHandlers:any = [];
  const idx = TEAM_1_SCRIPT.length;
  for (let i = 1; i <= idx; i++) {
    clickHandlers.push(() => {
      setFlag(i, false);
      setFlag(i + 1, true);
    });
  }

  // i = 17 ~ 20
  for (let i = (idx+1); i < (idx+1) + TEAM_1_PRODUCT.length; i++) {
    clickHandlers.push(() => {
      setFlag(17, false);  // 약품 선택 페이지
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




  //flag 22에 해당하는 patient consult
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (selectedItems.length === TEAM_1_FORM.answer.length &&
      selectedItems.every((idx) => TEAM_1_FORM.answer.includes(idx)))
    {
      setFlag(22,false);
      setFlag(23,true); 
    } else {
      setFlag(22,false);
      setFlag(24,true);
    }
  };

  const goToFinalResult = () => {
    setFlag(23,false);
    setFlag(25,true); // form 결과 체크시 -> result 페이지
    
    setTimeout(() => {
      setFlag(25, false);
      setFlag(26, true); 
  
      setTimeout(() => {
        setFlag(26, false);
        setFlag(27, true); 
  
        setTimeout(() => {
          setFlag(27, false);
          setFlag(28, true); 

          setTimeout(() => {
            setFlag(28, false);
            setFlag(29, true); 
          }, 5000);

        }, 5000);
        
      }, 5000);
      
    }, 3000);
    
  }
  
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


      {/* 의사와 환자와의 대화 */}
      {/* flags[1] ~ flags[16] */}
      {TEAM_1_SCRIPT.map((item, index) => (
        flags[index+1] ? (
          <>
            {/* index가 0일 경우 */}
            {index == 0 ? (
              <>
                <Link href={"/team/1/otc-info"} className="fixed left-10 top-10">
                <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
                  <span className="text-white">Go Back</span>
                </div>
                </Link>
                <Question text={item.question} />
                <TextBtn text={item.answer} handleClick={() => handleClick(index)} />
              </>

            ) : (
              <>
                {/* index가 0이 아닐 경우에 보여주는 기본 컴포넌트들 */}
                <BackBtn handleClick={() => handleBackBtn(index)} />
                <Question text={item.question} />
                <TextBtn text={item.answer} handleClick={() => handleClick(index)} />
              </>
            )}
          </>
        ) : null
      ))}
      

      {flags[17] ? (
        <div className="flex flex-col items-center justify-center -mt-10">
          <BackBtn handleClick={() => {
            setFlag(17,false);
            setFlag(16,true);
          }} 
          />
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between">
            {TEAM_1_PRODUCT.map((product, index) => (
            <div className="shadow-lg opacity-90">
   
              <ProductBtn 
                src={product.src}
                alt={product.alt}
                name={product.name}
                ingredient={product.ingredient}
                formulation={product.formulation}
                handleClick={() => handleClick(16+index)}
              />
              </div>
            ))}
     
          </div>
        </div>
      ) : null}
      {flags[18] ? (
        <Wrong 
          text={TEAM_1_PRODUCT_CHOOSE_RESULT[0]} 
          handleClick={() => {
            setFlag(18, false);   
            setFlag(17, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[19] ? (
        <>
        <BackBtn handleClick={() => {
          setFlag(19,false);
          setFlag(17,true);
        }} 
        />
        <Correct 
        text={TEAM_1_PRODUCT_CHOOSE_RESULT[1]} 
        handleClick={() => {
          setFlag(19,false);
          setFlag(22,true);
        }}/>
        </>
      ) : null}
      {flags[20] ? (
        <Wrong 
        text={TEAM_1_PRODUCT_CHOOSE_RESULT[2]} 
        handleClick={() => {
          setFlag(20, false);   
          setFlag(17, true);  // 약품 선택 페이지
        }}
      />
      ) : null}
      {flags[21] ? (
        <Wrong 
        text={TEAM_1_PRODUCT_CHOOSE_RESULT[3]} 
        handleClick={() => {
          setFlag(21, false);   
          setFlag(17, true);  // 약품 선택 페이지
        }}
      />
      ) : null}

      {/* Go to patient consult */}
      {flags[22] ? (
        <>
        <BackBtn handleClick={() => {
          setFlag(22,false);
          setFlag(19,true);
        }} 
        />
        <Form
           formData={TEAM_1_FORM.data}
           selectedItems={selectedItems}
           handleSubmit={handleSubmit}
           setSelectedItems={setSelectedItems}
        />
        </>
      ) : null}
      {flags[23] ? (
        <>
        <FormCorrect
          text = {TEAM_1_CONSULT_RESULT_DATA.right}
          handleClick={goToFinalResult}
        />
        <BackBtn handleClick={() => {
          setFlag(23,false);
          setFlag(22,true);
        }} 
        />
         </>
      ) : null}
     {flags[24] ? (
        <Wrong 
          text={TEAM_1_CONSULT_RESULT_DATA.wrong} 
          handleClick={() => {
            setFlag(24, false);   
            setFlag(22, true);  // patient consult 페이지
          }}
        />
      ) : null}
      {flags[25] ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Few Weeks Later... The patient visited the pharmacy.
          </span>
        </div>
      ) : null}

      {/* 재방문 대화 */}
      {/* flags[26] ~ flags[28]  */}
      {TEAM_1_RESULT_SCRIPT.map((item, index) => (
        flags[index+26] ? (
          <>
            <Question text={item.question} />
            <Question text={item.answer} />
          </>
        ) : null
      ))}

      {flags[29] ? (
        <Success/>
      ) : null}

      
    <Logo/>

    </div>
  );
}
