"use client";

import Team from "@/app/components/team/Team";


export default function Team1() {
  return (
    <Team 
    name = {"Team KT"}
    authors={"Jia-Zhen Rao, Seongjoon Kim, Jiseon Hur"} 
    description={"This is a case of selecting the right cold medication depending on the patient's symptoms, medical history, and lifestyle habits."}
    link={"/team/1/otc-info"}/>
  );
}
