"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextBtn, Question, ProductBtn, BackBtn, Correct, Wrong, Success, Form, FormCorrect } from '@/app/components';
import Logo from "@/app/components/global/Logo";

import { 
  TEAM_3_FORM, 
  TEAM_3_CONSULT_RESULT_DATA, 
  TEAM_3_SCRIPT, 
  TEAM_3_PRODUCT,
  TEAM_3_PRODUCT_CHOOSE_RESULT, 
  TEAM_3_RESULT_SCRIPT 
} from "@/app/constants/3"

export default function Case() {

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



  useEffect(() => {
    const timer1 = setTimeout(() => {
      setFlag(0, false);
      setFlag(1, true);
    }, 2000);

    return () => {
      clearTimeout(timer1);
    };
  }, []);


  const clickHandlers:any = [];
  {/* 의사와 환자와의 대화 flag idx 1~3 */}
  const idx = TEAM_3_SCRIPT.length; // 3
  for (let i = 1; i <= idx; i++) {
    clickHandlers.push(() => {
      setFlag(i, false);
      setFlag(i + 1, true);
    });
  }

  // i = 4 ~ 8 
  for (let i = (idx+1); i < (idx+1) + TEAM_3_PRODUCT.length; i++) {
    clickHandlers.push(() => {
      setFlag(4, false);  // 약품 선택 페이지
      setFlag(i+1, true);   // flag idx 5 ~ 9
    });
  }

  

  // Access handler functions by index
  const handleClick = (index: number) => {
    if (index >= 0 && index < clickHandlers.length) {
      clickHandlers[index]();
    }
  };


  const backBtnHandlers:any = [];
  // script back button
  for (let i = 1; i <= clickHandlers.length ; i++) {
    backBtnHandlers.push(() => {
      setFlag(i, false);
      setFlag(i-1, true);
    });
  }







  const [selectedItems1, setSelectedItems1] = useState<number[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<number[]>([]);

  //flag 10 에 해당하는 patient consult
  const handleSubmit1 = (event: React.FormEvent) => {
    event.preventDefault();
    const answer = TEAM_3_FORM.answer[0];

    if (selectedItems1.length === answer.length &&
      selectedItems1.every((idx) => answer.includes(idx)))
    {
      setFlag(10,false);
      setFlag(11,true); 
    } else {
      setFlag(10,false);
      setFlag(12,true);
    }
  };


  //flag 13 에 해당하는 patient consult
  const handleSubmit2 = (event: React.FormEvent) => {
    event.preventDefault();
    const answer = TEAM_3_FORM.answer[1];

    if (selectedItems2.length === answer.length &&
      selectedItems2.every((idx) => answer.includes(idx)))
    {
      setFlag(13,false);
      setFlag(14,true); 
    } else {
      setFlag(13,false);
      setFlag(15,true);
    }
  };

  const goToFinalResult = () => {    
    setFlag(21, false);
    setFlag(27, true); 
    
    setTimeout(() => {
      setFlag(27, false);
      setFlag(28, true); 

      setTimeout(() => {
        setFlag(28, false);
        setFlag(31, true); 

      }, 3000);

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
      {/* flags[1] ~ flags[3] */}
      {TEAM_3_SCRIPT.map((item, index) => (
        flags[index+1] ? (
          <>
            <BackBtn handleClick = {() => {
              setFlag(index+1, false);
              setFlag(index, true);
            }}/>
            <Question text={item.question} />
            <TextBtn
              text={item.answer}
              handleClick={() => handleClick(index)}
            />
           
          </>
        ) : null
      ))}
      {flags[4] ? (
        <div className="flex flex-col items-center justify-center -mt-10">
          <BackBtn handleClick = {() => {
            setFlag(4, false);
            setFlag(3, true);
          }}/>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between">
            {TEAM_3_PRODUCT.map((product, index) => (
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
        <>
        <BackBtn handleClick = {() => {
          setFlag(5, false);
          setFlag(4, true);
        }}/>
        <Correct 
          text={TEAM_3_PRODUCT_CHOOSE_RESULT[0]} 
          handleClick={() => {
            setFlag(5, false);   
            setFlag(13, true);  // patient consult 페이지
          }}
        />
        </>
      ) : null}
      {flags[6] ? (
        <>
        <BackBtn handleClick = {() => {
          setFlag(6, false);
          setFlag(4, true);
        }}/>
        <Correct 
          text={TEAM_3_PRODUCT_CHOOSE_RESULT[1]} 
          handleClick={() => {
            setFlag(6, false);   
            setFlag(10, true);  // patient consult 페이지
          }}
        />
        </>
      ) : null}
      {flags[7] ? (
        <Wrong 
          text={TEAM_3_PRODUCT_CHOOSE_RESULT[2]} 
          handleClick={() => {
            setFlag(7, false);   
            setFlag(4, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[8] ? (
        <Wrong 
          text={TEAM_3_PRODUCT_CHOOSE_RESULT[3]} 
          handleClick={() => {
            setFlag(8, false);   
            setFlag(4, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[9] ? (
        <Wrong 
          text={TEAM_3_PRODUCT_CHOOSE_RESULT[4]} 
          handleClick={() => {
            setFlag(9, false);   
            setFlag(4, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
 

      {/* Go to patient consult 1 */}
      {flags[10] ? (
        <>
        <BackBtn handleClick = {() => {
          setFlag(10, false);
          setFlag(6, true);
        }}/>
        <Form
           formData={TEAM_3_FORM.data[0]}
           selectedItems={selectedItems1}
           handleSubmit={handleSubmit1}
           setSelectedItems={setSelectedItems1}
        />
        </>
      ) : null}


      {/* Correct, Wrong */}
      {flags[11] ? (
        <FormCorrect
          text = {TEAM_3_CONSULT_RESULT_DATA.right[0]}
          handleClick={() => {
            setFlag(11, false);   
            setFlag(16, true);  // success 페이지
          }} 
        />
      ) : null}
     {flags[12] ? (
        <Wrong 
          text = {TEAM_3_CONSULT_RESULT_DATA.wrong[0]} 
          handleClick={() => {
            setFlag(12, false);   
            setFlag(10, true);  // case 1 patient consult 페이지
          }}
        />
      ) : null}

      {/* Go to patient consult 2 */}
      {flags[13] ? (
        <>
        <BackBtn handleClick = {() => {
          setFlag(13, false);
          setFlag(5, true);
        }}/>
        <Form
           formData={TEAM_3_FORM.data[1]}
           selectedItems={selectedItems2}
           handleSubmit={handleSubmit2}
           setSelectedItems={setSelectedItems2}
        />
        </>
      ) : null}

      {/* case 2 Correct, Wrong */}
      {flags[14] ? (
        <FormCorrect
          text = {TEAM_3_CONSULT_RESULT_DATA.right[1]}
          handleClick={() => {
            setFlag(14, false);   
            setFlag(16, true);  // success 페이지
          }}
        />
      ) : null}
      {flags[15] ? (
        <Wrong 
          text={TEAM_3_CONSULT_RESULT_DATA.wrong[1]} 
          handleClick={() => {
            setFlag(15, false);   
            setFlag(13, true);  // patient consult 페이지
          }}
        />
      ) : null}

      {/* final result */}
      {flags[16] ? (
        <Success/>
      ) : null}

      
    <Logo/>

    </div>
  );
}
