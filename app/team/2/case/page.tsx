"use client";

import Image from "next/image";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { TextBtn, Question, ProductBtn, BackBtn, Correct, Wrong, Success, Form, FormCorrect } from '@/app/components';
import Logo from "@/app/components/global/Logo";

import { 
  TEAM_2_FORM, 
  TEAM_2_CONSULT_RESULT_DATA, 
  TEAM_2_SCRIPT, 
  TEAM_2_PRODUCT,
  TEAM_2_PRODUCT_CHOOSE_RESULT, 
  TEAM_2_RESULT_SCRIPT 
} from "@/app/constants/2"

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
  {/* 의사와 환자와의 대화 flag idx 1~2 */}
  const idx = TEAM_2_SCRIPT.length;
  for (let i = 1; i < idx; i++) {
    clickHandlers.push(() => {
      setFlag(i, false);
      setFlag(i + 1, true);
    });
  }

  // i = 3 ~ 5
  const endIdx = TEAM_2_SCRIPT[TEAM_2_SCRIPT.length-1].answer.length;
  for (let i = (idx+1); i < (idx+1) + endIdx; i++) {
    clickHandlers.push(() => {
      setFlag(2, false);  // patient case 선택 페이지
      setFlag(i, true);   // flag idx 3~5
    });
  }


  // flag 6 ~ 17
  const clickHandler2 = (flagIndex: number, productIndex: number) => {
    if (flagIndex == 3){
      switch (productIndex) {
        case 0:
          {
            setFlag(flagIndex, false);
            setFlag(6, true);   
          }
          break;
        case 1:
          {
            setFlag(flagIndex, false);
            setFlag(7, true);  
          }
          break;
        case 2:
          {
            setFlag(flagIndex, false);
            setFlag(8, true);  
          }
          break;
        case 3:
          {
            setFlag(flagIndex, false);
            setFlag(9, true);  
          }
          break;
      }
    }
    if (flagIndex == 4){
      switch (productIndex) {
        case 0:
          {
            setFlag(flagIndex, false);
            setFlag(10, true);   
          }
          break;
        case 1:
          {
            setFlag(flagIndex, false);
            setFlag(11, true);  
          }
          break;
        case 2:
          {
            setFlag(flagIndex, false);
            setFlag(12, true);  
          }
          break;
        case 3:
          {
            setFlag(flagIndex, false);
            setFlag(13, true);  
          }
          break;
      }
    }
    if (flagIndex == 5){
      switch (productIndex) {
        case 0:
          {
            setFlag(flagIndex, false);
            setFlag(14, true);   
          }
          break;
        case 1:
          {
            setFlag(flagIndex, false);
            setFlag(15, true);  
          }
          break;
        case 2:
          {
            setFlag(flagIndex, false);
            setFlag(16, true);  
          }
          break;
        case 3:
          {
            setFlag(flagIndex, false);
            setFlag(17, true);  
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
  // const navigate = useNavigate();
  // backBtnHandlers.push(
  //   navigate("/team/2/otc-info")
  // )
  // script back button
  for (let i = 1; i <= clickHandlers.length ; i++) {
    backBtnHandlers.push(() => {
      setFlag(i, false);
      setFlag(i-1, true);
    });
  }

  // // patient option back button
  // // i = 3 ~ 5
  // for (let i = startIdx + 1; i <= startIdx + 1 + endIdx ; i++) {
  //   backBtnHandlers.push(() => {
  //     setFlag(i, false);
  //     setFlag(startIdx, true);
  //   });
  // }

  // const handleBackBtn = (index: number) => {
  //   if (index >= 0 && index < backBtnHandlers.length) {
  //     backBtnHandlers[index]();
  //   }
  // };




  //flag 18~20 에 해당하는 patient consult
  const [selectedItems1, setSelectedItems1] = useState<number[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<number[]>([]);
  const [selectedItems3, setSelectedItems3] = useState<number[]>([]);

  const handleSubmit1 = (event: React.FormEvent) => {
    event.preventDefault();
    const answer = TEAM_2_FORM.answer[0];

    if (selectedItems1.length === answer.length &&
      selectedItems1.every((idx) => answer.includes(idx)))
    {
      setFlag(18,false);
      setFlag(21,true); 
    } else {
      setFlag(18,false);
      setFlag(22,true);
    }
  };
  const handleSubmit2 = (event: React.FormEvent) => {
    event.preventDefault();
    const answer = TEAM_2_FORM.answer[1];

    if (selectedItems2.length === answer.length &&
      selectedItems2.every((idx) => answer.includes(idx)))
    {
      setFlag(19,false);
      setFlag(23,true); 
    } else {
      setFlag(19,false);
      setFlag(24,true);
    }
  };
  const handleSubmit3 = (event: React.FormEvent) => {
    event.preventDefault();
    const answer = TEAM_2_FORM.answer[2];

    if (selectedItems3.length === answer.length &&
      selectedItems3.every((idx) => answer.includes(idx)))
    {
      setFlag(20,false);
      setFlag(25,true); 
    } else {
      setFlag(20,false);
      setFlag(26,true);
    }
  };

  const goToFinalResult1 = () => {    
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
  const goToFinalResult2 = () => { 
    setFlag(23, false);
    setFlag(27, true);    
    
    setTimeout(() => {
      setFlag(27, false);
      setFlag(29, true); 

      setTimeout(() => {
        setFlag(29, false);
        setFlag(31, true); 

      }, 3000);

    }, 3000);
  }
  const goToFinalResult3 = () => {    
    setFlag(25, false);
    setFlag(27, true); 

    setTimeout(() => {
      setFlag(27, false);
      setFlag(30, true); 

      setTimeout(() => {
        setFlag(30, false);
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
      {/* flags[1] ~ flags[2] */}
      {TEAM_2_SCRIPT.map((item, index) => (
        flags[index+1] ? (
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
        ) : null
      ))}

      {[3,4,5].map((item,itemIndex)=>(
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
            {TEAM_2_PRODUCT.map((product, index) => (
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
      {flags[6] ? (
        <Wrong 
          text={TEAM_2_PRODUCT_CHOOSE_RESULT[0][0]} 
          handleClick={() => {
            setFlag(6, false);   
            setFlag(3, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[7] ? (
        <Wrong 
          text={TEAM_2_PRODUCT_CHOOSE_RESULT[0][1]} 
          handleClick={() => {
            setFlag(7, false);   
            setFlag(3, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[8] ? (
        <Wrong 
          text={TEAM_2_PRODUCT_CHOOSE_RESULT[0][2]} 
          handleClick={() => {
            setFlag(8, false);   
            setFlag(3, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[9] ? (
        <Correct 
          text={TEAM_2_PRODUCT_CHOOSE_RESULT[0][3]} 
          handleClick={() => {
            setFlag(9, false);   
            setFlag(18, true);  // patient case 1 -> patient consult [flag = 18]
          }}
        />
      ) : null}
      {/* patient case 2 */}
      {flags[10] ? (
        <Wrong 
          text={TEAM_2_PRODUCT_CHOOSE_RESULT[1][0]} 
          handleClick={() => {
            setFlag(10, false);   
            setFlag(3, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[11] ? (
        <Wrong 
          text={TEAM_2_PRODUCT_CHOOSE_RESULT[1][1]} 
          handleClick={() => {
            setFlag(11, false);   
            setFlag(3, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {flags[12] ? (
        <Correct 
          text={TEAM_2_PRODUCT_CHOOSE_RESULT[1][2]} 
          handleClick={() => {
            setFlag(12, false);   
            setFlag(19, true);  // patient case 2 -> patient consult [flag = 19]
          }}
        />
      ) : null}
      {flags[13] ? (
        <Wrong 
          text={TEAM_2_PRODUCT_CHOOSE_RESULT[1][3]} 
          handleClick={() => {
            setFlag(13, false);   
            setFlag(3, true);  // 약품 선택 페이지
          }}
        />
      ) : null}
      {/* patient case 3 */}
      {flags[14] ? (
        <Wrong 
        text={TEAM_2_PRODUCT_CHOOSE_RESULT[2][0]} 
        handleClick={() => {
          setFlag(14,false);
          setFlag(3,true);  // 약품 선택 페이지
        }}/>
      ) : null}
      {flags[15] ? (
        <Correct 
        text={TEAM_2_PRODUCT_CHOOSE_RESULT[2][1]} 
        handleClick={() => {
          setFlag(15, false);   
          setFlag(20, true);  // patient case 3 -> patient consult [flag = 20]
        }}
      />
      ) : null}
      {flags[16] ? (
        <Wrong 
        text={TEAM_2_PRODUCT_CHOOSE_RESULT[2][2]} 
        handleClick={() => {
          setFlag(16, false);   
          setFlag(3, true);  // 약품 선택 페이지
        }}
      />
      ) : null}
      {flags[17] ? (
        <Wrong 
        text={TEAM_2_PRODUCT_CHOOSE_RESULT[2][3]} 
        handleClick={() => {
          setFlag(17, false);   
          setFlag(3, true);  // 약품 선택 페이지
        }}
      />
      ) : null}

      {/* Go to patient consult */}
      {/* case 1 */}
      {flags[18] ? (
        <Form
           formData={TEAM_2_FORM.data[0]}
           selectedItems={selectedItems1}
           handleSubmit={handleSubmit1}
           setSelectedItems={setSelectedItems1}
        />
      ) : null}

      {/* case 2 */}
      {flags[19] ? (
        <Form
           formData={TEAM_2_FORM.data[1]}
           selectedItems={selectedItems2}
           handleSubmit={handleSubmit2}
           setSelectedItems={setSelectedItems2}
        />
      ) : null}

      {/* case 3 */}
      {flags[20] ? (
        <Form
           formData={TEAM_2_FORM.data[2]}
           selectedItems={selectedItems3}
           handleSubmit={handleSubmit3}
           setSelectedItems={setSelectedItems3}
        />
      ) : null}

      {/* case 1 Correct, Wrong */}
      {flags[21] ? (
        <FormCorrect
          text = {TEAM_2_CONSULT_RESULT_DATA.right[0]}
          handleClick={goToFinalResult1} // to flag 28
        />
      ) : null}
     {flags[22] ? (
        <Wrong 
          text={TEAM_2_CONSULT_RESULT_DATA.wrong} 
          handleClick={() => {
            setFlag(22, false);   
            setFlag(18, true);  // case 1 patient consult 페이지
          }}
        />
      ) : null}

      {/* case 2 Correct, Wrong */}
      {flags[23] ? (
        <FormCorrect
          text = {TEAM_2_CONSULT_RESULT_DATA.right[1]}
          handleClick={goToFinalResult2} // to flag 29
        />
      ) : null}
      {flags[24] ? (
        <Wrong 
          text={TEAM_2_CONSULT_RESULT_DATA.wrong} 
          handleClick={() => {
            setFlag(24, false);   
            setFlag(19, true);  // case 2 patient consult 페이지
          }}
        />
      ) : null}

      {/* case 3 Correct, Wrong */}
      {flags[25] ? (
        <FormCorrect
          text = {TEAM_2_CONSULT_RESULT_DATA.right[2]}
          handleClick={goToFinalResult3} // to flag 30
        />
      ) : null}
      {flags[26] ? (
        <Wrong 
          text={TEAM_2_CONSULT_RESULT_DATA.wrong} 
          handleClick={() => {
            setFlag(26, false);   
            setFlag(20, true);  // case 3 patient consult 페이지
          }}
        />
      ) : null}

      {flags[27] ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Few Weeks Later... The patient visited the pharmacy.
          </span>
        </div>
      ) : null}

      {/* 재방문 대화 */}
      {/* flags[28] ~ flags[30]  */} 
      {TEAM_2_RESULT_SCRIPT.map((item, index) => (
        flags[index+28] ? (
          <>
            <Question text={item.question} />
            <Question text={item.answer} />
          </>
        ) : null
      ))}

      {flags[31] ? (
        <Success/>
      ) : null}

      
    <Logo/>

    </div>
  );
}
