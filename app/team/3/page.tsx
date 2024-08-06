"use client";

import Team from "../../components/team/Team";

export default function Team3() {
  return (
    <Team 
    name = {"BigBang"}
    authors={"Minjung Kim, Yeju Ryu, Pinchun Chang"} 
    description={"A female patient in her 20s, a flight attendant."}
    link={"/team/3/otc-info"}/>
  )
};