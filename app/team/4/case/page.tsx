"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TextBtn, Question, ProductBtn, BackBtn, Correct, Wrong, Success, Form, FormCorrect } from '@/app/components';
import Logo from "@/app/components/global/Logo";

import { 
  TEAM_4_FORM, 
  TEAM_4_CONSULT_RESULT_DATA, 
  TEAM_4_SCRIPT, 
  TEAM_4_PRODUCT,
  TEAM_4_PRODUCT_CHOOSE_RESULT, 
  TEAM_4_RESULT_SCRIPT 
} from "@/app/constants/4"
import Link from "next/link";

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
  {/* 의사와 환자와의 대화 flag idx 1 ~ 2 */}
  const idx = TEAM_4_SCRIPT.length;
  for (let i = 1; i < idx; i++) {
    clickHandlers.push(() => {
      setFlag(i, false);
      setFlag(i + 1, true);
    });
  }

  // const timeoutRef = useRef<number | null>(null);
  for (let i = 3; i <= 4; i++) {
    clickHandlers.push(() => {
    // 기존 타이머가 있다면 취소
    // if (timeoutRef.current !== null) {
    //   clearTimeout(timeoutRef.current);
    // }
    // 새로운 타이머 설정
    
      setFlag(2, false); // patient case 선택 페이지
      setFlag(21, true);

      setTimeout(() => {
        setFlag(21, false);
        setFlag(i, true);  // flag idx 3~4
        // timeoutRef.current = null; // 타이머 완료 후 리셋
      }, 3000);
   
    });
  }


  // flag 6 ~ 17
  const clickHandler2 = (flagIndex: number, productIndex: number) => {
    if (flagIndex == 3){
      switch (productIndex) {
        case 0:
          {
            setFlag(flagIndex, false);
            setFlag(5, true);   
          }
          break;
        case 1:
          {
            setFlag(flagIndex, false);
            setFlag(6, true);  
          }
          break;
        case 2:
          {
            setFlag(flagIndex, false);
            setFlag(7, true);  
          }
          break;
      }
    }
    if (flagIndex == 4){
      switch (productIndex) {
        case 0:
          {
            setFlag(flagIndex, false);
            setFlag(8, true);   
          }
          break;
        case 1:
          {
            setFlag(flagIndex, false);
            setFlag(9, true);  
          }
          break;
        case 2:
          {
            setFlag(flagIndex, false);
            setFlag(10, true);  
          }
          break;
      }
    }
  };

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
      // 타이머가 설정되어 있으면 취소
    // if (timeoutRef.current !== null) {
    //   clearTimeout(timeoutRef.current);
    //   timeoutRef.current = null; // 타이머 리셋
    // }

      setFlag(i, false);
      setFlag(i-1, true);
    });
  }


  //flag 11~12 에 해당하는 patient consult
  const [selectedItems1, setSelectedItems1] = useState<number[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<number[]>([]);

  const handleSubmit1 = (event: React.FormEvent) => {
    event.preventDefault();
    const answer = TEAM_4_FORM.answer[0];

    if (selectedItems1.length === answer.length &&
      selectedItems1.every((idx) => answer.includes(idx)))
    {
      setFlag(11,false);
      setFlag(13,true); 
    } else {
      setFlag(11,false);
      setFlag(14,true);
    }
  };
  const handleSubmit2 = (event: React.FormEvent) => {
    event.preventDefault();
    const answer = TEAM_4_FORM.answer[1];

    if (selectedItems2.length === answer.length &&
      selectedItems2.every((idx) => answer.includes(idx)))
    {
      setFlag(12,false);
      setFlag(15,true); 
    } else {
      setFlag(12,false);
      setFlag(16,true);
    }
  };


  const goToFinalResult1 = () => {    
    setFlag(13, false);
    setFlag(17, true); 
    
    setTimeout(() => {
      setFlag(17, false);
      setFlag(18, true); 

      setTimeout(() => {
        setFlag(18, false);
        setFlag(20, true); 

      }, 3000);
    }, 3000);
  }


  const goToFinalResult2 = () => { 
    setFlag(15, false);
    setFlag(17, true);    
    
    setTimeout(() => {
      setFlag(17, false);
      setFlag(19, true); 

      setTimeout(() => {
        setFlag(19, false);
        setFlag(20, true); 

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
      {/* flags[1] ~ flags[2] */}
      {TEAM_4_SCRIPT.map((item, index) => (
        

        flags[index+1] ? (
          <>
          {index == 0 ? (
            <>
              <Link href={"/team/4/otc-info"} className="fixed left-10 top-10">
              <div className="bg-[#5BC17F] px-5 py-2 rounded-full">
                <span className="text-white">Go Back</span>
              </div>
              </Link>
              <Question text={item.question} />
              <TextBtn text={item.answer[0]} handleClick={() => handleClick(index)} />
            </>
          ) : (
            <>
              <BackBtn handleClick = {() => {
                setFlag(index+1, false);
                setFlag(index, true);
              }}/>
              <Question text={item.question} />
              {item.answer.map((answer, i) => (
                <TextBtn
                  key={i}
                  text={answer}
                  handleClick={() => handleClick(index+i)}
                />
              ))}
            </>
          )}
          </>
        ) : null
      ))}

      {flags[21] ? (
        <>
          <Question text={
            "Pharmacist: I’m sorry ma’am, but according to your explanation, I don't think Coldaewon Kidsfen Syrup is suitable for your son’s condition.\n\n"+
            "Patient’s parent: Oh really..? Can you help me to find the right one?\n\n"+
            "Pharmacist: Sure I will!"
          } />
        </>
      ) : null}


      {[3,4].map((item,itemIndex)=>(
        flags[item] ? (
        <div className="flex flex-col items-center justify-center">
          <BackBtn handleClick = {() => {
            setFlag(item, false);
            setFlag(2, true);
          }}/>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 -mt-15 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between">
            {TEAM_4_PRODUCT.map((product, index) => (
            <div className="shadow-lg opacity-90 ">
              <ProductBtn 
                src={product.src}
                alt={product.alt}
                name={product.name}
                ingredient={product.ingredient}
                formulation={product.formulation}
                handleClick={() => clickHandler2(item, index)}
              />
              </div>
            ))}
          </div>
        </div>
      ) : null
      ))}

      {/* patient case 1 */}
      {flags[5] ? (
        <>
        <BackBtn handleClick = {() => {
          setFlag(5, false);
          setFlag(3, true); // 약품 선택 페이지
        }}/>
        <Correct 
          text={TEAM_4_PRODUCT_CHOOSE_RESULT[0][0]} 
          handleClick={() => {
            setFlag(5, false);   
            setFlag(11, true);  // case 1 patient consult 페이지
          }}
        />
        </>
      ) : null}
      {flags[6] ? (
        <Wrong 
          text={TEAM_4_PRODUCT_CHOOSE_RESULT[0][1]} 
          handleClick={() => {
            setFlag(6, false);   
            setFlag(3, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[7] ? (
        <Wrong 
          text={TEAM_4_PRODUCT_CHOOSE_RESULT[0][2]} 
          handleClick={() => {
            setFlag(7, false);   
            setFlag(3, true);  // 약품 선택 페이지
          }}
        />
      ) : null}

      {/* patient case 2 */}
      {flags[8] ? (
        <Wrong 
          text={TEAM_4_PRODUCT_CHOOSE_RESULT[1][0]} 
          handleClick={() => {
            setFlag(8, false);   
            setFlag(4, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[9] ? (
        <Wrong 
          text={TEAM_4_PRODUCT_CHOOSE_RESULT[1][1]} 
          handleClick={() => {
            setFlag(9, false);   
            setFlag(4, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[10] ? (
        <>
        <BackBtn handleClick = {() => {
          setFlag(10, false);
          setFlag(4, true); // 약품 선택 페이지
        }}/>
        <Correct 
          text={TEAM_4_PRODUCT_CHOOSE_RESULT[1][2]} 
          handleClick={() => {
            setFlag(10, false);   
            setFlag(12, true);  // case 2 patient consult 페이지
          }}
        />
        </>
      ) : null}

      {/* Go to patient consult */}
      {/* case 1 */}
      {flags[11] ? (
        <>
        <BackBtn handleClick = {() => {
          setFlag(11, false);
          setFlag(5, true);
        }}/>
        <Form
           formData={TEAM_4_FORM.data[0]}
           selectedItems={selectedItems1}
           handleSubmit={handleSubmit1}
           setSelectedItems={setSelectedItems1}
        />
        </>
      ) : null}

      {/* case 2 */}
      {flags[12] ? (
        <>
        <BackBtn handleClick = {() => {
          setFlag(12, false);
          setFlag(10, true);
        }}/>
        <Form
           formData={TEAM_4_FORM.data[1]}
           selectedItems={selectedItems2}
           handleSubmit={handleSubmit2}
           setSelectedItems={setSelectedItems2}
        />
        </>
      ) : null}

      {/* case 1 Correct, Wrong */}
      {flags[13] ? (
        <FormCorrect
          text = {TEAM_4_CONSULT_RESULT_DATA.right[0]}
          handleClick={goToFinalResult1} // to flag 28
        />
      ) : null}
     {flags[14] ? (
        <Wrong 
          text={TEAM_4_CONSULT_RESULT_DATA.wrong[0]} 
          handleClick={() => {
            setFlag(14, false);   
            setFlag(11, true);  // case 1 patient consult 페이지
          }}
        />
      ) : null}

      {/* case 2 Correct, Wrong */}
      {flags[15] ? (
        <FormCorrect
          text = {TEAM_4_CONSULT_RESULT_DATA.right[1]}
          handleClick={goToFinalResult2} // to flag 29
        />
      ) : null}
      {flags[16] ? (
        <Wrong 
          text={TEAM_4_CONSULT_RESULT_DATA.wrong[1]} 
          handleClick={() => {
            setFlag(16, false);   
            setFlag(12, true);  // case 2 patient consult 페이지
          }}
        />
      ) : null}
     
      {flags[17] ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            After 3 days, the woman came back to the drugstore
          </span>
        </div>
      ) : null}
      

      {/* 재방문 대화 */}
      {/* flags[18] ~ flags[19]  */} 
      {TEAM_4_RESULT_SCRIPT.map((item, index) => (
        flags[index+18] ? (
          <>
            <Question text={item.question} />
            <Question text={item.answer} />
          </>
        ) : null
      ))}

      {flags[20] ? (
        <Success/>
      ) : null}

      
    <Logo/>

    </div>
  );
}
