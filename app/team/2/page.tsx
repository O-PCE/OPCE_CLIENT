"use client";

import Team from "../../components/team/Team";

export default function Team2() {
  return (
    <Team 
    name = {"SGPharmers"}
    authors={"Tricia Tay, Joelle Tang"} 
    description={"This is a case of selecting the right medicine for cough and cold symptoms for patients with different demographics\n"+
      ": paediatric (>2 years old), elderly with comorbidities and adult taking supplements"}
    link={"/team/2/otc-info"}/>
  )
};