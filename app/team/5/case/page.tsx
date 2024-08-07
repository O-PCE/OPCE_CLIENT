"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { TextBtn, Question, ProductBtn, Footer } from '../../../components';
import TEAM_5_PROUDCT from "@/app/constants/5/productData";
import TEAM_5_PATIENT from "@/app/constants/5/PatientData";
import BackBtn from "@/app/components/case/BackBtn";
import Correct from "@/app/components/case/Correct";
import Wrong from "@/app/components/case/Wrong";


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


  // const items2 = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  // const [selectedItems2, setselectedItems2] = useState<number[]>([]);
  // const handleCheckbox2 = (idx: number) => {
  //   setselectedItems2((prev) => {
  //     if (prev.includes(idx)) {
  //       return prev.filter((i) => i !== idx);
  //     } else {
  //       return [...prev, idx];
  //     }
  //   });
  // };
  // const handleSubmit2 = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const answer = [1, 3, 6, 8];
  //   if (
  //     selectedItems2.length === answer.length &&
  //     selectedItems2.every((idx) => answer.includes(idx))
  //   ) {
  //     setFlag20(false);
  //     setFlag22(true);
  //   } else {
  //     setFlag20(false);
  //     setFlag21(true);
  //   }
  // };
  // const items3 = [0, 1, 2, 3, 4, 5];
  // const [selectedItems3, setselectedItems3] = useState<number[]>([]);
  // const handleCheckbox3 = (idx: number) => {
  //   setselectedItems3((prev) => {
  //     if (prev.includes(idx)) {
  //       return prev.filter((i) => i !== idx);
  //     } else {
  //       return [...prev, idx];
  //     }
  //   });
  // };
  // const handleSubmit3 = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const answer = [1, 4, 5];
  //   if (
  //     selectedItems3.length === answer.length &&
  //     selectedItems3.every((idx) => answer.includes(idx))
  //   ) {
  //     setFlag29(false);
  //     setFlag31(true);
  //   } else {
  //     setFlag29(false);
  //     setFlag30(true);
  //   }
  // };
  // const items4 = [0, 1, 2, 3, 4];
  // const [selectedItems4, setselectedItems4] = useState<number[]>([]);
  // const handleCheckbox4 = (idx: number) => {
  //   setselectedItems4((prev) => {
  //     if (prev.includes(idx)) {
  //       return prev.filter((i) => i !== idx);
  //     } else {
  //       return [...prev, idx];
  //     }
  //   });
  // };
  // const handleSubmit4 = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const answer = [0, 2, 4];
  //   if (
  //     selectedItems4.length === answer.length &&
  //     selectedItems4.every((idx) => answer.includes(idx))
  //   ) {
  //     setFlag38(false);
  //     setFlag40(true);
  //   } else {
  //     setFlag38(false);
  //     setFlag39(true);
  //   }
  // };
  // const items5 = [0, 1, 2, 3, 4, 5];
  // const [selectedItems5, setselectedItems5] = useState<number[]>([]);
  // const handleCheckbox5 = (idx: number) => {
  //   setselectedItems5((prev) => {
  //     if (prev.includes(idx)) {
  //       return prev.filter((i) => i !== idx);
  //     } else {
  //       return [...prev, idx];
  //     }
  //   });
  // };
  // const handleSubmit5 = (event: React.FormEvent) => {
  //   event.preventDefault();
  //   const answer = [1, 3];
  //   if (
  //     selectedItems5.length === answer.length &&
  //     selectedItems5.every((idx) => answer.includes(idx))
  //   ) {
  //     setFlag44(false);
  //     setFlag46(true);
  //   } else {
  //     setFlag44(false);
  //     setFlag45(true);
  //   }
  // };
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
          <div className="flex flex-col items-center justify-center w-200 gap-5 justify-between mt-14">
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
                handleClick={() => handleClick(16+index)}
              />
              </div>
            ))}
     
          </div>
        </div>
      ) : null}
      {flags[4] ? (
        <Wrong 
          text={productChooseResult[1]} 
          handleClick={() => {
            setFlag(17, true);  // 약품 선택 페이지
            setFlag(18, false);   
          }}
        />
      ) : null}
      {flags[5] ? (
        <Correct text={productChooseResult[0]} handleClick={() => handleClick(18)}/>
      ) : null}
      {flags[6] ? (
        <Wrong 
        text={productChooseResult[2]} 
        handleClick={() => {
          setFlag(17, true);  // 약품 선택 페이지
          setFlag(20, false);   
        }}
      />
      ) : null}
      {flags[7] ? (
        <Wrong 
        text={productChooseResult[2]} 
        handleClick={() => {
          setFlag(17, true);  // 약품 선택 페이지
          setFlag(21, false);   
        }}
      />
      ) : null}
       {/*{flag10 ? (
        <>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Choose all the options which are correct.
            </span>
          </div>
          <form
            onSubmit={handleSubmit1}
            className="flex flex-col items-center justify-center gap-8 w-full"
          >
            <div className="flex flex-col gap-4 justify-center bg-[#D8E4D8] w-[60%] h-[50vh] px-8 opacity-90 shadow-lg rounded-lg -mt-14">
              {items1.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center gap-3">
                  {idx === 0 ? (
                    <span className="text-gray-600 text-lg">
                      1) Administer after breakfast.
                    </span>
                  ) : null}
                  {idx === 1 ? (
                    <span className="text-gray-600 text-lg">
                      2) Administer 15 mL per day for the first 2 to 3 days, and
                      then continue to administer 10 mL per day.
                    </span>
                  ) : null}
                  {idx === 2 ? (
                    <span className="text-gray-600 text-lg">
                      3) You will directly have a normal bowel movement.
                    </span>
                  ) : null}
                  {idx === 3 ? (
                    <span className="text-gray-600 text-lg">
                      4) It is recommended for prolonged use.
                    </span>
                  ) : null}
                  {idx === 4 ? (
                    <span className="text-gray-600 text-lg">
                      5) Drink enough water every day and eat fiber-rich foods
                      such as prune and kelp.
                    </span>
                  ) : null}
                  {idx === 5 ? (
                    <span className="text-gray-600 text-lg break-all">
                      6) Feel bloated and abdominal pain may appear in the
                      stomach at the beginning of administration.
                    </span>
                  ) : null}
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedItems1.includes(idx)}
                      onChange={() => handleCheckbox1(idx)}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#5BC17F] px-7 py-2 rounded-full"
            >
              <span className="text-white">Done</span>
            </button>
          </form>
        </>
      ) : null}
      {flag11 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              You are all correct! Right patient consult was…
            </span>
          </div>
          <div className="flex flex-col justify-center w-[60%] h-[40vh] bg-white opacity-90 rounded-lg -mt-14 pl-14 gap-2">
            <span>- Administer before breakfast.</span>
            <span>
              - Administer 15 mL per day for the first 2 to 3 days, and then
              continue to administer 10 mL per day.
            </span>
            <span>- It may take 1-2 days to have a normal bowel movement.</span>
            <span>
              - Long-term reliance on the medication can lead to dependence and
              changes in bowel habits, so it is not recommended for prolonged
              use.
            </span>
            <span>
              - Drink enough water every day and eat fiber-rich foods such as
              prune and kelp.
            </span>
            <span>
              - Feel bloated and abdominal pain may appear in the stomach at the
              beginning of administration.
            </span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute top-[10%] left-[15%]"
            />
          </div>
          <button
            onClick={onClick11}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg -mt-8"
          >
            <span className="text-lg text-white">Go to See the Result</span>
          </button>
        </>
      ) : null}
      {flag12 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>Oh my god.</span>
            <span>I think you gave wrong information to the patient.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick10}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag13 ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Few Weeks Later... The patient visited the pharmacy.
          </span>
        </div>
      ) : null}
      {flag14 ? (
        <>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Me (pharmacist): How is it going?
            </span>
          </div>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 px-8 py-12">
            <span className="text-xl text-gray-500 text-center">
              Patient&apos;s parents: Great! My child&apos;s constipation had
              gone really well. Thank you for your help.
            </span>
          </div>
        </>
      ) : null}
      {flag15 ? (
        <>
          <div className="fixed w-full h-screen bg-white opacity-50 -z-10" />
          <div className="flex flex-col gap-5 items-center justify-center w-full">
            <div className="flex flex-col gap-5 w-1/2">
              <span className="text-5xl font-bold text-[#18063C]">
                Congratulation!
              </span>
              <span className="text-3xl font-semibold text-[#18063C]">
                You successfully finished the patient counseling.
              </span>
            </div>
            <Image
              src="/success.png"
              alt="success"
              width={200}
              height={100}
              className="mt-8"
            />
            <Link href="/case-select" className="mt-10">
              <div className="bg-gray-400 rounded-full shadow-xl px-8 py-2">
                <span className="text-white">Go to Select Another Case</span>
              </div>
            </Link>
          </div>
        </>
      ) : null}
      {flag16 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between mt-14">
            <button onClick={onClick13} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-A.png"
                  alt="product-A"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product A</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Lactulose Concentrate 1.34g/ml
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Syrup(15mL per stick)
                </span>
              </div>
            </button>
            <button onClick={onClick14} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-B.png"
                  alt="product-B"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product B</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Bisacodyl 5mg, Docusate Sodium 16.75mg
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Enteric-coated tablets
                </span>
              </div>
            </button>
            <button onClick={onClick15} className="flex flex-col items-center">
              <div className="bg-white px-8 py-7 rounded-lg">
                <Image
                  src="/product-C.png"
                  alt="product-C"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product C</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Psyllium Husk 3.25g/stick
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Powder
                </span>
              </div>
            </button>
          </div>
        </div>
      ) : null}
      {flag17 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>You are correct!</span>
            <span>Let&apos;s move on to the patient consult.</span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick18}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Go to Patient Consult</span>
          </button>
        </>
      ) : null}
      {flag18 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>
              Bisacodyl is a Stimulant laxative which can raise blood pressure.
            </span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick16}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag19 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>
              Psyllium Husk is a Bulk-forming laxative which cannot be used in
              diabetes.
            </span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick17}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag20 ? (
        <>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mt-20">
            <span className="text-xl text-gray-500">
              Choose all the options which are correct.
            </span>
          </div>
          <form
            onSubmit={handleSubmit2}
            className="flex flex-col items-center justify-center gap-8 w-full"
          >
            <div className="flex flex-col gap-4 justify-center bg-[#D8E4D8] w-[60%] h-[85vh] px-8 opacity-90 shadow-lg rounded-lg -mt-14">
              {items2.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center gap-3">
                  {idx === 0 ? (
                    <span className="text-gray-600 text-lg">
                      1) Administer during breakfast.
                    </span>
                  ) : null}
                  {idx === 1 ? (
                    <span className="text-gray-600 text-lg">
                      2) For moderate cases, 15 to 30 mL per day orally before
                      breakfast for the first 2 to 3 days, then 10 to 15 mL per
                      day.
                    </span>
                  ) : null}
                  {idx === 2 ? (
                    <span className="text-gray-600 text-lg">
                      3) In severe cases, up to 70 mL may be given.
                    </span>
                  ) : null}
                  {idx === 3 ? (
                    <span className="text-gray-600 text-lg">
                      4) Stimulant laxatives can raise blood pressure, and
                      bulk-forming laxatives containing sodium or sugar are not
                      suitable for use in diabetic patients due to these risks,
                      so I will provide you with Hyperosmotic laxatives that
                      have fewer such risks.
                    </span>
                  ) : null}
                  {idx === 4 ? (
                    <span className="text-gray-600 text-lg">
                      5) You will directly have a normal bowel movement.
                    </span>
                  ) : null}
                  {idx === 5 ? (
                    <span className="text-gray-600 text-lg break-all">
                      6) It is recommended for prolonged use.
                    </span>
                  ) : null}
                  {idx === 6 ? (
                    <span className="text-gray-600 text-lg break-all">
                      7) When administered in combination with broad-spectrum
                      antibiotics, changes in the intestinal flora may reduce
                      the efficacy of this drug, so consult a doctor before
                      using it with antibiotics.
                    </span>
                  ) : null}
                  {idx === 7 ? (
                    <span className="text-gray-600 text-lg break-all">
                      8) There&apos;s no need to drink water every day and eat
                      fiber-rich foods.
                    </span>
                  ) : null}
                  {idx === 8 ? (
                    <span className="text-gray-600 text-lg break-all">
                      9) Feel bloated and abdominal pain may appear in the
                      stomach at the beginning of administration.
                    </span>
                  ) : null}
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedItems2.includes(idx)}
                      onChange={() => handleCheckbox2(idx)}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#5BC17F] px-7 py-2 rounded-full mb-20"
            >
              <span className="text-white">Done</span>
            </button>
          </form>
        </>
      ) : null}
      {flag21 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>Oh my god.</span>
            <span>I think you gave wrong information to the patient.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick19}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag22 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              You are all correct! Right patient consult was…
            </span>
          </div>
          <div className="flex flex-col justify-center w-[60%] h-[65vh] bg-white opacity-90 rounded-lg -mt-14 pl-14 gap-2">
            <span>- Administer before breakfast.</span>
            <span>
              - For moderate cases, 15 to 30 mL per day orally before breakfast
              for the first 2 to 3 days, then 10 to 15 mL per day.
            </span>
            <span>- In severe cases, up to 45 mL may be given.</span>
            <span>
              - Stimulant laxatives can raise blood pressure, and bulk-forming
              laxatives containing sodium or sugar are not suitable for use in
              diabetic patients due to these risks, so I will provide you with
              Hyperosmotic laxatives that have fewer such risks.
            </span>
            <span>- It may take 1-2 days to have a normal bowel movement.</span>
            <span>
              - Long-term reliance on the medication can lead to dependence and
              changes in bowel habits, so it is not recommended for prolonged
              use.
            </span>
            <span>
              - When administered in combination with broad-spectrum
              antibiotics, changes in the intestinal flora may reduce the
              efficacy of this drug, so consult a doctor before using it with
              antibiotics.
            </span>
            <span>
              - Drink enough water every day and eat fiber-rich foods such as
              prune and kelp.
            </span>
            <span>
              - Feel bloated and abdominal pain may appear in the stomach at the
              beginning of administration.
            </span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute top-[10%] left-[12%]"
            />
          </div>
          <button
            onClick={onClick20}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg -mt-8"
          >
            <span className="text-lg text-white">Go to See the Result</span>
          </button>
        </>
      ) : null}
      {flag23 ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Few Weeks Later... The patient visited the pharmacy.
          </span>
        </div>
      ) : null}
      {flag24 ? (
        <>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Me (pharmacist): How is it going?
            </span>
          </div>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 px-8 py-12">
            <span className="text-xl text-gray-500 text-center">
              Patient: Great! My constipation had gone really well. Thank you
              for your help.
            </span>
          </div>
        </>
      ) : null}
      {flag25 ? (
        <div className="flex flex-col items-center justify-center rounded-md w-full gap-8">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Me (pharmacist): Is abdominal pain accompanied by constipation?
            </span>
          </div>
          <button
            onClick={onClick22}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              No abdominal pain, and I want a fast-acting medicine.
            </span>
          </button>
          <button
            onClick={onClick29}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              Yes, there is abdominal pain.
            </span>
          </button>
        </div>
      ) : null}
      {flag26 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between mt-14">
            <button onClick={onClick23} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-A.png"
                  alt="product-A"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product A</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Lactulose Concentrate 1.34g/ml
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Syrup(15mL per stick)
                </span>
              </div>
            </button>
            <button onClick={onClick25} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-B.png"
                  alt="product-B"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product B</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Bisacodyl 5mg, Docusate Sodium 16.75mg
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Enteric-coated tablets
                </span>
              </div>
            </button>
            <button onClick={onClick23} className="flex flex-col items-center">
              <div className="bg-white px-8 py-7 rounded-lg">
                <Image
                  src="/product-C.png"
                  alt="product-C"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product C</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Psyllium Husk 3.25g/stick
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Powder
                </span>
              </div>
            </button>
          </div>
        </div>
      ) : null}
      {flag27 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>The patient wants a fast-acting medicine.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick24}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag28 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>You are correct!</span>
            <span>Let&apos;s move on to the patient consult.</span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick26}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Go to Patient Consult</span>
          </button>
        </>
      ) : null}
      {flag29 ? (
        <>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Choose all the options which are correct.
            </span>
          </div>
          <form
            onSubmit={handleSubmit3}
            className="flex flex-col items-center justify-center gap-8 w-full"
          >
            <div className="flex flex-col gap-4 justify-center bg-[#D8E4D8] w-[60%] h-[50vh] px-8 opacity-90 shadow-lg rounded-lg -mt-14">
              {items3.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center gap-3">
                  {idx === 0 ? (
                    <span className="text-gray-600 text-lg">
                      1) Take 2 tablets once a day, before breakfast.
                    </span>
                  ) : null}
                  {idx === 1 ? (
                    <span className="text-gray-600 text-lg">
                      2) This medication is the fastest-acting laxative compared
                      to others.
                    </span>
                  ) : null}
                  {idx === 2 ? (
                    <span className="text-gray-600 text-lg">
                      3) You should break or chew the pill.
                    </span>
                  ) : null}
                  {idx === 3 ? (
                    <span className="text-gray-600 text-lg">
                      4) It is alright to consume dairy products or antacids
                      together.
                    </span>
                  ) : null}
                  {idx === 4 ? (
                    <span className="text-gray-600 text-lg">
                      5) Long-term reliance on the medication can lead to
                      dependence and changes in bowel habits, so it is not
                      recommended for prolonged use.
                    </span>
                  ) : null}
                  {idx === 5 ? (
                    <span className="text-gray-600 text-lg break-all">
                      6) Drink enough water every day and eat fiber-rich foods
                      such as prune and kelp.
                    </span>
                  ) : null}
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedItems3.includes(idx)}
                      onChange={() => handleCheckbox3(idx)}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#5BC17F] px-7 py-2 rounded-full"
            >
              <span className="text-white">Done</span>
            </button>
          </form>
        </>
      ) : null}
      {flag30 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>Oh my god.</span>
            <span>I think you gave wrong information to the patient.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick27}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag31 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              You are all correct! Right patient consult was…
            </span>
          </div>
          <div className="flex flex-col justify-center w-[60%] h-[40vh] bg-white opacity-90 rounded-lg -mt-14 pl-14 gap-2">
            <span>- Take 2 tablets once a day, before bedtime.</span>
            <span>
              - This medication is the fastest-acting laxative compared to
              others.
            </span>
            <span>
              - You should take the pill by swallowing it whole without breaking
              or chewing it.
            </span>
            <span>
              - If you consume dairy products or antacids together, the coating
              of the enteric-coated tablet may be stripped off, so you should
              take them at least one hour apart.
            </span>
            <span>
              - Long-term reliance on the medication can lead to dependence and
              changes in bowel habits, so it is not recommended for prolonged
              use.
            </span>
            <span>
              - Drink enough water every day and eat fiber-rich foods such as
              prune and kelp.
            </span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute top-[10%] left-[13%]"
            />
          </div>
          <button
            onClick={onClick28}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg -mt-8"
          >
            <span className="text-lg text-white">Go to See the Result</span>
          </button>
        </>
      ) : null}
      {flag32 ? (
        <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 fixed bottom-[15%]">
          <span className="text-xl text-gray-500">
            Few Weeks Later... The patient visited the pharmacy.
          </span>
        </div>
      ) : null}
      {flag33 ? (
        <>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Me (pharmacist): How is it going?
            </span>
          </div>
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 px-8 py-12">
            <span className="text-xl text-gray-500 text-center">
              Patient: Great! My constipation had gone really well. Thank you
              for your help.
            </span>
          </div>
        </>
      ) : null}
      {flag34 ? (
        <div className="flex flex-col items-center justify-center rounded-md w-full gap-8">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Me (pharmacist): Do you prefer swallowing powder all at once or
              taking a squeezable syrup?
            </span>
          </div>
          <button
            onClick={onClick30}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              I prefer the powder form.
            </span>
          </button>
          <button
            onClick={onClick35}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              I prefer the syrup form.
            </span>
          </button>
        </div>
      ) : null}
      {flag35 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between mt-14">
            <button onClick={onClick31} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-A.png"
                  alt="product-A"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product A</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Lactulose Concentrate 1.34g/ml
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Syrup(15mL per stick)
                </span>
              </div>
            </button>
            <button onClick={onClick31} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-B.png"
                  alt="product-B"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product B</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Bisacodyl 5mg, Docusate Sodium 16.75mg
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Enteric-coated tablets
                </span>
              </div>
            </button>
            <button onClick={onClick32_} className="flex flex-col items-center">
              <div className="bg-white px-8 py-7 rounded-lg">
                <Image
                  src="/product-C.png"
                  alt="product-C"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product C</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Psyllium Husk 3.25g/stick
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Powder
                </span>
              </div>
            </button>
          </div>
        </div>
      ) : null}
      {flag36 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>The patient wants to swallow as powder form.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick32}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag37 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>You are correct!</span>
            <span>Let&apos;s move on to the patient consult.</span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick33}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Go to Patient Consult</span>
          </button>
        </>
      ) : null}
      {flag38 ? (
        <>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Choose all the options which are correct.
            </span>
          </div>
          <form
            onSubmit={handleSubmit4}
            className="flex flex-col items-center justify-center gap-8 w-full"
          >
            <div className="flex flex-col gap-4 justify-center bg-[#D8E4D8] w-[60%] h-[50vh] px-8 opacity-90 shadow-lg rounded-lg -mt-14">
              {items4.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center gap-3">
                  {idx === 0 ? (
                    <span className="text-gray-600 text-lg">
                      1) Take 1 sachet, 1 to 3 times daily, orally, before or
                      between meals.
                    </span>
                  ) : null}
                  {idx === 1 ? (
                    <span className="text-gray-600 text-lg">
                      2) To take, place one sachet in a suitable bowl of cold
                      water, stir the contents well. Do not drink the entire
                      amount immediately, drink small amounts over time.
                    </span>
                  ) : null}
                  {idx === 2 ? (
                    <span className="text-gray-600 text-lg">
                      3) If you take it without water as directed, be sure to
                      drink plenty of fluids.
                    </span>
                  ) : null}
                  {idx === 3 ? (
                    <span className="text-gray-600 text-lg">
                      4) If you don&apos;t feel any improvement after a week of
                      taking it, or if you have rectal bleeding, it is normal
                      reaction so ignore it.
                    </span>
                  ) : null}
                  {idx === 4 ? (
                    <span className="text-gray-600 text-lg">
                      5) You should drink plenty of water and eat fiber-rich
                      foods every day.
                    </span>
                  ) : null}
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedItems4.includes(idx)}
                      onChange={() => handleCheckbox4(idx)}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#5BC17F] px-7 py-2 rounded-full"
            >
              <span className="text-white">Done</span>
            </button>
          </form>
        </>
      ) : null}
      {flag39 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>Oh my god.</span>
            <span>I think you gave wrong information to the patient.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick34}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag40 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              You are all correct! Right patient consult was…
            </span>
          </div>
          <div className="flex flex-col justify-center w-[60%] h-[40vh] bg-white opacity-90 rounded-lg -mt-14 pl-14 gap-2">
            <span>
              - Take 1 sachet, 1 to 3 times daily, orally, before or between
              meals.
            </span>
            <span>
              - To take, place one sachet in a suitable bowl of cold water, stir
              the contents well, and drink the entire amount immediately.
            </span>
            <span>
              - If you take it without water as directed, be sure to drink
              plenty of fluids.
            </span>
            <span>
              - If you don&apos;t feel any improvement after a week of taking
              it, or if you have rectal bleeding, you should consult a
              healthcare professional.
            </span>
            <span>
              - You should drink plenty of water and eat fiber-rich foods every
              day.
            </span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute top-[10%] left-[15%]"
            />
          </div>
          <button
            onClick={onClick28_1}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg -mt-8"
          >
            <span className="text-lg text-white">Go to See the Result</span>
          </button>
        </>
      ) : null}
      {flag41 ? (
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Choose the best treatment options.
            </span>
          </div>
          <div className="flex flex-row items-center w-full gap-5 justify-between mt-14">
            <button onClick={onClick38} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-A.png"
                  alt="product-A"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product A</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Lactulose Concentrate 1.34g/ml
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Syrup(15mL per stick)
                </span>
              </div>
            </button>
            <button onClick={onClick36} className="flex flex-col items-center">
              <div className="bg-white px-8 py-4 rounded-lg">
                <Image
                  src="/product-B.png"
                  alt="product-B"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product B</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Bisacodyl 5mg, Docusate Sodium 16.75mg
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Enteric-coated tablets
                </span>
              </div>
            </button>
            <button onClick={onClick36} className="flex flex-col items-center">
              <div className="bg-white px-8 py-7 rounded-lg">
                <Image
                  src="/product-C.png"
                  alt="product-C"
                  width={150}
                  height={100}
                />
              </div>
              <div className="mt-8 flex flex-col text-gray-600 bg-white px-6 py-4 rounded-lg shadow-lg opacity-90">
                <span className="font-semibold text-lg mb-2">Product C</span>
                <span className="mb-1">
                  <span className="font-bold">&middot; </span>
                  Ingredient: Psyllium Husk 3.25g/stick
                </span>
                <span>
                  <span className="font-bold">&middot; </span>
                  Formulation: Powder
                </span>
              </div>
            </button>
          </div>
        </div>
      ) : null}
      {flag42 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>The patient wants to take a squeezable syrup.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick37}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag43 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>You are correct!</span>
            <span>Let&apos;s move on to the patient consult.</span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick39}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Go to Patient Consult</span>
          </button>
        </>
      ) : null}
      {flag44 ? (
        <>
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              Choose all the options which are correct.
            </span>
          </div>
          <form
            onSubmit={handleSubmit5}
            className="flex flex-col items-center justify-center gap-8 w-full"
          >
            <div className="flex flex-col gap-4 justify-center bg-[#D8E4D8] w-[60%] h-[50vh] px-8 opacity-90 shadow-lg rounded-lg -mt-14">
              {items5.map((item, idx) => (
                <div key={idx} className="flex flex-row items-center gap-3">
                  {idx === 0 ? (
                    <span className="text-gray-600 text-lg">
                      1) Administer during breakfast.
                    </span>
                  ) : null}
                  {idx === 1 ? (
                    <span className="text-gray-600 text-lg">
                      2) For moderate cases, 15 to 30 mL per day orally before
                      breakfast for the first 2 to 3 days, then 10 to 15 mL per
                      day.
                    </span>
                  ) : null}
                  {idx === 2 ? (
                    <span className="text-gray-600 text-lg">
                      3) In severe cases, up to 70 mL may be given.
                    </span>
                  ) : null}
                  {idx === 3 ? (
                    <span className="text-gray-600 text-lg">
                      4) Gas, farting, and abdominal pain may occur in the early
                      days of treatment.
                    </span>
                  ) : null}
                  {idx === 4 ? (
                    <span className="text-gray-600 text-lg">
                      5) It is alright to combine the medicine with antibiotics.
                    </span>
                  ) : null}
                  {idx === 5 ? (
                    <span className="text-gray-600 text-lg break-all">
                      6) The medicine is safe to prolonged use of high doses.
                    </span>
                  ) : null}
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedItems5.includes(idx)}
                      onChange={() => handleCheckbox5(idx)}
                    />
                  </label>
                </div>
              ))}
            </div>
            <button
              type="submit"
              className="bg-[#5BC17F] px-7 py-2 rounded-full"
            >
              <span className="text-white">Done</span>
            </button>
          </form>
        </>
      ) : null}
      {flag45 ? (
        <>
          <div className="fixed w-full h-screen bg-[#FF0017] opacity-20 -z-10" />
          <div className="flex flex-col items-center justify-center w-[60%] h-48 bg-white opacity-90 rounded-lg mt-24">
            <span>Oh my god.</span>
            <span>I think you gave wrong information to the patient.</span>
            <span>Please try again!</span>
            <Image
              src="/wrong.png"
              alt="wrong"
              width={200}
              height={100}
              className="absolute left-[15%]"
            />
          </div>
          <button
            onClick={onClick40}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg mt-12"
          >
            <span className="text-lg text-white">Try again</span>
          </button>
        </>
      ) : null}
      {flag46 ? (
        <>
          <div className="fixed w-full h-screen bg-[#00A700] opacity-20 -z-10" />
          <div className="flex items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90">
            <span className="text-xl text-gray-500">
              You are all correct! Right patient consult was…
            </span>
          </div>
          <div className="flex flex-col justify-center w-[60%] h-[40vh] bg-white opacity-90 rounded-lg -mt-14 pl-14 gap-2">
            <span>- Administer before breakfast.</span>
            <span>
              - For moderate cases, 15 to 30 mL per day orally before breakfast
              for the first 2 to 3 days, then 10 to 15 mL per day.
            </span>
            <span>- In severe cases, up to 45 mL may be given.</span>
            <span>
              - Gas, farting, and abdominal pain may occur in the early days of
              treatment.
            </span>
            <span>
              - Always consult a healthcare professional before combining with
              antibiotics.
            </span>
            <span>
              - Prolonged use of high doses may cause electrolyte imbalance due
              to diarrhea. Do not use it for prolonged periods without
              consulting a healthcare professional.
            </span>
            <Image
              src="/correct.png"
              alt="correct"
              width={200}
              height={100}
              className="absolute top-[10%] left-[15%]"
            />
          </div>
          <button
            onClick={onClick28_2}
            className="w-60 h-10 bg-gray-300 rounded-full shadow-lg -mt-8"
          >
            <span className="text-lg text-white">Go to See the Result</span>
          </button>
        </>
      ) : null}
      {flag47 ? (
        <div className="flex flex-col items-center justify-center rounded-md w-full gap-8">
          <div className="flex flex-col items-center justify-center rounded-md w-3/5 h-14 bg-white opacity-90 mb-10">
            <span className="text-xl text-gray-500">
              Me (pharmacist): Do you prefer swallowing powder all at once or
              taking a squeezable syrup?
            </span>
          </div>
          <button
            onClick={onClick30_1}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              I prefer the powder form.
            </span>
          </button>
          <button
            onClick={onClick35_1}
            className="flex items-center justify-center bg-[#D8E4D8] w-[50%] h-14 shadow-lg rounded-lg"
          >
            <span className="text-gray-600 text-lg">
              I prefer the syrup form.
            </span>
          </button>
        </div>
      ) : null} */} 
    </div>
  );
}
